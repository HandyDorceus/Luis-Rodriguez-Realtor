"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAVY = "#2C3E5B";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full" style={{ backgroundColor: NAVY }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-xl font-bold tracking-wide text-white sm:text-2xl">
              LUIS RODRIGUEZ
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-300">
              Real Estate Agent | Realtor
            </span>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide text-white md:flex">
          <Link className="hover:text-zinc-300" href="/">Home</Link>
          <Link className="hover:text-zinc-300" href="/about">About</Link>
          <Link className="hover:text-zinc-300" href="#contact">Contact</Link>
          <Link className="hover:text-zinc-300" href="/recent-sales">Recent Sales</Link>
        </nav>

        {/* Hamburger Menu Button - visible only on small screens (440px and below) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          ></span>
        </button>

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

      {/* Mobile Menu - slides down when hamburger is clicked */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 border-t border-white/20 px-4 py-6">
          <Link
            className="text-sm font-semibold uppercase tracking-wide text-white hover:text-zinc-300"
            href="/"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className="text-sm font-semibold uppercase tracking-wide text-white hover:text-zinc-300"
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            className="text-sm font-semibold uppercase tracking-wide text-white hover:text-zinc-300"
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            className="text-sm font-semibold uppercase tracking-wide text-white hover:text-zinc-300"
            href="/recent-sales"
            onClick={() => setMobileMenuOpen(false)}
          >
            Recent Sales
          </Link>
        </nav>
      </div>
    </header>
  );
}
