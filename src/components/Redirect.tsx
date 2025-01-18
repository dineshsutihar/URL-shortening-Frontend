import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Ripple } from "./magicui/ripple";

const RedirectHandler = () => {
  const { shortKey } = useParams();

  useEffect(() => {
    if (shortKey) {
      window.location.href = `${import.meta.env.VITE_BACKEND_URL}/${shortKey}`;
    }
  }, [shortKey]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-gradient-to-r from-[#f0f0f0] to-[#7c6e6a]">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
        Redirecting...
      </p>
      <Ripple />
    </div>
  );
};

export default RedirectHandler;
