"use client";
import React, { useState } from "react";

// Import ShadCN UI components
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const PASSWORD_KEY = "hammy_access_granted";

export default function PasswordGate() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const sitePassword = process.env.NEXT_PUBLIC_SITE_PASSWORD;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === sitePassword) {
      localStorage.setItem(PASSWORD_KEY, "true");
      window.location.reload();
    } else {
      setError("Incorrect password. Please try again.");
    }
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
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={e => { setPassword(e.target.value); setError(""); }}
            className="text-lg font-dm-sans"
            autoFocus
          />
          <Button type="submit" className="w-full text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white font-dm-sans">Enter</Button>
        </form>
        {error && <div className="text-red-500 text-sm mt-2 font-dm-sans">{error}</div>}
      </div>
    </div>
  );
} 