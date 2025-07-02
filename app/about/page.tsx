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
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Hammy's was founded by siblings-in-law David, Maureen, and Tom — three people with different strengths
                but one shared mission: to bring dependable, high-quality home care back to the neighborhoods they love.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-[#032b53]">David</strong> has spent decades leading teams and executives in
                delivering strategic, high-quality service — the kind that builds trust and runs like clockwork.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-[#032b53]">Maureen</strong> brings a thoughtful, human approach with a sharp eye
                for detail. After managing multiple remodels and new builds, she knows what good looks like — and how to
                get there.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                <strong className="text-[#032b53]">Tom</strong> is a product leader, technologist, and former HOA
                secretary to a Chicago walk-up… before an infamous roof leak taught him more than any job ever could.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Together, they're building Hammy's to take the hassle out of homeownership — and replace it with
                proactive care, dependable support, and real relationships.
              </p>

              <blockquote className="border-l-4 border-[#fba0ab] pl-6 my-12">
                <p className="text-xl text-[#032b53] font-semibold italic leading-relaxed">
                  "We're family first, business partners second. And Hammy's is how we take care of the neighborhoods we
                  call home."
                </p>
              </blockquote>

              <p className="text-xl text-gray-700 leading-relaxed font-semibold text-center">
                Because your home deserves more than a rotating cast of contractors. It deserves a team who shows up —
                and sticks around.
              </p>
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
                  We sweat the small stuff so you can bring home the bacon.
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
