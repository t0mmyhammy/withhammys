"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  brokerage?: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  autoRotateInterval?: number;
  className?: string;
}

const STAR_COLOR = "#fba0ab";
const BG_COLOR = "#fef5f6";
const TEXT_COLOR = "#032b53";

export default function TestimonialsCarousel({
  testimonials,
  autoRotateInterval = 4000,
  className = "",
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, autoRotateInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, autoRotateInterval, testimonials.length]);

  // Pause on interaction
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    pauseAutoPlay();
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevious = () => {
    pauseAutoPlay();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    pauseAutoPlay();
    setCurrentIndex(index);
  };

  if (!testimonials || testimonials.length === 0) return null;
  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className={`py-20 px-4 md:px-8 lg:px-12 relative w-full ${className}`}
      style={{ background: BG_COLOR }}
      aria-label="Testimonials"
    >
      <div className="max-w-3xl mx-auto relative">
        {/* Decorative SVGs */}
        <div className="absolute -top-10 -left-10 z-0 select-none" aria-hidden="true">
          <Image src="/logos/quote-mark-background.svg" alt="" width={80} height={80} priority />
        </div>
        <div className="absolute -bottom-8 -right-12 z-0 select-none" aria-hidden="true">
          <Image src="/logos/pig-quote-background.svg" alt="" width={120} height={120} priority />
        </div>
        {/* Card */}
        <div className="relative bg-white/80 rounded-2xl shadow-lg p-6 md:p-8 overflow-hidden z-10">
          {/* Dots Indicator (moved above name, left-aligned) */}
          {testimonials.length > 1 && (
            <div className="flex justify-start space-x-2 mb-3" aria-label="Testimonial slide dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#032b53]/20 ${
                    index === currentIndex ? "bg-[#032b53]/40 scale-110" : "bg-[#032b53]/10"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : undefined}
                  tabIndex={0}
                />
              ))}
            </div>
          )}
          {/* Name and Brokerage */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl md:text-3xl font-discount-black tracking-wide text-[#032b53] transition-all duration-500 text-left">
              {currentTestimonial.name}
            </span>
            {currentTestimonial.brokerage && (
              <span className="text-base md:text-lg font-sans text-gray-400 font-normal align-middle">
                {currentTestimonial.brokerage}
              </span>
            )}
          </div>
          {/* Quote */}
          <p className="text-lg md:text-xl leading-relaxed mb-4 font-sans text-[#032b53] transition-all duration-500 min-h-[100px] text-left">
            {currentTestimonial.text}
          </p>
          {/* Star Rating */}
          <div className="flex justify-start space-x-1 mb-2" aria-label={`Rated ${currentTestimonial.rating} out of 5 stars`}>
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6"
                fill={STAR_COLOR}
                stroke={STAR_COLOR}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          {/* Navigation Arrows */}
          {testimonials.length > 1 && (
            <div className="flex justify-between items-center mt-4" role="group" aria-label="Testimonial navigation">
              <button
                onClick={goToPrevious}
                className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#032b53] text-[#032b53] hover:bg-[#032b53] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#032b53]"
                aria-label="Previous testimonial"
                tabIndex={0}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#032b53] text-[#032b53] hover:bg-[#032b53] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#032b53]"
                aria-label="Next testimonial"
                tabIndex={0}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 