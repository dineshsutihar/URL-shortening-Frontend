import { toast } from "sonner";
import axios from "axios";
import { useState } from "react";

export default function ShortenLink() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const shortenLink = async () => {
    setLoading(true);
    if (!url) {
      toast.error("Please enter a URL to shorten", {
        position: "top-right",
      });
      setLoading(false);
      return;
    }
    axios
      .post(`${process.env.BACKEND_URL}/shorten`, {
        url: url,
      })
      .then((response) => {
        setLoading(false);
        toast.success("Link shortened successfully", {
          description: response.data,
          position: "top-right",
        });
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Error while shortening the link", {
          description: error.response?.data || "An error occurred",
          position: "top-right",
        });
      });
  };

  return (
    <div
      id="shorten"
      className="relative bg-gray-900 border border-amber-400 rounded-xl md:mt-5 mx-4 md:mx-0"
    >
      <picture className="absolute inset-0 h-full rounded-xl">
        <source
          media="(min-width: 768px)"
          srcSet="/images/bg-shorten-desktop.svg"
        />
        <img
          className="w-full h-full object-cover rounded-xl"
          src="/images/bg-shorten-mobile.svg"
          alt="URL shortener background"
        />
      </picture>
      <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="text"
          name="longlink"
          placeholder="Shorten a link here..."
          className="w-full px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="w-full md:w-40 px-5 py-3 text-xl font-semibold text-white 
                 bg-[hsl(180,66%,49%)] rounded whitespace-nowrap 
                 hover:bg-opacity-80 transition-colors duration-300"
          onClick={() => shortenLink()}
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center space-x-2">
              <span>Please wait</span>
              <span>
                <svg
                  className="animate-spin"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.5"
                    cx="10"
                    cy="10"
                    r="9"
                    stroke="white"
                    stroke-width="2"
                  />
                  <mask id="path-2-inside-1_2527_20936" fill="white">
                    <path d="M18.4713 13.0345C18.9921 13.221 19.5707 12.9508 19.7043 12.414C20.0052 11.2042 20.078 9.94582 19.9156 8.70384C19.7099 7.12996 19.1325 5.62766 18.2311 4.32117C17.3297 3.01467 16.1303 1.94151 14.7319 1.19042C13.6285 0.597723 12.4262 0.219019 11.1884 0.0708647C10.6392 0.00512742 10.1811 0.450137 10.1706 1.00319C10.1601 1.55625 10.6018 2.00666 11.1492 2.08616C12.0689 2.21971 12.9609 2.51295 13.7841 2.95511C14.9023 3.55575 15.8615 4.41394 16.5823 5.45872C17.3031 6.50351 17.7649 7.70487 17.9294 8.96348C18.0505 9.89002 18.008 10.828 17.8063 11.7352C17.6863 12.2751 17.9506 12.848 18.4713 13.0345Z" />
                  </mask>
                  <path
                    d="M18.4713 13.0345C18.9921 13.221 19.5707 12.9508 19.7043 12.414C20.0052 11.2042 20.078 9.94582 19.9156 8.70384C19.7099 7.12996 19.1325 5.62766 18.2311 4.32117C17.3297 3.01467 16.1303 1.94151 14.7319 1.19042C13.6285 0.597723 12.4262 0.219019 11.1884 0.0708647C10.6392 0.00512742 10.1811 0.450137 10.1706 1.00319C10.1601 1.55625 10.6018 2.00666 11.1492 2.08616C12.0689 2.21971 12.9609 2.51295 13.7841 2.95511C14.9023 3.55575 15.8615 4.41394 16.5823 5.45872C17.3031 6.50351 17.7649 7.70487 17.9294 8.96348C18.0505 9.89002 18.008 10.828 17.8063 11.7352C17.6863 12.2751 17.9506 12.848 18.4713 13.0345Z"
                    stroke="white"
                    stroke-width="4"
                    mask="url(#path-2-inside-1_2527_20936)"
                  />
                </svg>
              </span>
            </div>
          ) : (
            "Shorten It!"
          )}
        </button>
      </div>
    </div>
  );
}
