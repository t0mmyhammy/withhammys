"use client";
import React, { useState } from "react";

// Import ShadCN UI components
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const PASSWORD_KEY = "hammy_access_granted";

export default function PasswordGate() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const sitePasswords = process.env.NEXT_PUBLIC_SITE_PASSWORD?.split(',') || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValidPassword = sitePasswords.some(pwd => password === pwd.trim());
    
    if (isValidPassword) {
      localStorage.setItem(PASSWORD_KEY, "true");
      window.location.reload();
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-6 p-8 rounded-lg shadow-lg bg-white dark:bg-zinc-900">
        <img src="/logos/hammy-stacked.svg" alt="Hammy's Logo" className="w-24 h-24 mb-2" />
        <div className="text-2xl font-discount-black text-center">Welcome Home</div>
        <div className="text-center text-muted-foreground mb-4 font-dm-sans">
          This version of the site is private for early users and partners.
        </div>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={e => { setPassword(e.target.value); setError(""); }}
              className="text-lg font-dm-sans pr-12"
              autoFocus
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <Button type="submit" className="w-full text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white font-dm-sans">Enter</Button>
        </form>
        {error && <div className="text-red-500 text-sm mt-2 font-dm-sans">{error}</div>}
      </div>
    </div>
  );
} 