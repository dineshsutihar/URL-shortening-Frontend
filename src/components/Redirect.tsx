import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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

  return <h3>Redirecting...</h3>;
};

export default RedirectHandler;
