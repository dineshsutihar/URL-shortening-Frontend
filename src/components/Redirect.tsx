import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Ripple } from "./magicui/ripple";

const RedirectHandler = () => {
  const { shortKey } = useParams(); // Get short key from URL

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      try {
        const response = await axios.get(`http://localhost:3031/${shortKey}`);
        if (response.status === 200) {
          window.location.href = response.request.responseURL; // Redirect to original URL
        }
      } catch (error) {
        console.error("Error redirecting", error);
      }
    };

    fetchOriginalUrl();
  }, [shortKey]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
        Redirecting...
      </p>
      <Ripple />
    </div>
  );
};

export default RedirectHandler;
