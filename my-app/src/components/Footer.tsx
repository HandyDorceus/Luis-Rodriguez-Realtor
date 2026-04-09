import Link from "next/link";

const NAVY = "#2C3E5B";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/luxury_luuu?igsh=NTVhcGV4c2huODZ4&utm_source=qr",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/luis.j.rodriguez.3139?mibextid=wwXIfr",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@kingluuuu_?_r=1&_t=ZT-95NldqLy92z",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
        <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Listings", href: "/recent-sales" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const popularSearches = [
  "First-Time Buyers",
  "Multi-Family Homes",
  "Luxury Properties",
  "East Boston Homes",
  "Greater Boston",
];

const colLabel = "mb-4 text-xs font-semibold uppercase tracking-widest text-white/50";
const colText = "text-sm text-white/80 leading-relaxed";

export default function Footer() {
  return (
    <footer className="mt-auto w-full" style={{ backgroundColor: NAVY }}>
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-6 sm:px-6 lg:px-8">

        {/* Four-column grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Column 1 — Contact */}
          <div>
            <p className={colLabel}>Contact</p>
            <ul className="space-y-1">
              <li className={`${colText} font-semibold text-white`}>Luis Rodriguez</li>
              <li className={colText}>Reference Real Estate</li>
              <li className={colText}>
                <a href="mailto:Lrodriguez@sellinboston.com" className="hover:text-white transition">
                  Lrodriguez@sellinboston.com
                </a>
              </li>
              <li className={colText}>61 Boardman Street</li>
              <li className={colText}>Boston, MA 02128</li>
              <li className={colText}>
                <a href="tel:6176630679" className="hover:text-white transition">
                  M: (617) 663-0679
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 — Connect */}
          <div>
            <p className={colLabel}>Connect</p>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex items-center gap-3 text-sm text-white/80 transition hover:text-white"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/20 transition hover:bg-white/10">
                    {s.icon}
                  </span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3 — Navigation */}
          <div>
            <p className={colLabel}>Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Popular Searches */}
          <div>
            <p className={colLabel}>Popular Searches</p>
            <ul className="space-y-2">
              {popularSearches.map((term) => (
                <li key={term}>
                  <Link
                    href="/recent-sales"
                    className="text-sm text-white/80 transition hover:text-white"
                  >
                    {term}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-2 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Luis Rodriguez Real Estate. All Rights Reserved.</p>
          <p>Equal Housing Opportunity. Luis Rodriguez is a licensed real estate agent in Massachusetts.</p>
          <p>Website Developed by Handy Dorceus</p>
        </div>
      </div>
    </footer>
  );
}
