"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function NavBarDesktop() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToForm = useCallback(() => {
    if (pathname === "/") {
      const el = document.getElementById("form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#form");
    }
  }, [pathname, router]);

  // Track hash on client to avoid hydration mismatch
  const [hash, setHash] = useState("");
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  // Helper to determine if a link is active
  const isActive = (href: string) => {
    if (href === "/#faq") {
      return (pathname === "/" || pathname === "/for-realtors") && hash === "#faq";
    }
    return pathname === href;
  };

  return (
    <nav className="hidden md:flex bg-white fixed top-0 left-0 w-full z-50 border-b border-[#032b53] py-6" style={{ borderBottomWidth: '0.25px' }}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left Nav Items */}
        <div className="flex items-center space-x-8">
          <Link
            href="/"
            className={`text-[#032b53] hover:text-[#fba0ab] transition-colors font-medium font-discount-medium ${isActive("/") ? "border-b-4 border-[#fba0ab] font-bold" : ""}`}
          >
            FOR HOMEOWNERS
          </Link>
          <Link
            href="/for-realtors"
            className={`text-[#032b53] hover:text-[#fba0ab] transition-colors font-medium font-discount-medium ${isActive("/for-realtors") ? "border-b-4 border-[#fba0ab] font-bold" : ""}`}
          >
            FOR REALTORS
          </Link>
        </div>
        {/* Centered Logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <Image
            src="/logos/hammys-primary-logo.svg"
            alt="Hammy's Logo"
            width={300}
            height={150}
            priority
            style={{ display: "inline-block" }}
          />
        </div>
        {/* Right Nav Items + CTA */}
        <div className="flex items-center space-x-8">
          <Link
            href="/about"
            className={`text-[#032b53] hover:text-[#fba0ab] transition-colors font-medium font-discount-medium ${isActive("/about") ? "border-b-4 border-[#fba0ab] font-bold" : ""}`}
          >
            ABOUT US
          </Link>
          <Link
            href="/#faq"
            className={`text-[#032b53] hover:text-[#fba0ab] transition-colors font-medium font-discount-medium ${isActive("/#faq") ? "border-b-4 border-[#fba0ab] font-bold" : ""}`}
          >
            FAQ
          </Link>
          <Button
            className="bg-[#fba0ab] hover:bg-[#fba0ab]/90 text-[#032b53] font-semibold px-6 py-2 rounded-lg font-discount-bold"
            onClick={scrollToForm}
          >
            Get Setup
          </Button>
        </div>
      </div>
    </nav>
  );
} 