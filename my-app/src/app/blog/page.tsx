import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Real Estate Blog | Luis Rodriguez Boston Realtor",
  description:
    "Market updates, first-time buyer guides, neighborhood breakdowns, and investor tips for Greater Boston — in English and Spanish.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Luis Rodriguez | Boston Realtor",
    title: "Real Estate Blog | Luis Rodriguez Boston Realtor",
    description:
      "Market updates, first-time buyer guides, neighborhood breakdowns, and investor tips for Greater Boston — in English and Spanish.",
    url: "https://luisrodriguezrealtor.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Blog | Luis Rodriguez Boston Realtor",
    description:
      "Market updates, first-time buyer guides, neighborhood breakdowns, and investor tips for Greater Boston — in English and Spanish.",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
