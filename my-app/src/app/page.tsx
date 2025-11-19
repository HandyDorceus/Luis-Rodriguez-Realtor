/* app/page.tsx */
import Image from "next/image";
import Link from "next/link";

const NAVY = "#2C3E5B";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">
      {/* ===== Top Nav ===== */}
      <header className="w-full" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold tracking-wide text-white sm:text-2xl">
                LUIS RODRIGUEZ
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-300">
                Real Estate Agent | Realtor
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide text-white md:flex">
            <Link className="hover:text-zinc-300" href="/">Home</Link>
            <Link className="hover:text-zinc-300" href="/about">About</Link>
            <Link className="hover:text-zinc-300" href="#contact">Contact</Link>
            <Link className="hover:text-zinc-300" href="/recent-sales">Recent Sales</Link>
          </nav>

          {/* Top-right logo */}
          <div className="hidden md:block">
            <Image
              src="/images/Logo-A.png"
              alt="Reference Real Estate Logo"
              width={50}
              height={50}
              className="h-12 w-12 object-contain"
            />
          </div>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section id="home" className="relative w-full">
        <div className="relative w-full">
          <div className="relative aspect-[16/7] w-full overflow-hidden">
            <Image
              src="/images/Hero-C.png"
              alt="Modern home interior"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* ===== Welcome Section ===== */}
      <section className="w-full" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto]">
            {/* Text */}
            <div className="text-white">
              <h2 className="mb-6 text-4xl font-light tracking-wide sm:text-5xl">
                WELCOME
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-white/90">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>

            {/* Real Estate Sign Icon */}
            <div className="hidden md:block">
              <Image
                src="/images/sign-real-estate.svg"
                alt="Real estate sign"
                width={160}
                height={160}
                className="h-40 w-40 opacity-20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Find Your Perfect Home Section ===== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            {/* House Illustration */}
            <div className="flex justify-center">
              <Image
                src="/images/home-icon.svg"
                alt="Home illustration"
                width={256}
                height={256}
                className="h-64 w-64"
              />
            </div>

            {/* Text and Button */}
            <div className="text-center md:text-left">
              <h2 className="mb-2 text-4xl font-bold sm:text-5xl" style={{ color: NAVY }}>
                Find Your Perfect
              </h2>
              <h2 className="mb-8 text-4xl font-bold sm:text-5xl" style={{ color: NAVY }}>
                Home Today
              </h2>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
                style={{ backgroundColor: NAVY }}
              >
                Book a Meeting
              </Link>
            </div>
          </div>
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