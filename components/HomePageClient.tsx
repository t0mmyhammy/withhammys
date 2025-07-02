"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Home, CheckCircle, Calendar, CircleCheckBig, HousePlus, Shield, Star, Mail, MapPinHouse, MapPinned, NotebookPen, PhoneForwarded, Instagram, Facebook, MapPin, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import NavBarMobile from "@/components/NavBar";
import NavBarDesktop from "@/components/NavBarDesktop";
import Form from "@/components/Form";
import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function HomePageClient() {
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

  return (
    <>
      <div className="md:hidden">
        <NavBarMobile />
      </div>
      <div className="hidden md:block">
        <NavBarDesktop />
      </div>
      <div className="min-h-screen bg-white pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-[#fba0ab]/10 text-[#032b53] border-[#fba0ab]/20">For new homeowners in Metro Detroit</Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#032b53] mb-6 leading-tight">Your home's trusted partner from day one.</h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">From filters to furnaces, we handle the to-dos that come with your new home — so you can actually enjoy it.</p>
              <Button className="bg-[#032b53] hover:bg-[#032b53]/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-discount-bold" onClick={scrollToForm}>Get My Home Plan</Button>
              <p className="text-sm mt-4 text-gray-500">No pressure. No contracts. Just help when you need it.</p>
            </div>
          </div>
        </section>
        {/* Brand Divider Lines */}
        <div className="w-full h-2 bg-[#032b53] mt-8" style={{margin: 0, padding: 0}}></div>
        <div className="w-full h-2 bg-[#fba0ab]" style={{margin: 0, padding: 0}}></div>
        {/* How We Roll */}
        <section id="how-it-works" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#032b53] mb-4">How We Roll</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">Three steps to take homeownership off your Sunday to-do list</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#fba0ab]/10 rounded-full flex items-center justify-center mx-auto mb-6"><Home className="w-8 h-8 text-[#032b53]" /></div>
                    <h3 className="text-xl font-bold text-[#032b53] mb-4">We Come to You</h3>
                    <p className="text-gray-600 leading-relaxed">We visit your home, take inventory of what you've got, and figure out how to keep it all running smoothly. No clipboard theatrics—just a solid plan.</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#fba0ab]/10 rounded-full flex items-center justify-center mx-auto mb-6"><Calendar className="w-8 h-8 text-[#032b53]" /></div>
                    <h3 className="text-xl font-bold text-[#032b53] mb-4">You Get Your Game Plan</h3>
                    <p className="text-gray-600 leading-relaxed">Custom schedule with the right tasks at the right times. Seasonal stuff, preventive care, trusted pros on speed dial—all tailored to your home and budget.</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#fba0ab]/10 rounded-full flex items-center justify-center mx-auto mb-6"><CircleCheckBig className="w-8 h-8 text-[#032b53]" /></div>
                    <h3 className="text-xl font-bold text-[#032b53] mb-4">We Handle the Rest</h3>
                    <p className="text-gray-600 leading-relaxed">From routine check-ins to "oh no!" moments, we coordinate everything. You get updates, not headaches. Our trusted vendors deliver quality service and fair prices.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        {/* Why We Exist */}
        <section id="about-us" className="py-12 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#032b53] mb-8">Why We Exist</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">Because homeownership shouldn't feel like a part-time job you didn't apply for</p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#fba0ab]/10 rounded-full flex items-center justify-center mx-auto mb-4"><HousePlus className="w-6 h-6 text-[#032b53]" /></div>
                  <h3 className="text-lg font-bold text-[#032b53] mb-2">No Surprises</h3>
                  <p className="text-gray-600">Know what's in your home, what it needs, and what it'll cost. We document everything so you're never caught off guard.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#fba0ab]/10 rounded-full flex items-center justify-center mx-auto mb-4"><NotebookPen className="w-6 h-6 text-[#032b53]" /></div>
                  <h3 className="text-lg font-bold text-[#032b53] mb-2">Stay Ahead</h3>
                  <p className="text-gray-600">Fix small things before they become big problems. When stuff does break (and it will), you'll know exactly what to do.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#fba0ab]/10 rounded-full flex items-center justify-center mx-auto mb-4"><PhoneForwarded className="w-6 h-6 text-[#032b53]" /></div>
                  <h3 className="text-lg font-bold text-[#032b53] mb-2">One Call Does It All</h3>
                  <p className="text-gray-600">Stop playing phone tag with contractors. We coordinate everything so you don't have to become a project manager.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials (Carousel) */}
        <section className="py-12" style={{ background: '#fef5f6' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#032b53] mb-2">What Our Customers Say</h2>
              <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied customers</p>
            </div>
            <TestimonialsCarousel
              testimonials={[
                {
                  name: "Mark V.",
                  text: "I didn't lift a finger, and somehow everything got done. Hammy's took care of the filters, cleared the gutters, and even checked in after it rained to make sure nothing got backed up. It honestly felt like having a home manager who actually keeps track of your house better than you do—and genuinely cares that it runs well.",
                  rating: 5,
                },
                {
                  name: "Mike & Natalie G.",
                  text: "We thought we had a decent system for keeping up with the house—until Hammy's came in and pointed out everything we'd been missing. Now it feels like the whole place runs on autopilot, and we're not scrambling every time something goes wrong. They helped us go from reactive to actually being ahead of things, which feels like a huge relief.",
                  rating: 5,
                },
                {
                  name: "David B.",
                  text: "We'd just moved in and were already drowning in to-dos—things we didn't even know needed doing. Hammy's stepped in right away and took the pressure off. They handled the filters, checked the sump pump, even caught a gutter issue before the first rain hit. It was such a relief to feel like the house was in good hands from day one.",
                  rating: 5,
                },
              ]}
              autoRotateInterval={4000}
            />
          </div>
        </section>
        {/* Where We Work */}
        <section id="service-areas" className="py-12 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#032b53] mb-8">Where We Work</h2>
                <p className="text-xl text-gray-600 mb-4">Currently serving Metro Detroit's finest neighborhoods</p>
                <Badge className="bg-[#fba0ab]/10 text-[#032b53] border-[#fba0ab]/20">20+ families trust us with their homes</Badge>
              </div>
              <div className="max-w-2xl mx-auto">
                <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-[#032b53] text-white p-6">
                      <h3 className="text-xl font-bold flex items-center gap-2"><MapPinned className="w-5 h-5" />Active Service Areas</h3>
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
                          <div key={index} className="flex items-center gap-2"><MapPinHouse className="w-4 h-4 text-[#032b53]" /><span className="text-gray-700">{city}</span></div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        {/* Common Questions (FAQ + Form) */}
        <section id="faq" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#032b53] mb-4">Common Questions</h2>
                <p className="text-xl text-gray-600">The stuff people actually want to know</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* FAQ Accordion */}
                <div>
                  <Accordion type="single" collapsible className="w-full">
                    {[
                      {
                        question: "How quickly can we get started?",
                        answer:
                          "We can typically schedule your onboarding within 2–3 days of sign-up. Once your care plan is in place, ongoing services and vendor coordination begin immediately.",
                      },
                      {
                        question: "What if something urgent happens?",
                        answer:
                          "We've got you. Every plan includes emergency support — with 24/7 access for higher-tier members. Whether it's a burst pipe or a power outage, we coordinate the right help fast.",
                      },
                      {
                        question: "Do you work with my existing vendors?",
                        answer:
                          "Absolutely. If you have vendors you trust, we'll coordinate with them directly. If not, we've got a vetted network ready to step in — and we're always happy to compare quotes, timelines, and quality.",
                      },
                      {
                        question: "Is there a contract or long-term commitment?",
                        answer:
                          "Nope. Our annual plans are billed quarterly or yearly, and you can cancel anytime before your next billing cycle. Most clients stick around because it works — not because they're locked in.",
                      },
                      {
                        question: "How much does it cost?",
                        answer:
                          "Onboarding packages, seasonal services, and a la carte tasks are priced separately. We'll help you find the right fit for your home and lifestyle as plans are custom to each home. Most homeowners invest $300-500/month for comprehensive care, though we can customize a plan to fit your needs. We provide transparent pricing upfront. ",
                      },
                    ].map((faq, index) => (
                      <AccordionItem value={faq.question} key={index} className="rounded-2xl border shadow-lg mb-4 overflow-hidden">
                        <AccordionTrigger className="p-6 font-discount-medium text-[#032b53]">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
                {/* Homeowner Form */}
                <div>
                  <Form
                    heading="Get Started With Hammy's"
                    subheading="Tell us about your home and how we can help. We'll handle the rest."
                    confirmationHeading="Thank you for reaching out!"
                    confirmationMessage="We've received your info and will be in touch soon."
                    buttonText="Get My Home Plan"
                    helpPlaceholder="Tell us about your home, your needs, or any questions you have..."
                    formType="homeowner"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-12 bg-[#032b53] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get your weekends back?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Join Metro Detroit homeowners who trust Hammy's to keep their homes running smoothly—so they can enjoy more, and worry less.</p>
              <Button className="bg-[#fba0ab] hover:bg-[#fba0ab]/90 text-[#032b53] px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-discount-bold">Get Started</Button>
              <p className="text-sm mt-4 opacity-75">No contracts • No pressure • Just help when you need it</p>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-[#032b53] mb-2">Hammy's</h3>
                  <p>We sweat the small stuff so you can bring home the bacon.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <nav className="flex gap-6 text-sm">
                    <Link href="/about" className="text-gray-600 hover:text-[#032b53] transition-colors">About</Link>
                    <Link href="/#faq" className="text-gray-600 hover:text-[#032b53] transition-colors">FAQs</Link>
                    <Link href="/privacy" className="text-gray-600 hover:text-[#032b53] transition-colors">Privacy</Link>
                    <Link href="/contact" className="text-gray-600 hover:text-[#032b53] transition-colors">Contact</Link>
                  </nav>
                  <div className="flex items-center gap-4">
                    <Link href="mailto:hello@withhammys.com" className="text-gray-600 hover:text-[#032b53] transition-colors"><Mail className="w-5 h-5" /></Link>
                    <Link href="#" className="text-gray-600 hover:text-[#032b53] transition-colors"><Instagram className="w-5 h-5" /></Link>
                    <Link href="https://www.facebook.com/profile.php?id=61577580251772" className="text-gray-600 hover:text-[#032b53] transition-colors"><Facebook className="w-5 h-5" /></Link>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Hammy's Home Experts. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
} 