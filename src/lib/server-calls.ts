import axios from "axios";
import { toast } from "sonner";

const apiUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3030";

const api = axios.create({
  baseURL: apiUrl,
  headers: { "Content-Type": "application/json" },
});

// Attach JWT token to every request if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ------- Auth -------

export async function loginUser(email: string, password: string): Promise<string | null> {
  try {
    const res = await api.post("/api/auth/login", { email, password });
    const token: string = res.data.token;
    localStorage.setItem("token", token);
    toast.success("Logged in successfully", { position: "top-right" });
    return token;
  } catch (error: any) {
    toast.error("Login failed", {
      description: error.response?.data?.error || "Invalid credentials",
      position: "top-right",
    });
    return null;
  }
}

export async function registerUser(name: string, email: string, password: string): Promise<boolean> {
  try {
    await api.post("/api/auth/register", { name, email, password });
    toast.success("Account created! Please log in.", { position: "top-right" });
    return true;
  } catch (error: any) {
    toast.error("Registration failed", {
      description: error.response?.data?.error || "An error occurred",
      position: "top-right",
    });
    return false;
  }
}

export function logoutUser() {
  localStorage.removeItem("token");
}

export function isLoggedIn(): boolean {
  return !!localStorage.getItem("token");
}

// ------- User -------

export async function getUserProfile() {
  try {
    const res = await api.get("/api/user/profile");
    return res.data as { id: number; email: string; name: string };
  } catch {
    return null;
  }
}

// ------- URLs -------

export default async function shortenLink(url: string): Promise<string | null> {
  const token = localStorage.getItem("token");
  try {
    let shortCode: string;
    if (token) {
      const res = await api.post("/api/url/private", { url });
      shortCode = res.data.shortCode;
    } else {
      const res = await api.post("/api/url/public", { url });
      shortCode = res.data.shortCode;
    }
    toast.success("Link shortened successfully", {
      description: shortCode,
      position: "top-right",
    });
    return shortCode;
  } catch (error: any) {
    toast.error("Error while shortening the link", {
      description: error.response?.data?.error || "An error occurred",
      position: "top-right",
    });
    return null;
  }
}

export async function getMyUrls() {
  try {
    const res = await api.get("/api/url/my-urls");
    return res.data as Array<{
      id: number;
      shortCode: string;
      originalUrl: string;
      createdAt: string;
      expiredAt: string;
      clickCount: number;
    }>;
  } catch {
    return [];
  }
}

export async function deleteUrl(id: number): Promise<boolean> {
  try {
    await api.delete(`/api/url/delete/${id}`);
    toast.success("URL deleted", { position: "top-right" });
    return true;
  } catch (error: any) {
    toast.error("Delete failed", {
      description: error.response?.data?.error || "An error occurred",
      position: "top-right",
    });
    return false;
  }
}

export async function updateUrlExpiry(id: number, expiredAt: string): Promise<boolean> {
  try {
    await api.put(`/api/url/change-expired/${id}`, { expiredAt });
    toast.success("Expiry updated", { position: "top-right" });
    return true;
  } catch (error: any) {
    toast.error("Update failed", {
      description: error.response?.data?.error || "An error occurred",
      position: "top-right",
    });
    return false;
  }
}

export async function getUserStats(): Promise<{ totalLinks: number; totalClicks: number } | null> {
  try {
    const res = await api.get("/api/url/stats");
    return res.data;
  } catch {
    return null;
  }
}
