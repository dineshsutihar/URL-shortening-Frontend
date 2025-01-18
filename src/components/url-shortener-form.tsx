"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import shortenLink from "@/lib/server-calls";
const rootUrl = window.location.origin;

export function UrlShortenerForm() {
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      toast.error("Please enter a URL to shorten", {
        position: "top-right",
      });
      return;
    }
    if (!url.startsWith("http")) {
      toast.error("Please enter a valid URL", {
        position: "top-right",
      });
      return;
    }
    try {
      const res = await shortenLink(url);
      setResponse(res);
    } catch (error) {
      toast.error("Error while shortening the link", {
        position: "top-right",
      });
      console.error("Error while shortening the link:", error);
    }
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit} className="flex w-full gap-4">
        <Input
          type="url"
          placeholder="Shorten a link here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1"
          required
        />
        <Button type="submit" size="lg">
          Shorten It!
        </Button>
      </form>
      {response && (
        <div className=" p-2 rounded-md">
          <p className="text-gray-700">
            Shortened URL:{" "}
            <a href={rootUrl + "/" + response}>{rootUrl + "/" + response}</a>
          </p>
        </div>
      )}
    </>
  );
}
