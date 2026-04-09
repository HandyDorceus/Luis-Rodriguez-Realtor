"use client";

import Link from "next/link";
import { useState } from "react";
import { posts } from "@/lib/posts";
import Footer from "@/components/Footer";

const NAVY = "#2C3E5B";

const CATEGORIES = [
  "All",
  "Market Updates",
  "First-Time Buyers",
  "Neighborhood Guides",
  "Investor Tips",
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  // Sort newest first
  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">

      {/* ===== Hero ===== */}
      <section className="w-full" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-light tracking-wide text-white sm:text-5xl">
            Insights &amp; Advice
          </h1>
          <p className="mt-4 max-w-xl text-white/80">
            Real estate tips, market updates, and neighborhood guides from a Boston native.
          </p>
        </div>
      </section>

      {/* ===== Filter Bar ===== */}
      <section className="w-full border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-4 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold transition"
                  style={{
                    backgroundColor: isActive ? NAVY : "transparent",
                    color: isActive ? "#fff" : "#52525b",
                    border: isActive ? `2px solid ${NAVY}` : "2px solid #e4e4e7",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Card Grid ===== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {sorted.length === 0 ? (
            <p className="text-zinc-500">No posts in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {sorted.map((post) => (
                <article
                  key={post.slug}
                  className="flex flex-col rounded-lg border border-zinc-200 p-6 transition hover:shadow-md"
                >
                  {/* Category badge */}
                  <span
                    className="mb-3 inline-block self-start rounded-full px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-white"
                    style={{ backgroundColor: NAVY }}
                  >
                    {post.category}
                    {post.lang === "es" && (
                      <span className="ml-1 opacity-80">· ES</span>
                    )}
                  </span>

                  <h2 className="mb-2 text-xl font-bold leading-snug" style={{ color: NAVY }}>
                    {post.title}
                  </h2>

                  <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-600">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <time className="text-xs text-zinc-400" dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold transition hover:opacity-70"
                      style={{ color: NAVY }}
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
