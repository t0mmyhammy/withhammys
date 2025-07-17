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
              {/* Mission Statement */}
              <div className="mb-12">
                <h3 className="text-2xl font-discount-bold text-[#032b53] mb-6">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Hammy's, we believe every homeowner deserves to love where they live without the stress of constant maintenance. 
                  We're not just another home service company—we're your neighbors, your community partners, and your home's biggest advocates.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission is simple: <span className="font-semibold text-[#032b53]">We handle the house. You make it home.</span>
                </p>
              </div>

              {/* Founder Story */}
              <div className="mb-12">
                <h3 className="text-2xl font-discount-bold text-[#032b53] mb-6">Our Story</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Hammy's was born from a simple frustration: why is it so hard to find reliable, trustworthy home maintenance? 
                  As Metro Detroit homeowners ourselves, we experienced the same pain points you do—unreliable contractors, 
                  confusing service calls, and the constant worry about what might break next.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  So we decided to build something different. Something that treats your home like it's our own. 
                  Something that puts relationships first and quality above all else.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, Hammy's serves hundreds of Metro Detroit families with the same care and attention 
                  we'd give our own homes. Because that's exactly what we're doing—caring for homes in our community.
                </p>
              </div>

              {/* Values */}
              <div className="mb-12">
                <h3 className="text-2xl font-discount-bold text-[#032b53] mb-6">What Makes Us Different</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-discount-medium text-[#032b53] mb-3">🏠 Community First</h4>
                    <p className="text-gray-700">
                      We're not a faceless corporation. We're your neighbors, invested in making our community better, 
                      one home at a time.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-discount-medium text-[#032b53] mb-3">🤝 Trust Built on Relationships</h4>
                    <p className="text-gray-700">
                      Every team member is background-checked, insured, and trained to treat your home with the respect it deserves.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-discount-medium text-[#032b53] mb-3">⚡ Proactive, Not Reactive</h4>
                    <p className="text-gray-700">
                      We don't just fix problems—we prevent them. Our maintenance plans keep your home running smoothly year-round.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-discount-medium text-[#032b53] mb-3">💯 Quality Guaranteed</h4>
                    <p className="text-gray-700">
                      Every service comes with our satisfaction guarantee. If you're not happy, we're not done.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mb-12">
                <h3 className="text-2xl font-discount-bold text-[#032b53] mb-6">Serving Metro Detroit</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  From Birmingham to Bloomfield Hills, from Royal Oak to Rochester Hills, 
                  we're proud to serve the communities that make Metro Detroit special. 
                  Whether you're in a historic home or a modern masterpiece, we have the expertise to care for it properly.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#032b53]">
                  <p className="text-lg text-[#032b53] font-semibold">
                    "We don't just maintain homes—we maintain the heart of our community."
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-discount-bold text-[#032b53] mb-4">Ready to Experience the Hammy's Difference?</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Join hundreds of Metro Detroit families who've discovered what it means to truly love where they live.
                </p>
              </div>
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
