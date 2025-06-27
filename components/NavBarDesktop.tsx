import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NavBarDesktop() {
  return (
    <nav className="hidden md:flex bg-white border-b border-gray-100 py-4 sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left Nav Items */}
        <div className="flex items-center space-x-8">
          <Link
            href="/"
            className="text-[#032b53] hover:text-[#fba0ab] transition-colors font-medium"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            FOR HOMEOWNERS
          </Link>
          <Link
            href="/for-realtors"
            className="text-[#032b53] hover:text-[#fba0ab] transition-colors font-medium"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            FOR REALTORS
          </Link>
        </div>
        {/* Centered Logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <Image
            src="/logos/hammys-primary-logo.svg"
            alt="Hammy's Logo"
            width={200}
            height={100}
            priority
            style={{ display: "inline-block" }}
          />
        </div>
        {/* Right Nav Items + CTA */}
        <div className="flex items-center space-x-8">
          <Link
            href="/about"
            className="text-[#032b53] hover:text-[#fba0ab] transition-colors font-medium"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            ABOUT US
          </Link>
          <Link
            href="/#faq"
            className="text-[#032b53] hover:text-[#fba0ab] transition-colors font-medium"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            FAQ
          </Link>
          <Link href="/#form">
            <Button
              className="bg-[#fba0ab] hover:bg-[#fba0ab]/90 text-[#032b53] font-semibold px-6 py-2 rounded-lg"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Get Setup
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
} 