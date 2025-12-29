/* app/recent-sales/page.tsx */
import Image from "next/image";
import Link from "next/link";

const NAVY = "#2C3E5B";

export default function RecentSales() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">

      {/* ===== Page Title ===== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl" style={{ color: NAVY }}>
            Search Listings
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-600">
            Browse available properties and find your perfect home. Use the search tools below to filter by location, price, property type, and more.
          </p>
        </div>
      </section>

      {/* ===== My Listings ===== */}
      <section className="w-full bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-md">
              <svg
                viewBox="0 0 24 24"
                className="h-12 w-12"
                style={{ fill: NAVY }}
                aria-hidden="true"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: NAVY }}>
              My Current Listings
            </h2>
            <p className="mt-4 text-zinc-600 max-w-xl mx-auto">
              View properties I&apos;m currently representing. These are exclusive listings available through my agency.
            </p>
            <a
              href="https://idx.mlspin.com/MLS.IDX/Office?AgentId=CN255841"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-base font-semibold text-white shadow-lg transition hover:opacity-90"
              style={{ backgroundColor: NAVY }}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              View My Listings
            </a>
            <p className="mt-4 text-sm text-zinc-500">
              Opens in a new tab
            </p>
          </div>
        </div>
      </section>

      {/* ===== MLS IDX Search Link ===== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-zinc-100 shadow-md">
              <svg
                viewBox="0 0 24 24"
                className="h-12 w-12"
                style={{ fill: NAVY }}
                aria-hidden="true"
              >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: NAVY }}>
              Search All Properties
            </h2>
            <p className="mt-4 text-zinc-600 max-w-xl mx-auto">
              Access the full MLS database to browse homes for sale, rentals, land, and commercial properties in the Boston area.
            </p>
            <a
              href="https://idx.mlspin.com/MLS.IDX/Search?AgentId=CN255841"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-base font-semibold text-white shadow-lg transition hover:opacity-90"
              style={{ backgroundColor: NAVY }}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
              Open Property Search
            </a>
            <p className="mt-4 text-sm text-zinc-500">
              Opens in a new tab
            </p>
          </div>
        </div>
      </section>

      {/* ===== Quick Search Options ===== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h3 className="text-center text-2xl font-bold mb-10" style={{ color: NAVY }}>
            Quick Search by Property Type
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Residential */}
            <a
              href="https://idx.mlspin.com/MLS.IDX/Search?AgentId=CN255841"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-lg border border-zinc-200 p-6 text-center transition hover:border-zinc-400 hover:shadow-md"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 transition group-hover:bg-zinc-200">
                <svg viewBox="0 0 24 24" className="h-8 w-8" style={{ fill: NAVY }}>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <span className="font-semibold" style={{ color: NAVY }}>Residential</span>
              <span className="mt-1 text-sm text-zinc-500">Houses & Condos</span>
            </a>

            {/* Land */}
            <a
              href="https://idx.mlspin.com/MLS.IDX/Search?AgentId=CN255841"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-lg border border-zinc-200 p-6 text-center transition hover:border-zinc-400 hover:shadow-md"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 transition group-hover:bg-zinc-200">
                <svg viewBox="0 0 24 24" className="h-8 w-8" style={{ fill: NAVY }}>
                  <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>
                </svg>
              </div>
              <span className="font-semibold" style={{ color: NAVY }}>Land</span>
              <span className="mt-1 text-sm text-zinc-500">Lots & Acreage</span>
            </a>

            {/* Commercial */}
            <a
              href="https://idx.mlspin.com/MLS.IDX/Search?AgentId=CN255841"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-lg border border-zinc-200 p-6 text-center transition hover:border-zinc-400 hover:shadow-md"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 transition group-hover:bg-zinc-200">
                <svg viewBox="0 0 24 24" className="h-8 w-8" style={{ fill: NAVY }}>
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                </svg>
              </div>
              <span className="font-semibold" style={{ color: NAVY }}>Commercial</span>
              <span className="mt-1 text-sm text-zinc-500">Business Properties</span>
            </a>

            {/* Rentals */}
            <a
              href="https://idx.mlspin.com/MLS.IDX/Search?AgentId=CN255841"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-lg border border-zinc-200 p-6 text-center transition hover:border-zinc-400 hover:shadow-md"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 transition group-hover:bg-zinc-200">
                <svg viewBox="0 0 24 24" className="h-8 w-8" style={{ fill: NAVY }}>
                  <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
                </svg>
              </div>
              <span className="font-semibold" style={{ color: NAVY }}>Rentals</span>
              <span className="mt-1 text-sm text-zinc-500">Apartments & Houses</span>
            </a>
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
            href="/#contact"
            className="mt-8 inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
            style={{ backgroundColor: NAVY }}
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="mt-auto w-full" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 text-white md:grid-cols-[1fr_2fr]">
            {/* Name block with left border */}
            <div className="flex">
              <div className="border-l-2 border-white/50 pl-4">
                <div className="text-2xl font-extrabold italic leading-none">LUIS</div>
                <div className="text-2xl font-extrabold italic leading-none">RODRIGUEZ</div>

                <div className="mt-3 text-[10px] uppercase tracking-wide text-zinc-300">
                  Real Estate Agent | Realtor
                </div>
                <div className="mt-1 text-[10px] text-zinc-300">61 Boardman Street</div>
                <div className="text-[10px] text-zinc-300">Boston MA, 02128</div>
                <div className="mt-3 text-[10px] text-zinc-100">
                  <a className="hover:underline" href="tel:6176630679">617.663.0679</a>
                </div>
                <div className="text-[10px] text-zinc-100">
                  <a className="hover:underline" href="mailto:Lrodriguez@sellinboston.com">
                    Lrodriguez@sellinboston.com
                  </a>
                </div>

                <div className="mt-6 text-[8px] text-zinc-400">
                  ©2025 Jokers &amp; Kings LLC. All<br />rights reserved.
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center justify-center gap-8 md:justify-center">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-white/40 transition hover:bg-white/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 fill-white"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-white/40 transition hover:bg-white/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 fill-white"
                  aria-hidden="true"
                >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-white/40 transition hover:bg-white/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 fill-white"
                  aria-hidden="true"
                >
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
