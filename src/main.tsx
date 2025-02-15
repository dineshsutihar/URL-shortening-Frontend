import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import RedirectHandler from "./components/Redirect.tsx";
import LoginForm from "./components/login.tsx";
import Register from "./components/register.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:shortKey" element={<RedirectHandler />} />
        <Route path="/auth/login" element={<LoginForm />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </Router>
  </StrictMode>
);
