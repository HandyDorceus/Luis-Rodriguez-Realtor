"use client";

import type { Metadata } from "next";
import { useState } from "react";
import Footer from "@/components/Footer";

// Note: metadata export is ignored in client components.
// See app/contact/layout.tsx for metadata.

const NAVY = "#2C3E5B";

const HOW_OPTIONS = [
  "What's my house worth?",
  "Buying a Home",
  "Selling a Home",
  "How can I invest?",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    howCanIHelp: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email Luis directly at Lrodriguez@sellinboston.com.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">

      {/* ===== Hero ===== */}
      <section className="w-full" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-light tracking-wide text-white sm:text-4xl lg:text-5xl">
            Contact Luis Rodriguez &amp; The Team at Reference Real Estate
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Our job is to make sure you have all the information you need, when you need it. Reach out
            any time by phone, email, or the form below — we&apos;ll get back to you as quickly as possible.
          </p>
        </div>
      </section>

      {/* ===== Contact Info + Form ===== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">

          {/* Contact info block */}
          <div className="mb-12 grid grid-cols-1 gap-8 rounded-xl border border-zinc-200 bg-zinc-50 p-8 sm:grid-cols-2">
            {/* Left column */}
            <div className="space-y-3">
              <div className="flex gap-2 text-sm">
                <span className="w-24 font-semibold text-zinc-500 shrink-0">Mobile:</span>
                <a href="tel:6176630679" className="font-medium transition hover:underline" style={{ color: NAVY }}>
                  (617) 663-0679
                </a>
              </div>
              <div className="flex gap-2 text-sm">
                <span className="w-24 font-semibold text-zinc-500 shrink-0">Email:</span>
                <a href="mailto:Lrodriguez@sellinboston.com" className="font-medium transition hover:underline" style={{ color: NAVY }}>
                  Lrodriguez@sellinboston.com
                </a>
              </div>
              <div className="flex gap-2 text-sm">
                <span className="w-24 font-semibold text-zinc-500 shrink-0">Languages:</span>
                <span className="text-zinc-700">English &amp; Spanish</span>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-1 text-sm text-zinc-700">
              <p className="font-semibold" style={{ color: NAVY }}>Reference Real Estate</p>
              <p>61 Boardman Street</p>
              <p>Boston, MA 02128</p>
            </div>
          </div>

          {/* Form heading */}
          <h2 className="mb-2 text-2xl font-bold" style={{ color: NAVY }}>
            Have a Question or Want a Free Market Report?
          </h2>
          <p className="mb-8 text-sm text-zinc-500">
            Fill out the form below and Luis will get back to you as quickly as possible.
          </p>

          {submitted ? (
            <div className="rounded-xl border border-green-200 bg-green-50 px-8 py-10 text-center">
              <p className="text-lg font-semibold text-green-700">Thanks! Luis will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 2-col grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-zinc-700" htmlFor="firstName">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none transition focus:border-transparent focus:ring-2"
                    style={{ "--tw-ring-color": NAVY } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-zinc-700" htmlFor="lastName">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none transition focus:border-transparent focus:ring-2"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-zinc-700" htmlFor="email">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none transition focus:border-transparent focus:ring-2"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-zinc-700" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none transition focus:border-transparent focus:ring-2"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-zinc-700" htmlFor="howCanIHelp">
                    How can I help you?
                  </label>
                  <select
                    id="howCanIHelp"
                    name="howCanIHelp"
                    value={form.howCanIHelp}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-transparent focus:ring-2"
                  >
                    <option value="">Select an option…</option>
                    {HOW_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-zinc-700" htmlFor="message">
                    Message / Questions
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none transition focus:border-transparent focus:ring-2 resize-none"
                  />
                </div>
              </div>

              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90 disabled:opacity-60 sm:w-auto sm:px-10"
                style={{ backgroundColor: NAVY }}
              >
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}

          {/* Bilingual note */}
          <p className="mt-8 text-xs text-zinc-400">
            ¿Prefieres comunicarte en español? No hay problema — escríbeme directamente a{" "}
            <a href="mailto:Lrodriguez@sellinboston.com" className="hover:underline" style={{ color: NAVY }}>
              Lrodriguez@sellinboston.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
