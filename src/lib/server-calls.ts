const apiUrl = import.meta.env.VITE_BACKEND_URL;
import axios from "axios";
import { toast } from "sonner";

export default async function shortenLink(url: string): Promise<string | null> {
  const result = await axios
    .post(`${apiUrl}/shorten`, {
      url: url,
    })
    .then((response) => {
      toast.success("Link shortened successfully", {
        description: response.data,
        position: "top-right",
      });
      return response.data;
    })
    .catch((error) => {
      toast.error("Error while shortening the link", {
        description: error.response?.data || "An error occurred",
        position: "top-right",
      });
      console.error("Error while shortening the link:", error);
      return null;
    });
  return result;
}