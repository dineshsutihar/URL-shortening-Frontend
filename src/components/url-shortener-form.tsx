"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import shortenLink from "@/lib/server-calls";
import { useAuth } from "@/lib/auth-context";

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3030";

interface UrlShortenerFormProps {
  onShortened?: () => void;
}

export function UrlShortenerForm({ onShortened }: UrlShortenerFormProps) {
  const [url, setUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const { isAuthenticated } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      toast.error("Please enter a URL to shorten", { position: "top-right" });
      return;
    }
    if (!url.startsWith("http")) {
      toast.error("Please enter a valid URL (must start with http)", {
        position: "top-right",
      });
      return;
    }
    const shortCode = await shortenLink(url);
    if (shortCode) {
      setResponse(shortCode);
      setUrl("");
      setCustomCode("");
      if (onShortened) onShortened();
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <form onSubmit={handleSubmit} className="flex w-full gap-4 flex-wrap">
        <Input
          type="url"
          placeholder="Paste your long URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 min-w-[200px]"
          required
        />
        {isAuthenticated && (
          <Input
            type="text"
            placeholder="Custom short code (optional)"
            value={customCode}
            onChange={(e) => setCustomCode(e.target.value)}
            className="w-48"
          />
        )}
        <Button type="submit" size="lg">
          Shorten It!
        </Button>
      </form>
      {response && (
        <div className="flex items-center gap-3 p-3 rounded-md border bg-muted/40">
          <p className="text-sm text-gray-700 flex-1">
            Short URL:{" "}
            <a
              href={`${backendUrl}/${response}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              {`${backendUrl}/${response}`}
            </a>
          </p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              navigator.clipboard.writeText(`${backendUrl}/${response}`);
              toast.success("Copied!", { position: "top-right" });
            }}
          >
            Copy
          </Button>
        </div>
      )}
    </div>
  );
}

