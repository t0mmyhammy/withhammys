"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useState, useEffect } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { Suggestion } from "react-places-autocomplete";

// Helper to format US phone numbers as (123) 456-7890
function formatPhoneNumber(value: string) {
  // Remove all non-digit characters
  const digits = value.replace(/\D/g, "");
  const len = digits.length;
  if (len === 0) return "";
  if (len < 4) return `(${digits}`;
  if (len < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
}

export default function Form({
  heading = "Want to Work With Us?",
  subheading = "Tell us where you live and how to reach you. We'll take it from there.",
  confirmationHeading = "We look forward to serving you",
  confirmationMessage = "Thanks for reaching out. We'll be in touch with next steps shortly.",
  buttonText = "Get My Home Going",
  helpPlaceholder = "Tell us about your home and what you need help with...",
  formType = "homeowner"
}: {
  heading?: string;
  subheading?: string;
  confirmationHeading?: string;
  confirmationMessage?: string;
  buttonText?: string;
  helpPlaceholder?: string;
  formType?: string;
}) {
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
  const [placesError, setPlacesError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.id === "phone") {
      setForm({ ...form, phone: formatPhoneNumber(e.target.value) });
    } else {
      setForm({ ...form, [e.target.id]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    // Custom validation for first and last name
    if (form.firstName.trim().length < 2 || form.lastName.trim().length < 2) {
      setError("First and last name must be at least 2 characters each.");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: formType }),
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
      setSuccess(true); // TEMP: Always show confirmation message for testing. Remove for production.
    }
  };

  useEffect(() => {
    // Check if Google Places API is loaded
    const checkGooglePlaces = () => {
      if (typeof window !== "undefined" && window.google && window.google.maps && window.google.maps.places) {
        console.log("Google Places API loaded successfully.");
        setPlacesError(false);
      } else {
        console.warn("Google Places API not loaded. Falling back to manual address input.");
        setPlacesError(true);
      }
    };
    // Try after a short delay to allow script to load
    const timeout = setTimeout(checkGooglePlaces, 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    console.log('API Key:', process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
  }, []);

  return (
    <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-[#032b53] text-white p-6">
          <h3
            className="text-xl font-bold flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            {heading}
          </h3>
          <p className="text-sm opacity-90 mt-1">
            {subheading}
          </p>
        </div>
        <div className="p-6">
          {success ? (
            <div className="flex flex-col items-center justify-center min-h-[200px] text-center">
              <h2 className="text-2xl font-bold text-[#032b53] mb-2">
                {confirmationHeading}
              </h2>
              <p className="text-lg text-[#032b53] opacity-90">
                {confirmationMessage}
              </p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-[#032b53]">First Name</Label>
                  <Input id="firstName" type="text" minLength={2} className="mt-1 border-gray-300 focus:border-[#032b53] focus:ring-[#032b53]" value={form.firstName} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-[#032b53]">Last Name</Label>
                  <Input id="lastName" type="text" minLength={2} className="mt-1 border-gray-300 focus:border-[#032b53] focus:ring-[#032b53]" value={form.lastName} onChange={handleChange} required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-[#032b53]">Email</Label>
                  <Input id="email" type="email" className="mt-1 border-gray-300 focus:border-[#032b53] focus:ring-[#032b53]" value={form.email} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-[#032b53]">Phone Number</Label>
                  <Input id="phone" type="tel" className="mt-1 border-gray-300 focus:border-[#032b53] focus:ring-[#032b53]" value={form.phone} onChange={handleChange} required />
                </div>
              </div>
              <div>
                <Label htmlFor="address" className="text-sm font-medium text-[#032b53]">Home Address</Label>
                {placesError ? (
                  <>
                    <Input
                      id="address"
                      type="text"
                      placeholder="Street address, City, ZIP"
                      className="mt-1 border-gray-300 focus:border-[#032b53] focus:ring-[#032b53]"
                      value={form.address}
                      onChange={handleChange}
                      required
                    />
                    <p className="text-xs text-red-600 mt-1">Address autocomplete is unavailable. Please enter your address manually.</p>
                  </>
                ) : (
                  <PlacesAutocomplete
                    value={form.address}
                    onChange={(address: string) => setForm({ ...form, address })}
                    onSelect={(address: string) => setForm({ ...form, address })}
                    searchOptions={{ types: ["address"] }}
                    googleCallbackName="initPlacesScript"
                  >
                    {({
                      getInputProps,
                      suggestions,
                      getSuggestionItemProps,
                      loading,
                    }: {
                      getInputProps: (options?: any) => any;
                      suggestions: readonly Suggestion[];
                      getSuggestionItemProps: (suggestion: Suggestion, options?: any) => any;
                      loading: boolean;
                    }) => (
                      <div>
                        <Input
                          {...getInputProps({
                            id: "address",
                            placeholder: "Street address, City, ZIP",
                            className: "mt-1 border-gray-300 focus:border-[#032b53] focus:ring-[#032b53]",
                            required: true,
                          })}
                        />
                        <div className="absolute z-10 bg-white border border-gray-200 rounded-md shadow-lg mt-1 w-full">
                          {loading && <div className="px-3 py-2 text-gray-500">Loading...</div>}
                          {suggestions.map((suggestion) => {
                            const className = suggestion.active
                              ? "px-3 py-2 cursor-pointer bg-[#fba0ab]/10 text-[#032b53]"
                              : "px-3 py-2 cursor-pointer";
                            return (
                              <div
                                {...getSuggestionItemProps(suggestion, { className })}
                                key={suggestion.placeId}
                              >
                                {suggestion.description}
                              </div>
                            );
                          })}
                          {!loading && suggestions.length === 0 && form.address.trim() !== "" && (
                            <div className="px-3 py-2 text-gray-500">No address found. Try a different search.</div>
                          )}
                        </div>
                      </div>
                    )}
                  </PlacesAutocomplete>
                )}
              </div>
              <div>
                <Label htmlFor="help" className="text-sm font-medium text-[#032b53]">How can we help?</Label>
                <textarea id="help" rows={3} placeholder={helpPlaceholder} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#032b53] focus:border-[#032b53]" value={form.help} onChange={handleChange} required />
              </div>
              <Button type="submit" className="w-full bg-[#fba0ab] hover:bg-[#fba0ab]/90 text-[#032b53] font-discount-bold py-3 rounded-lg" disabled={loading}>
                {loading ? "Submitting..." : buttonText}
              </Button>
              {error && <p className="text-red-600 text-xs text-center">{error}</p>}
              <p className="text-xs text-gray-500 text-center">
                We'll reach out within 1 business day to schedule your free home assessment
              </p>
            </form>
          )}
        </div>
      </CardContent>
    </Card>
  );
} 