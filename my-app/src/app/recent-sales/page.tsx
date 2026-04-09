"use client";

import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";

const NAVY = "#2C3E5B";

const PROPERTY_TYPES = [
  {
    label: "Residential",
    sub: "Houses & Condos",
    icon: <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  },
  {
    label: "Land",
    sub: "Lots & Acreage",
    icon: <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />,
  },
  {
    label: "Commercial",
    sub: "Business Properties",
    icon: <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />,
  },
  {
    label: "Rentals",
    sub: "Apartments & Houses",
    icon: <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z" />,
  },
];

export default function RecentSales() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">

      {/* ===== Page Hero ===== */}
      <section className="w-full" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-light tracking-wide text-white sm:text-5xl">
            Browse Listings
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Browse available properties across Greater Boston — filter by location, price, property type, and more.
          </p>
        </div>
      </section>

      {/* ===== Quick Search by Property Type ===== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-xl font-semibold uppercase tracking-wide" style={{ color: NAVY }}>
            Quick Search by Property Type
          </h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {PROPERTY_TYPES.map((pt) => (
              <a
                key={pt.label}
                href="https://idx.mlspin.com/MLS.IDX/Search?AgentId=CN255841"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center rounded-lg border border-zinc-200 p-5 text-center transition hover:border-zinc-400 hover:shadow-md"
              >
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100 transition group-hover:bg-zinc-200">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" style={{ fill: NAVY }}>
                    {pt.icon}
                  </svg>
                </div>
                <span className="font-semibold text-sm" style={{ color: NAVY }}>{pt.label}</span>
                <span className="mt-0.5 text-xs text-zinc-500">{pt.sub}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Embedded IDX Listings ===== */}
      <section className="w-full bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold" style={{ color: NAVY }}>
            My Current Listings
          </h2>
          <div className="relative w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
            {/* Loading fallback */}
            {!loaded && (
              <div className="flex h-[600px] items-center justify-center text-sm text-zinc-400">
                Loading listings…
              </div>
            )}
            <iframe
              src="https://idx.mlspin.com/MLS.IDX/Listings?agentId=CN255841&ff=1&vs=5bd0b2a8-ada4-4bb6-a4de-eeb063f4e8d1"
              width="100%"
              style={{
                border: "none",
                minHeight: "800px",
                display: loaded ? "block" : "none",
              }}
              frameBorder={0}
              allowFullScreen
              onLoad={() => setLoaded(true)}
              title="MLS IDX Listings"
            />
          </div>
        </div>
      </section>

      {/* ===== Contact CTA ===== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: NAVY }}>
            Need Help Finding the Right Property?
          </h2>
          <p className="mt-4 text-zinc-600 max-w-xl mx-auto">
            I&apos;m here to help you navigate the market and find a home that fits your needs and budget.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
            style={{ backgroundColor: NAVY }}
          >
            Contact Me
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
