/* app/page.tsx */
import Image from "next/image";
import Link from "next/link";

const NAVY = "#2C3E5B"; // primary brand navy used in the mock

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased dark:bg-white dark:text-zinc-50">
      {/* ===== Top Nav ===== */}
      <header className="w-full" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold tracking-wide text-white sm:text-2xl">
                LUIS RODRIGUEZ
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-200">
                Real Estate Agent | Realtor
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide text-white/95 md:flex">
            <Link className="hover:text-white" href="#home">Home</Link>
            <Link className="hover:text-white" href="#about">About</Link>
            <Link className="hover:text-white" href="#contact">Contact</Link>
            <Link className="hover:text-white" href="#recent-sales">Recent Sales</Link>
          </nav>

          {/* Top-right round logo placeholder */}
          <div className="hidden md:block">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30">
              {/* Replace with your actual logo if you have one */}
              <span className="text-[10px] font-semibold text-white/80">LR</span>
            </div>
          </div>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section id="home" className="relative w-full">
        <div className="relative mx-auto max-w-7xl">
          <div className="relative aspect-[16/6] w-full overflow-hidden border-b-4" style={{ borderColor: NAVY }}>
            {/* Replace src with your kitchen/hero image path */}
            <Image
              src="/images/Hero-A.png"
              alt="Modern kitchen interior"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* ===== Intro Card ===== */}
      <section className="mx-auto -mt-10 max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8">
        <div
          className="mx-auto grid w-full grid-cols-1 items-center gap-10 rounded-2xl p-6 shadow-xl sm:p-10 md:grid-cols-[1.2fr_0.6fr]"
          style={{ backgroundColor: NAVY }}
        >
          {/* Text */}
          <div className="text-white">
            <h2 className="mb-4 text-2xl font-extrabold tracking-wide sm:text-3xl">Title</h2>
            <p className="mb-8 max-w-2xl text-[15px] leading-relaxed text-white/90">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has survived
              not only five centuries, but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:shadow md:px-6"
            >
              Book a Meeting
            </Link>
          </div>

          {/* Headshot */}
          <div className="mx-auto h-52 w-44 overflow-hidden rounded-xl shadow-lg md:mx-0 md:ml-auto md:h-56 md:w-48">
            {/* Replace with your headshot path */}
            <Image
              src="/images/Headshot-Ai.png"
              alt="Portrait of Luis Rodriguez"
              width={400}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="mt-auto w-full" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 text-white sm:px-6 md:grid-cols-3 lg:px-8">
          {/* Name block */}
          <div className="flex flex-col">
            <div className="text-2xl font-extrabold leading-none">LUIS</div>
            <div className="text-2xl font-extrabold leading-none">RODRIGUEZ</div>

            <div className="mt-4 text-xs uppercase tracking-wide text-zinc-200">
              Real Estate Agent | Realtor
            </div>
            <div className="mt-1 text-xs text-zinc-200">El Bostonian Street</div>
            <div className="text-xs text-zinc-200">Boston, MA 021xx</div>
            <div className="mt-3 text-xs text-zinc-100">857.620.0529</div>
            <div className="text-xs text-zinc-100">
              <a className="hover:underline" href="mailto:lrodriguez@reitboston.com">
                lrodriguez@reitboston.com
              </a>
            </div>
          </div>

          {/* Spacer column for layout symmetry */}
          <div />

          {/* Socials */}
          <div className="flex items-end md:justify-end">
            <div className="flex gap-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-14 w-14 items-center justify-center rounded-md border border-white/25 transition hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-7 w-7 fill-white"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.854 0-2.137 1.447-2.137 2.944v5.662H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.604 0 4.27 2.372 4.27 5.456v6.287zM5.337 7.433a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zM6.999 20.452H3.67V9h3.329v11.452z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-14 w-14 items-center justify-center rounded-md border border-white/25 transition hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-7 w-7 fill-white"
                  aria-hidden="true"
                >
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.507 5.507 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zM18 6.2a1 1 0 1 0 1.999.002A1 1 0 0 0 18 6.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-zinc-200 sm:px-6 lg:px-8">
            ©2025 Jakers &amp; Kings LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
