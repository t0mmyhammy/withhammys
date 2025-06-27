import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    help: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
        setForm({ firstName: "", lastName: "", email: "", phone: "", address: "", help: "" });
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-[#032b53] text-white p-6">
          <h3
            className="text-xl font-bold flex items-center gap-2"
            style={{ fontFamily: "Gotham Bold, sans-serif" }}
          >
            <Home className="w-5 h-5" />
            Want Our Help?
          </h3>
          <p className="text-sm opacity-90 mt-1" style={{ fontFamily: "DM Sans, sans-serif" }}>
            Tell us about your home and we'll be in touch
          </p>
        </div>
        <div className="p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-sm font-medium text-[#032b53]" style={{ fontFamily: "DM Sans, sans-serif" }}>First Name</Label>
                <Input id="firstName" type="text" className="mt-1 border-gray-300 focus:border-[#032b53] focus:ring-[#032b53]" style={{ fontFamily: "DM Sans, sans-serif" }} value={form.firstName} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-sm font-medium text-[#032b53]" style={{ fontFamily: "DM Sans, sans-serif" }}>Last Name</Label>
                <Input id="lastName" type="text" className="mt-1 border-gray-300 focus:border-[#032b53] focus:ring-[#032b53]" style={{ fontFamily: "DM Sans, sans-serif" }} value={form.lastName} onChange={handleChange} required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-[#032b53]" style={{ fontFamily: "DM Sans, sans-serif" }}>Email</Label>
                <Input id="email" type="email" className="mt-1 border-gray-300 focus:border-[#032b53] focus:ring-[#032b53]" style={{ fontFamily: "DM Sans, sans-serif" }} value={form.email} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-[#032b53]" style={{ fontFamily: "DM Sans, sans-serif" }}>Phone Number</Label>
                <Input id="phone" type="tel" className="mt-1 border-gray-300 focus:border-[#032b53] focus:ring-[#032b53]" style={{ fontFamily: "DM Sans, sans-serif" }} value={form.phone} onChange={handleChange} required />
              </div>
            </div>
            <div>
              <Label htmlFor="address" className="text-sm font-medium text-[#032b53]" style={{ fontFamily: "DM Sans, sans-serif" }}>Home Address</Label>
              <Input id="address" type="text" placeholder="Street address, City, ZIP" className="mt-1 border-gray-300 focus:border-[#032b53] focus:ring-[#032b53]" style={{ fontFamily: "DM Sans, sans-serif" }} value={form.address} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="help" className="text-sm font-medium text-[#032b53]" style={{ fontFamily: "DM Sans, sans-serif" }}>How can we help?</Label>
              <textarea id="help" rows={3} placeholder="Tell us about your home and what you need help with..." className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#032b53] focus:border-[#032b53]" style={{ fontFamily: "DM Sans, sans-serif" }} value={form.help} onChange={handleChange} required />
            </div>
            <Button type="submit" className="w-full bg-[#fba0ab] hover:bg-[#fba0ab]/90 text-[#032b53] font-semibold py-3 rounded-lg" style={{ fontFamily: "DM Sans, sans-serif" }} disabled={loading}>
              {loading ? "Submitting..." : "Get My Home Going"}
            </Button>
            {success && <p className="text-green-600 text-xs text-center">Thank you! We'll reach out within 1 business day.</p>}
            {error && <p className="text-red-600 text-xs text-center">{error}</p>}
            <p className="text-xs text-gray-500 text-center" style={{ fontFamily: "DM Sans, sans-serif" }}>
              We'll reach out within 1 business day to schedule your free home assessment
            </p>
          </form>
        </div>
      </CardContent>
    </Card>
  );
} 