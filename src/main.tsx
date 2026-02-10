import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import LoginForm from "./components/login.tsx";
import Register from "./components/register.tsx";
import TermsAndConditions from "./components/terms-and-conditions.tsx";
import Error from "./components/404.tsx";
import DashboardPage from "./components/Dashboard.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import { AuthProvider } from "./lib/auth-context.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <Toaster />
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route path="/auth/login" element={<LoginForm />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/policy/terms" element={<TermsAndConditions />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </Router>
  </StrictMode>
);

