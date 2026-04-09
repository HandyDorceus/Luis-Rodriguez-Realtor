/* app/page.tsx */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Luis Rodriguez | Boston Realtor — Bilingual Real Estate Agent",
  description:
    "Luis Rodriguez is a bilingual (English & Spanish) real estate agent serving Greater Boston. Specializing in first-time buyers, multi-family properties, and luxury homes. Call 617.663.0679.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Luis Rodriguez | Boston Realtor",
    title: "Luis Rodriguez | Boston Realtor — Bilingual Real Estate Agent",
    description:
      "Luis Rodriguez is a bilingual (English & Spanish) real estate agent serving Greater Boston. Specializing in first-time buyers, multi-family properties, and luxury homes. Call 617.663.0679.",
    url: "https://luisrodriguezrealtor.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Rodriguez | Boston Realtor — Bilingual Real Estate Agent",
    description:
      "Luis Rodriguez is a bilingual (English & Spanish) real estate agent serving Greater Boston. Specializing in first-time buyers, multi-family properties, and luxury homes. Call 617.663.0679.",
  },
};

const NAVY = "#2C3E5B";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "Luis Rodriguez",
        "jobTitle": "Realtor",
        "description": "Bilingual real estate agent born and raised in Dorchester, MA. Specializing in first-time buyers, multi-family properties, and luxury homes across Greater Boston. Son of Honduran immigrants. Member of La Unidad Latina. Graduate of Boston Latin Academy and UMass Amherst.",
        "url": "https://luisrodriguezrealtor.com",
        "telephone": "+16176630679",
        "email": "Lrodriguez@sellinboston.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "61 Boardman St",
          "addressLocality": "Boston",
          "addressRegion": "MA",
          "postalCode": "02128",
          "addressCountry": "US"
        },
        "areaServed": [
          "Boston, MA", "East Boston, MA", "Dorchester, MA", "Roxbury, MA",
          "Lynn, MA", "Revere, MA", "Somerville, MA", "Cambridge, MA",
          "Quincy, MA", "Malden, MA", "Medford, MA", "Saugus, MA",
          "Salem, MA", "Beverly, MA", "Peabody, MA"
        ],
        "knowsLanguage": ["English", "Spanish"],
        "memberOf": { "@type": "Organization", "name": "La Unidad Latina" },
        "worksFor": { "@type": "Organization", "name": "Reference Real Estate" },
        "alumniOf": [
          { "@type": "EducationalOrganization", "name": "Boston Latin Academy" },
          { "@type": "EducationalOrganization", "name": "University of Massachusetts Amherst" }
        ],
        "sameAs": [
          "https://www.instagram.com/luxury_luuu",
          "https://www.tiktok.com/@kingluuuu_",
          "https://www.facebook.com/luis.j.rodriguez.3139"
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Luis Rodriguez Real Estate",
        "description": "Bilingual real estate services in Greater Boston. First-time buyers, multi-family, and luxury properties. English and Spanish.",
        "telephone": "+16176630679",
        "email": "Lrodriguez@sellinboston.com",
        "url": "https://luisrodriguezrealtor.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "61 Boardman St",
          "addressLocality": "Boston",
          "addressRegion": "MA",
          "postalCode": "02128",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 42.3736,
          "longitude": -71.0389
        },
        "openingHours": "Mo-Su 08:00-20:00",
        "priceRange": "$-$$",
        "areaServed": "Greater Boston, MA"
      }} />

      {/* ===== Hero ===== */}
      <section id="home" className="relative w-full">
        <div className="relative w-full">
          <div className="relative aspect-[16/7] w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1800&auto=format&fit=crop&q=80"
              alt="Modern home interior"
              className="h-full w-full object-cover"
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
              <div className="max-w-xl space-y-4 text-sm leading-relaxed text-white/90">
                <p>
                  It&apos;s great to meet you. I&apos;m Luis Rodriguez, a Boston native and proud Dorchester
                  kid, helping buyers navigate the Greater Boston real estate market with confidence.
                  Whether you&apos;re purchasing your first home, investing in multi-family properties, or
                  searching for something more luxurious, I bring deep local knowledge, straightforward
                  guidance, and the kind of hustle it takes to get deals done.
                </p>
                <p>
                  Fluent in both English and Spanish, I&apos;m committed to making the process clear,
                  comfortable, and accessible every step of the way. To me, real estate is personal,
                  every client is treated like family, and every move matters.
                </p>
                <p className="font-medium text-white">
                  Because in this city, home is everything.
                </p>
              </div>
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
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0XZGYJmk-aEVgerXz9SYqAFMwPOTpJimBcW5HovqL9CfBXtgg_F8p-TEBlpLxPBMvPFSAPCby-"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
                style={{ backgroundColor: NAVY }}
              >
                Book a Meeting
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}