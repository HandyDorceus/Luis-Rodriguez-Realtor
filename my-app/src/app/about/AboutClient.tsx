"use client";

import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";

const NAVY = "#2C3E5B";

const testimonials = [
  {
    id: 1,
    text: "We worked with Seth and Lou and they were both fantastic to work with. We had good communication and they helped us a lot with scheduling as well as the negotiation/strategy of the offer. They also had prior connections with the lending/insurance side as well which made the closing process efficient. I will definitely recommend others looking in MA to Reference Real Estate!",
    author: "Mike Foster",
  },
];

const stats = [
  { value: "$10M+", label: "Personal Sales" },
  { value: "$200M+", label: "Team Sales at Reference Real Estate" },
  { value: "Greater Boston", label: "Markets Served" },
];

export default function About() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">

      {/* ===== About Me Section ===== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_auto]">
            {/* Text */}
            <div>
              <h1 className="mb-4 text-4xl font-light tracking-wide sm:text-5xl" style={{ color: NAVY }}>
                ABOUT ME
              </h1>

              {/* Pull quote */}
              <p className="mb-8 text-xl italic font-light text-zinc-500 border-l-4 pl-4" style={{ borderColor: NAVY }}>
                "Boston is more than a market to me — it&apos;s home."
              </p>

              <div className="max-w-xl space-y-4 text-base leading-relaxed text-zinc-700">
                <p>
                  Luis Rodriguez was born and raised in Dorchester, the son of Honduran immigrants who came to this city in search of something better. That story of hard work, navigating an unfamiliar system, and finding a place to call your own is one he knows personally. It is also what led him to become a real estate agent.
                </p>
                <p>
                  A graduate of Boston Latin Academy and UMass Amherst, Luis brings sharp analytical thinking and deep local roots to every transaction. In just three years in the business, he has closed over $10 million in personal sales and is a proud member of the Reference Real Estate team, one of Boston&apos;s fastest-growing agencies with over $200 million in team sales.
                </p>
                <p>
                  Luis specializes in working with first-time homebuyers, bilingual Spanish-speaking clients, multi-family investors, and luxury buyers throughout Greater Boston. He understands what it feels like to sit across the table from someone who has never purchased a home, who may feel unsure about the process, and who wonders if homeownership is within reach. His answer is always the same: it is, and he will show you how.
                </p>
                <p>
                  As a member of La Unidad Latina, Lambda Upsilon Lambda Fraternity Inc., Luis remains deeply connected to the Latino community he grew up in and continues to serve. Whether you are a first-generation buyer searching for your place in Boston, an investor building a portfolio, or a luxury buyer looking for the right property, Luis will advocate for you every step of the way.
                </p>
                <p>
                  If you are thinking about selling, buying, investing, or simply exploring your options, let&apos;s connect. Reach out today and take the first step toward your next move.
                </p>
              </div>

              {/* Bilingual CTA */}
              <div className="mt-10 rounded-lg p-6 bg-zinc-50 border border-zinc-200">
                <p className="text-base font-medium text-zinc-700 italic">
                  ¿Buscas tu primer hogar en Boston? Hablemos.
                </p>
                <p className="mt-1 text-base text-zinc-600">
                  Looking for your first home in Boston? Let&apos;s talk.
                </p>
                <a
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0XZGYJmk-aEVgerXz9SYqAFMwPOTpJimBcW5HovqL9CfBXtgg_F8p-TEBlpLxPBMvPFSAPCby-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
                  style={{ backgroundColor: NAVY }}
                >
                  Book a Free Consultation
                </a>
              </div>
            </div>

            {/* Headshot */}
            <div className="mx-auto md:mx-0">
              <div className="h-64 w-48 overflow-hidden rounded-lg shadow-lg md:h-72 md:w-56">
                <Image
                  src="/images/Headshot-Ai.png"
                  alt="Portrait of Luis Rodriguez"
                  width={400}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Stats Bar ===== */}
      <section className="w-full" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col items-center">
                <span className="text-4xl font-bold text-white sm:text-5xl">{stat.value}</span>
                <span className="mt-2 text-sm uppercase tracking-wide text-white/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Client Success Stories Section ===== */}
      <section className="w-full bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-4xl font-light tracking-wide sm:text-5xl" style={{ color: NAVY }}>
            Client Success Stories
          </h2>

          {/* Horizontal sliding carousel */}
          <div className="relative overflow-hidden rounded-xl">
            {/* Track */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full shrink-0">
                  <div className="bg-white px-10 py-12 shadow-sm">
                    {/* Quote mark */}
                    <div className="mb-4 text-5xl font-serif leading-none text-zinc-200">&ldquo;</div>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      {testimonial.text}
                    </p>
                    <p className="mt-6 font-semibold" style={{ color: NAVY }}>
                      — {testimonial.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Left arrow */}
            {testimonials.length > 1 && (
              <button
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-zinc-100"
                aria-label="Previous testimonial"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} style={{ color: NAVY }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Right arrow */}
            {testimonials.length > 1 && (
              <button
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-zinc-100"
                aria-label="Next testimonial"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} style={{ color: NAVY }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>

          {/* Dots */}
          {testimonials.length > 1 && (
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className="h-2.5 w-2.5 rounded-full transition-all duration-300"
                  style={{ backgroundColor: index === activeTestimonial ? NAVY : '#d4d4d8' }}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Read More Reviews */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://www.google.com/maps/search/Reference+Real+Estate+Seth+Williams+Boston"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 px-7 py-2.5 text-sm font-semibold transition hover:bg-zinc-100"
              style={{ borderColor: NAVY, color: NAVY }}
            >
              Read More Reviews →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
