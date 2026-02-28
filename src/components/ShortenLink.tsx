import { toast } from "sonner";
import { useState } from "react";
import { Copy, Check, ArrowRight, Loader2, ExternalLink } from "lucide-react";
import shortenLink from "@/lib/server-calls";
import { isLoggedIn } from "@/lib/server-calls";

export default function ShortenLink() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [shortCode, setShortCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const apiBase = import.meta.env.VITE_BACKEND_URL || "http://localhost:3030";

  const handleShorten = async () => {
    if (!url.trim()) {
      toast.error("Please enter a URL", { position: "top-right" });
      return;
    }
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      toast.error("URL must start with http:// or https://", { position: "top-right" });
      return;
    }
    setLoading(true);
    setShortCode(null);
    const code = await shortenLink(url);
    setShortCode(code);
    setLoading(false);
  };

  const handleCopy = () => {
    if (!shortCode) return;
    navigator.clipboard.writeText(`${apiBase}/${shortCode}`);
    setCopied(true);
    toast.success("Copied to clipboard!", { position: "top-right" });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="shorten"
      className="scroll-mt-20 bg-[hsl(257,27%,26%)] py-16"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-2xl font-black text-white mb-8 md:text-3xl">
          Shorten a link
        </h2>

        {/* Input row */}
        <div className="flex flex-col gap-3 md:flex-row">
          <input
            type="url"
            placeholder="https://your-very-long-url.com/goes/here"
            className="flex-1 rounded-lg border border-white/10 bg-white/10 px-5 py-3.5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(180,66%,49%)] transition-all"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleShorten()}
          />
          <button
            onClick={handleShorten}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[hsl(180,66%,49%)] px-7 py-3.5 font-semibold text-white transition-colors hover:bg-[hsl(180,66%,42%)] disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Shortening…
              </>
            ) : (
              <>
                Shorten It
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>

        {/* Result */}
        {shortCode && (
          <div className="mt-4">
            <div className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/10 px-5 py-3.5">
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-2 w-2 shrink-0 rounded-full bg-[hsl(180,66%,49%)] animate-pulse" />
                <a
                  href={`${apiBase}/${shortCode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-[hsl(180,66%,70%)] truncate hover:text-[hsl(180,66%,85%)] transition-colors flex items-center gap-1.5"
                >
                  {apiBase}/{shortCode}
                  <ExternalLink className="h-3 w-3 shrink-0" />
                </a>
              </div>
              <button
                onClick={handleCopy}
                className="shrink-0 inline-flex items-center gap-1.5 rounded-md bg-[hsl(180,66%,49%)] px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[hsl(180,66%,42%)]"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </>
                )}
              </button>
            </div>
            {!isLoggedIn() && (
              <p className="mt-3 text-sm text-gray-400">
                <a href="/auth/register" className="text-[hsl(180,66%,49%)] hover:underline font-medium">
                  Create a free account
                </a>{" "}
                to save this link and track clicks.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

