import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  CheckCircle,
  Calendar,
  CircleCheckBig,
  Shield,
  Star,
  Mail,
  Instagram,
  Facebook,
  Users,
  Package,
  RefreshCw,
  Download,
  Eye,
  Presentation,
  Phone,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import NavBarMobile from "@/components/NavBar"
import NavBarDesktop from "@/components/NavBarDesktop"
import Form from "@/components/Form"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function ForRealtorsPage() {
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
              variant="secondary"
              className="mb-6 bg-[#fba0ab]/10 text-[#032b53] border-[#fba0ab]/20"
            >
              For Real Estate Professionals
            </Badge>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#032b53] mb-6 leading-tight"
            >
              Make your buyers feel at home — faster.
            </h1>

            <p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Hammy's handles the setup, maintenance, and vendor coordination new homeowners need, so your clients feel
              supported long after the paperwork's done.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#032b53] hover:bg-[#032b53]/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-discount-bold"
              >
                Refer a Client
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#032b53] text-[#032b53] hover:bg-[#032b53] hover:text-white px-8 py-6 text-lg rounded-xl bg-transparent font-discount-bold"
              >
                Book a 10-min Realtor Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Realtors Partner With Hammy's */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#032b53] mb-4"
              >
                Why Realtors Partner With Hammy's
              </h2>
              <p>
                Turn closing day into the beginning of a lasting relationship
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#fba0ab]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-[#032b53]" />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#032b53] mb-4"
                  >
                    Trusted Extension of Your Brand
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We make you look good by helping buyers settle in with less stress — and no overwhelming to-do list.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#fba0ab]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Package className="w-8 h-8 text-[#032b53]" />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#032b53] mb-4"
                  >
                    Stress-Free Hand-Offs
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We handle the real-life chaos: vendor setup, service scheduling, and post-close emergencies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#fba0ab]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <RefreshCw className="w-8 h-8 text-[#032b53]" />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#032b53] mb-4"
                  >
                    Keep Your Relationships Warm
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Stay top of mind by offering something valuable after the deal is done.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Buyers */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#032b53] mb-4"
              >
                What We Offer Your Buyers
              </h2>
              <p>
                Everything new homeowners need to feel confident and cared for
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Home, text: "Home walkthrough + full system inventory" },
                { icon: Shield, text: "Smart access setup for safe vendor entry" },
                { icon: Calendar, text: "Personalized quarterly care plan" },
                { icon: CheckCircle, text: "Seasonal maintenance reminders" },
                { icon: Phone, text: "24/7 emergency coordination" },
                { icon: Users, text: "Vetted vendors they can trust" },
                { icon: Star, text: "One team to call instead of 12 contractors" },
              ].map((item, index) => (
                <Card key={index} className="border-0 shadow-lg rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#fba0ab]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-[#032b53]" />
                      </div>
                      <p className="text-gray-700 font-medium">
                        {item.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#032b53] mb-4"
              >
                How It Works (for You)
              </h2>
              <p>
                Simple referral process that makes you look great
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#fba0ab]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span
                      className="text-2xl font-bold text-[#032b53]"
                    >
                      1
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold text-[#032b53] mb-4"
                  >
                    Refer a Client
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Send us a quick intro — we take it from there.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#fba0ab]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span
                      className="text-2xl font-bold text-[#032b53]"
                    >
                      2
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold text-[#032b53] mb-4"
                  >
                    We Onboard the Homeowner
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our team handles the walkthrough, plan setup, and care calendar.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#fba0ab]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span
                      className="text-2xl font-bold text-[#032b53]"
                    >
                      3
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold text-[#032b53] mb-4"
                  >
                    You Stay in the Loop
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We'll keep you informed (with permission) and make you look great throughout.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#032b53] hover:bg-[#032b53]/90 text-white px-8 py-6 text-lg rounded-xl font-discount-bold"
                >
                  Get Realtor Welcome Kit
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#032b53] text-[#032b53] hover:bg-[#032b53] hover:text-white px-8 py-6 text-lg rounded-xl bg-transparent font-discount-bold"
                >
                  Schedule Intro Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Agents Are Saying */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#032b53] mb-4"
              >
                What Agents Are Saying
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#fba0ab] text-[#fba0ab]" />
                    ))}
                  </div>
                  <p
                    className="text-gray-700 mb-6 text-lg leading-relaxed"
                  >
                    "Hammy's gave me something no other partner does — a way to show value after the closing table."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#032b53] rounded-full flex items-center justify-center text-white font-bold mr-4">
                      D
                    </div>
                    <div>
                      <p className="font-semibold text-[#032b53]">
                        Dan G.
                      </p>
                      <p className="text-gray-500 text-sm">
                        DOBI Realty
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
                  >
                    "My clients trust me, and I trust Hammy's. It's one of the easiest handoffs I've ever made."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#032b53] rounded-full flex items-center justify-center text-white font-bold mr-4">
                      N
                    </div>
                    <div>
                      <p className="font-semibold text-[#032b53]">
                        Natalie V.
                      </p>
                      <p className="text-gray-500 text-sm">
                        KW Domain
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Materials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#032b53] mb-4"
              >
                Marketing Materials & Resources
              </h2>
              <p>
                Everything you need to start referring clients today
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#fba0ab]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Download className="w-8 h-8 text-[#032b53]" />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#032b53] mb-4"
                  >
                    Realtor One-Pager
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Quick overview to share with clients
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#032b53] text-[#032b53] hover:bg-[#032b53] hover:text-white bg-transparent font-discount-bold"
                  >
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#fba0ab]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-[#032b53]" />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#032b53] mb-4"
                  >
                    Co-Branded Referral Page
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Custom landing page with your branding
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#032b53] text-[#032b53] hover:bg-[#032b53] hover:text-white bg-transparent font-discount-bold"
                  >
                    Request Access
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#fba0ab]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Presentation className="w-8 h-8 text-[#032b53]" />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#032b53] mb-4"
                  >
                    Realtor Training Deck
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Present Hammy's to your team
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#032b53] text-[#032b53] hover:bg-[#032b53] hover:text-white bg-transparent font-discount-bold"
                  >
                    View Slides
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-[#fba0ab] hover:bg-[#fba0ab]/90 text-[#032b53] px-8 py-6 text-lg rounded-xl font-discount-bold"
              >
                Invite Me to Your Office Meeting
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + Realtor Form Side-by-Side Section */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* FAQ (left) */}
            <div>
              <div className="text-center md:text-left mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#032b53] mb-4">FAQ for Agents</h2>
                <p>Common questions from real estate professionals</p>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How do I refer someone?",
                    answer:
                      "Just share their name + contact info with us — or send them to your co-branded referral link. You'll never have to follow up — we handle it, and keep you updated.",
                  },
                  {
                    question: "Can I brand this as part of my service?",
                    answer:
                      "Absolutely. We're here to make you look good, not compete. We can co-brand materials and keep your relationship front and center.",
                  },
                  {
                    question: "How soon can Hammy's start?",
                    answer:
                      "We onboard most clients within 1 business day of closing. Perfect timing for when they're settling into their new home.",
                  },
                  {
                    question: "What's the cost to my clients?",
                    answer:
                      "Our plans are custom to each home, but most homeowners invest $200-400/month for comprehensive care. We provide transparent pricing upfront.",
                  },
                  {
                    question: "Do you offer any referral incentives?",
                    answer:
                      "Yes! We offer referral fees for successful client onboarding. Contact us to discuss our current partner program.",
                  },
                ].map((faq, index) => (
                  <AccordionItem value={faq.question} key={index}>
                    <AccordionTrigger className="text-lg font-bold text-[#032b53] mb-0">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            {/* Realtor Form (right) */}
            <div>
              <Form
                heading="Refer a Client or Connect With Us"
                subheading="Let us know about your client or how we can help you. We'll handle the rest."
                confirmationHeading="Thank you for connecting!"
                confirmationMessage="We've received your info and will reach out to you or your client soon."
                buttonText="Send Referral or Inquiry"
                helpPlaceholder="Tell us about your client, your business, or how we can help you..."
                formType="realtor"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 bg-[#032b53] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Give your buyers more than a closing gift. Give them peace of mind.
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join Metro Detroit's top agents who trust Hammy's to extend their service beyond closing day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#fba0ab] hover:bg-[#fba0ab]/90 text-[#032b53] px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-discount-bold"
              >
                Start Referring Clients
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#032b53] px-8 py-6 text-lg rounded-xl bg-transparent font-discount-bold"
              >
                Book Realtor Call
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              No cost to you • Co-branded materials included • Referral incentives available
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
                >
                  Hammy's
                </h3>
                <p>
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
                    href="/faqs"
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
                    href="mailto:hello@hammyshome.com"
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
