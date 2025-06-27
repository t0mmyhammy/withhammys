import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Home, CheckCircle, Calendar, Shield, Star, Mail, Instagram, Facebook, MapPin, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import NavBarMobile from "@/components/NavBar"
import NavBarDesktop from "@/components/NavBarDesktop"
import Form from "@/components/Form"

export default function HammysLanding() {
  return (
    <div className="min-h-screen bg-white">
      <div className="md:hidden">
        <NavBarMobile />
      </div>
      <div className="hidden md:block">
        <NavBarDesktop />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              className="mb-6 bg-[#fba0ab]/10 text-[#032b53] border-[#fba0ab]/20"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              For new homeowners in Metro Detroit
            </Badge>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#032b53] mb-6 leading-tight"
              style={{ fontFamily: "Gotham Bold, sans-serif" }}
            >
              Your home's trusted partner from day one.
            </h1>

            <p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              From filters to furnaces, we handle the to-dos that come with your new home — so you can actually enjoy
              it.
            </p>

            <Link href="/#form">
              <Button
                className="bg-[#032b53] hover:bg-[#032b53]/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Get My Home Plan
              </Button>
            </Link>

            <p className="text-sm mt-4 text-gray-500" style={{ fontFamily: "DM Sans, sans-serif" }}>
              No pressure. No contracts. Just help when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#032b53] mb-4"
                style={{ fontFamily: "Gotham Bold, sans-serif" }}
              >
                How We Roll
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Three steps to take homeownership off your Sunday to-do list
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#fba0ab]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Home className="w-8 h-8 text-[#032b53]" />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#032b53] mb-4"
                    style={{ fontFamily: "Gotham Bold, sans-serif" }}
                  >
                    We Come to You
                  </h3>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    We visit your home, take inventory of what you've got, and figure out how to keep it all running
                    smoothly. No clipboard theatrics—just a solid plan.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#fba0ab]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-[#032b53]" />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#032b53] mb-4"
                    style={{ fontFamily: "Gotham Bold, sans-serif" }}
                  >
                    You Get Your Game Plan
                  </h3>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    Custom schedule with the right tasks at the right times. Seasonal stuff, preventive care, trusted
                    pros on speed dial—all tailored to your home and budget.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#fba0ab]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-[#032b53]" />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#032b53] mb-4"
                    style={{ fontFamily: "Gotham Bold, sans-serif" }}
                  >
                    We Handle the Rest
                  </h3>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    From routine check-ins to "oh no!" moments, we coordinate everything. You get updates, not
                    headaches. Our trusted vendors deliver quality service and fair prices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hammy's Exists */}
      <section id="about-us" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#032b53] mb-8"
              style={{ fontFamily: "Gotham Bold, sans-serif" }}
            >
              Why We Exist
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Because homeownership shouldn't feel like a part-time job you didn't apply for
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#fba0ab]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-[#032b53]" />
                </div>
                <h3 className="text-lg font-bold text-[#032b53] mb-2" style={{ fontFamily: "Gotham Bold, sans-serif" }}>
                  No Surprises
                </h3>
                <p className="text-gray-600" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  Know what's in your home, what it needs, and what it'll cost. We document everything so you're never
                  caught off guard.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-[#fba0ab]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-[#032b53]" />
                </div>
                <h3 className="text-lg font-bold text-[#032b53] mb-2" style={{ fontFamily: "Gotham Bold, sans-serif" }}>
                  Stay Ahead
                </h3>
                <p className="text-gray-600" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  Fix small things before they become big problems. When stuff does break (and it will), you'll know
                  exactly what to do.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-[#fba0ab]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-[#032b53]" />
                </div>
                <h3 className="text-lg font-bold text-[#032b53] mb-2" style={{ fontFamily: "Gotham Bold, sans-serif" }}>
                  One Call Does It All
                </h3>
                <p className="text-gray-600" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  Stop playing phone tag with contractors. We coordinate everything so you don't have to become a
                  project manager.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#032b53] mb-4"
                style={{ fontFamily: "Gotham Bold, sans-serif" }}
              >
                What People Are Saying
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Real feedback from real homeowners who've got their weekends back
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#fba0ab] text-[#fba0ab]" />
                    ))}
                  </div>
                  <p
                    className="text-gray-700 mb-6 text-lg leading-relaxed"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    "I didn't lift a finger. Hammy's handled the filters, the gutters — even followed up after the rain.
                    It's like having a home manager who actually cares."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#032b53] rounded-full flex items-center justify-center text-white font-bold mr-4">
                      M
                    </div>
                    <div>
                      <p className="font-semibold text-[#032b53]" style={{ fontFamily: "DM Sans, sans-serif" }}>
                        Mark V.
                      </p>
                      <p className="text-gray-500 text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
                        Rochester Homeowner
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#fba0ab] text-[#fba0ab]" />
                    ))}
                  </div>
                  <p
                    className="text-gray-700 mb-6 text-lg leading-relaxed"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    "We thought we had it under control — until Hammy's showed us what we were missing. Now our home
                    actually runs like a system."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#032b53] rounded-full flex items-center justify-center text-white font-bold mr-4">
                      N
                    </div>
                    <div>
                      <p className="font-semibold text-[#032b53]" style={{ fontFamily: "DM Sans, sans-serif" }}>
                        Mike & Natalie G.
                      </p>
                      <p className="text-gray-500 text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
                        Birmingham Homeowners
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#fba0ab] text-[#fba0ab]" />
                    ))}
                  </div>
                  <p
                    className="text-gray-700 mb-6 text-lg leading-relaxed"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    "When my sump pump died, Hammy's had someone at my door in two hours. I didn't even have time to
                    panic — they already had it covered."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#032b53] rounded-full flex items-center justify-center text-white font-bold mr-4">
                      D
                    </div>
                    <div>
                      <p className="font-semibold text-[#032b53]" style={{ fontFamily: "DM Sans, sans-serif" }}>
                        David B.
                      </p>
                      <p className="text-gray-500 text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
                        Bloomfield Hills Homeowner
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="service-areas" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#032b53] mb-8"
                style={{ fontFamily: "Gotham Bold, sans-serif" }}
              >
                Where We Work
              </h2>
              <p className="text-xl text-gray-600 mb-4" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Currently serving Metro Detroit's finest neighborhoods
              </p>
              <Badge
                className="bg-[#fba0ab]/10 text-[#032b53] border-[#fba0ab]/20"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                20+ families trust us with their homes
              </Badge>
            </div>

            {/* Service Areas Table */}
            <div className="max-w-2xl mx-auto">
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-[#032b53] text-white p-6">
                    <h3
                      className="text-xl font-bold flex items-center gap-2"
                      style={{ fontFamily: "Gotham Bold, sans-serif" }}
                    >
                      <MapPin className="w-5 h-5" />
                      Active Service Areas
                    </h3>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        "Beverly Hills",
                        "Birmingham",
                        "Bloomfield Hills",
                        "Rochester",
                        "Troy",
                        "West Bloomfield",
                        "More Coming Soon!",
                      ].map((city, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#032b53]" />
                          <span className="text-gray-700" style={{ fontFamily: "DM Sans, sans-serif" }}>
                            {city}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#032b53] mb-4"
                style={{ fontFamily: "Gotham Bold, sans-serif" }}
              >
                Common Questions
              </h2>
              <p className="text-xl text-gray-600" style={{ fontFamily: "DM Sans, sans-serif" }}>
                The stuff people actually want to know
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* FAQ Accordion */}
              <div className="space-y-6">
                {[
                  {
                    question: "How quickly can we get started?",
                    answer:
                      "We can schedule your home visit within 1 business day. After that, we'll have your custom plan ready within a week.",
                  },
                  {
                    question: "What if something urgent happens?",
                    answer:
                      "We're on call 24/7 for emergencies. We coordinate with vetted local pros and can typically respond within 2 hours for urgent stuff.",
                  },
                  {
                    question: "Do I have to be home for services?",
                    answer:
                      "Nope. We work with you to set up secure access during our initial visit. You stay in control and get notified every time we enter.",
                  },
                  {
                    question: "What's included in my home care plan?",
                    answer:
                      "Your plan is custom to your home, but most include seasonal maintenance (filters, gutters), preventive inspections, vendor coordination, and detailed reporting. We'll walk through everything during your home visit.",
                  },
                  {
                    question: "What if I already have contractors I trust?",
                    answer:
                      "Great! We're happy to coordinate with your existing team. Over time, we'll make sure they're still delivering quality work. If not, our trusted network is ready with transparent pricing.",
                  },
                ].map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-6 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h3
                        className="text-lg font-bold text-[#032b53]"
                        style={{ fontFamily: "Gotham Bold, sans-serif" }}
                      >
                        {faq.question}
                      </h3>
                      <ChevronDown className="w-5 h-5 text-[#032b53] group-open:rotate-180 transition-transform duration-200" />
                    </summary>
                    <div className="p-6 pt-0">
                      <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>

              {/* Form moved here */}
              <div className="lg:sticky lg:top-24" id="form">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 bg-[#032b53] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "Gotham Bold, sans-serif" }}>
              Ready to Get Your Weekends Back?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Join our Fall cohort and get your home running like a system. Limited spots available for new homeowners
              who want to do this right from day one.
            </p>
            <Link href="/#form">
              <Button
                className="bg-[#fba0ab] hover:bg-[#fba0ab]/90 text-[#032b53] px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Get My Home Plan
              </Button>
            </Link>
            <p className="text-sm mt-4 opacity-75" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Free home assessment • Custom plan • No pressure, just help
            </p>
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
                  style={{ fontFamily: "Gotham Bold, sans-serif" }}
                >
                  <Image
                    src="/logos/hammy-stacked-logo.svg"
                    alt="Hammys Primary Logo"
                    width={180}
                    height={40}
                    priority
                    style={{ display: "inline-block" }}
                  />
                </h3>
                <p className="text-gray-600" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  We sweat the small stuff so you can bring home the bacon.
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <nav className="flex gap-6 text-sm">
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-[#032b53] transition-colors"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    About
                  </Link>
                  <Link
                    href="#faq"
                    className="text-gray-600 hover:text-[#032b53] transition-colors"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/privacy"
                    className="text-gray-600 hover:text-[#032b53] transition-colors"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    Privacy
                  </Link>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-[#032b53] transition-colors"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
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
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              <p>&copy; {new Date().getFullYear()} Hammy's Home Experts. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
