import { Button } from "@/components/ui/button"
import { Mail, Instagram, Facebook } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import NavBarMobile from "@/components/NavBar"
import NavBarDesktop from "@/components/NavBarDesktop"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="md:hidden">
        <NavBarMobile />
            </div>
      <div className="hidden md:block">
        <NavBarDesktop />
            </div>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-5xl font-bold text-[#032b53] mb-8 text-center"
            >
              About Hammy's
            </h1>

            <h2
              className="text-2xl md:text-3xl font-bold text-[#032b53] mb-12 text-center"
            >
              Family-run. Community-rooted. Professionally obsessed.
            </h2>

            <div className="prose prose-lg max-w-none">
              {/* All founder bios, mission statement, and quoted content removed as requested. */}
            </div>

            <div className="text-center mt-12">
              <Link href="/">
                <Button
                  size="lg"
                  className="bg-[#032b53] hover:bg-[#032b53]/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get My Home Plan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3
                  className="text-2xl font-bold text-[#032b53] mb-2"
                >
                  Hammy's
                </h3>
                <p className="text-gray-600">
                  We handle the house. You make it home.
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <nav className="flex gap-6 text-sm">
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-[#032b53] transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/#faq"
                    className="text-gray-600 hover:text-[#032b53] transition-colors"
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/privacy"
                    className="text-gray-600 hover:text-[#032b53] transition-colors"
                  >
                    Privacy
                  </Link>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-[#032b53] transition-colors"
                  >
                    Contact
                  </Link>
                </nav>

                <div className="flex items-center gap-4">
                  <Link
                    href="mailto:hello@withhammys.com"
                    className="text-gray-600 hover:text-[#032b53] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-[#032b53] transition-colors">
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link href="https://www.facebook.com/profile.php?id=61577580251772" className="text-gray-600 hover:text-[#032b53] transition-colors">
                    <Facebook className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500"
            >
              <p>&copy; {new Date().getFullYear()} Hammy's Home Experts. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export const metadata = {
  title: "About Us",
  description: "Learn more about Hammy's Home Experts and our mission.",
  generator: 'v0.dev'
}
