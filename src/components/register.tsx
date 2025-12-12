"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { registerUser } from "@/lib/server-calls";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setLoading(true);
    const success = await registerUser(name, email, password);
    setLoading(false);
    if (success) {
      navigate("/auth/login");
    }
  };

  return (
    <div className="container flex h-screen w-full flex-col items-center justify-center font-poppins">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-ddarkVioletNeutral">
            Create an account
          </CardTitle>
          <CardDescription className="text-dvioletGrayNeutral">
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-ddarkBlueNeutral">
                Full name
              </Label>
              <Input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-dgrayNeutral focus:border-dcyanPrimary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-ddarkBlueNeutral">
                Email
              </Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-dgrayNeutral focus:border-dcyanPrimary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-ddarkBlueNeutral">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-dgrayNeutral focus:border-dcyanPrimary"
                />
                <Button
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                  variant="ghost"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-dvioletGrayNeutral" />
                  ) : (
                    <Eye className="h-4 w-4 text-dvioletGrayNeutral" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={agreed}
                onCheckedChange={(v) => setAgreed(!!v)}
                required
              />
              <Label
                className="text-sm text-dvioletGrayNeutral"
                htmlFor="terms"
              >
                I agree to the{" "}
                <a
                  className="text-dcyanPrimary hover:underline"
                  href="/policy/terms"
                >
                  terms and conditions
                </a>
              </Label>
            </div>
            <Button
              className="w-full bg-dcyanPrimary font-semibold text-white hover:bg-opacity-70"
              type="submit"
              disabled={loading || !agreed}
            >
              {loading ? "Creating..." : "Create Account"}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-dvioletGrayNeutral">
            Already have an account?{" "}
            <a className="text-dcyanPrimary hover:underline" href="/auth/login">
              Sign in
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

