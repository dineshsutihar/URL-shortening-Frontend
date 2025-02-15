"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container flex h-screen w-full flex-col items-center justify-center font-poppins">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-ddarkVioletNeutral">
            Welcome back
          </CardTitle>
          <CardDescription className="text-dvioletGrayNeutral">
            Enter your email and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-ddarkBlueNeutral">
                Email
              </Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
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
            <Button
              className="w-full bg-dcyanPrimary font-semibold text-white hover:bg-opacity-70"
              type="submit"
            >
              Sign In
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <Link
              className="text-dcyanPrimary hover:underline"
              href="/auth/forgot-password"
            >
              Forgot your password?
            </Link>
          </div>
          <div className="mt-4 text-center text-sm text-dvioletGrayNeutral">
            Don&apos;t have an account?{" "}
            <Link
              className="text-dcyanPrimary hover:underline"
              href="/auth/register"
            >
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
