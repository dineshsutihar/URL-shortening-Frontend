"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

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

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

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
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-ddarkBlueNeutral">
                  First name
                </Label>
                <Input
                  id="firstName"
                  required
                  className="border-dgrayNeutral focus:border-dcyanPrimary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-ddarkBlueNeutral">
                  Last name
                </Label>
                <Input
                  id="lastName"
                  required
                  className="border-dgrayNeutral focus:border-dcyanPrimary"
                />
              </div>
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
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
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
            >
              Create Account
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
