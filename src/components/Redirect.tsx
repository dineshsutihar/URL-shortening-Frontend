import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Ripple } from "./magicui/ripple";

const RedirectHandler = () => {
  const { shortKey } = useParams(); // Get short key from URL
  const [message, setMessage] = useState("Redirecting...");

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      try {
        const response = await axios.get(`http://localhost:3031/${shortKey}`);
        if (response.status === 200) {
          window.location.href = response.request.responseURL; // Redirect to original URL
        }
      } catch (error) {
        setMessage("Invalid URL. Redirecting to home page...");
        console.error("Error redirecting", error);
        setTimeout(() => {
          window.location.href = "/404";
        }, 5000);
      }
    };

    fetchOriginalUrl();
  }, [shortKey]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-gradient-to-r from-[#f0f0f0] to-[#7c6e6a]">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
        {message}
      </p>
      <Ripple />
    </div>
  );
};

export default RedirectHandler;
