import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import JsonLd from "@/components/JsonLd";
import Footer from "@/components/Footer";

const BASE = "https://luisrodriguezrealtor.com";
const NAVY = "#2C3E5B";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const locale = post.lang === "es" ? "es_US" : "en_US";
  return {
    title: `${post.title} | Luis Rodriguez Realtor`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      locale,
      siteName: "Luis Rodriguez | Boston Realtor",
      title: post.title,
      description: post.excerpt,
      url: `${BASE}/blog/${post.slug}`,
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "author": {
          "@type": "Person",
          "name": "Luis Rodriguez",
          "url": `${BASE}/about`,
        },
        "publisher": {
          "@type": "Organization",
          "name": "Luis Rodriguez Real Estate",
          "url": BASE,
        },
        "url": `${BASE}/blog/${post.slug}`,
        "inLanguage": post.lang === "es" ? "es" : "en",
      }} />

      {/* ===== Article ===== */}
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Back link */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1 text-sm font-semibold transition hover:opacity-70"
          style={{ color: NAVY }}
        >
          ← Back to Blog
        </Link>

        {/* Category badge */}
        <div className="mt-6">
          <span
            className="inline-block rounded-full px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-white"
            style={{ backgroundColor: NAVY }}
          >
            {post.category}
            {post.lang === "es" && <span className="ml-1 opacity-80">· ES</span>}
          </span>
        </div>

        {/* Title */}
        <h1
          className="mt-4 text-3xl font-bold leading-tight sm:text-4xl"
          style={{ color: NAVY }}
        >
          {post.title}
        </h1>

        {/* Date */}
        <time
          className="mt-2 block text-sm text-zinc-400"
          dateTime={post.date}
        >
          {formatDate(post.date)}
        </time>

        {/* Divider */}
        <div className="my-8 h-px bg-zinc-200" />

        {/* Post content */}
        <div
          className="post-content text-base leading-relaxed text-zinc-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Divider */}
        <div className="my-12 h-px bg-zinc-200" />

        {/* Author card */}
        <div className="flex flex-col gap-6 rounded-lg border border-zinc-200 p-6 sm:flex-row sm:items-center">
          {/* Avatar */}
          <div
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full text-xl font-bold text-white"
            style={{ backgroundColor: NAVY }}
          >
            LR
          </div>

          {/* Info */}
          <div className="flex-1">
            <p className="text-lg font-bold" style={{ color: NAVY }}>
              Luis Rodriguez
            </p>
            <p className="text-sm text-zinc-500">Realtor | Reference Real Estate</p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-600">
              <a href="tel:6176630679" className="hover:underline">617.663.0679</a>
              <a href="mailto:Lrodriguez@sellinboston.com" className="hover:underline">
                Lrodriguez@sellinboston.com
              </a>
            </div>
          </div>

          {/* CTA */}
          <a
            href="mailto:Lrodriguez@sellinboston.com"
            className="shrink-0 inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
            style={{ backgroundColor: NAVY }}
          >
            Book a Free Consultation
          </a>
        </div>
      </article>

      <Footer />
    </div>
  );
}
