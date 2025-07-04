"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "FOR HOMEOWNERS" },
  { href: "/for-realtors", label: "FOR REALTORS" },
  { href: "/about", label: "ABOUT US" },
  { href: "/#faq", label: "FAQ" },
];

export default function NavBarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const pathname = usePathname();

  const scrollToForm = useCallback(() => {
    setMenuOpen(false);
    if (pathname === "/") {
      const el = document.getElementById("form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#form");
    }
  }, [pathname, router]);

  // Trap focus in menu when open
  useEffect(() => {
    if (!menuOpen) return;
    const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
      if (e.key === "Tab" && focusable && focusable.length > 0) {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }
    document.addEventListener("keydown", handleKey);
    first?.focus();
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-[#032b53] py-6" style={{ borderBottomWidth: '0.25px' }}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo Left */}
          <Link href="/" className="flex items-center" tabIndex={menuOpen ? -1 : 0}>
            <Image
              src="/logos/hammys-primary-logo.svg"
              alt="Hammy's Logo"
              width={180}
              height={90}
              priority
              style={{ height: "60px", width: "auto" }}
            />
          </Link>
          {/* Hamburger Right */}
          <button
            className="flex items-center text-[#032b53] focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            tabIndex={0}
          >
            {menuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>
      </nav>
      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-50 bg-white flex flex-col"
          aria-modal="true"
          role="dialog"
        >
          {/* Top nav bar in overlay */}
          <nav className="border-b border-gray-100 py-6 w-full sticky top-0 bg-white z-10">
            <div className="container mx-auto px-4 flex items-center justify-between">
              <Link href="/" className="flex items-center" tabIndex={0} onClick={() => setMenuOpen(false)}>
                <Image
                  src="/logos/hammys-primary-logo.svg"
                  alt="Hammy's Logo"
                  width={180}
                  height={90}
                  priority
                  style={{ height: "60px", width: "auto" }}
                />
              </Link>
              <button
                className="flex items-center gap-2 text-[#032b53] font-bold text-lg md:text-xl focus:outline-none"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                tabIndex={0}
              >
                MENU
                <CloseIcon className="w-7 h-7" />
              </button>
            </div>
          </nav>
          {/* Menu Items */}
          <div className="flex-1 flex flex-col justify-center items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl md:text-3xl font-bold text-[#032b53] hover:text-[#fba0ab] transition-colors"
                tabIndex={0}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              tabIndex={0}
              onClick={scrollToForm}
              className="mt-8 px-8 py-4 rounded-lg bg-[#fba0ab] text-[#032b53] font-bold text-xl shadow-lg hover:bg-[#fba0ab]/90 transition-colors"
            >
              GET SETUP
            </button>
          </div>
        </div>
      )}
    </>
  );
} 