import { toast } from "sonner";
import axios from "axios";
import { useState } from "react";

export default function ShortenLink() {
  const [url, setUrl] = useState("");
  const shortenLink = async () => {
    try {
      const response = await axios.post("http://localhost:3031/shorten", {
        url: url,
      });
      console.log(response.data);
      toast.success("Link shortened successfully", {
        description: response.data,
      });
    } catch (error) {
      console.error(error);
      toast.error("Error while shortening the link", {
        description: "Please try again later",
      });
    }
  };

  return (
    <div className="relative bg-gray-900 border border-amber-400 rounded-xl mt-32 mx-4 md:mx-0">
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
        >
          Shorten It!
        </button>
      </div>
    </div>
  );
}
