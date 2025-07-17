"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const PasswordGate = dynamic(() => import("./PasswordGate"), { ssr: false });

export default function ClientPasswordWrapper({ children }: { children: React.ReactNode }) {
  const [access, setAccess] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setAccess(sessionStorage.getItem("hammy_access_granted") === "true");
    }
  }, []);
  if (!access) return <PasswordGate />;
  return <>{children}</>;
} 