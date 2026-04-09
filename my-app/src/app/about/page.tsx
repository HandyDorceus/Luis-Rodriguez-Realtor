import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Luis Rodriguez | Dorchester Native & Boston Realtor",
  description:
    "Born and raised in Dorchester, Luis Rodriguez brings local expertise and bilingual service to buyers and sellers across Greater Boston. $10M+ in personal sales.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Luis Rodriguez | Boston Realtor",
    title: "About Luis Rodriguez | Dorchester Native & Boston Realtor",
    description:
      "Born and raised in Dorchester, Luis Rodriguez brings local expertise and bilingual service to buyers and sellers across Greater Boston. $10M+ in personal sales.",
    url: "https://luisrodriguezrealtor.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Luis Rodriguez | Dorchester Native & Boston Realtor",
    description:
      "Born and raised in Dorchester, Luis Rodriguez brings local expertise and bilingual service to buyers and sellers across Greater Boston. $10M+ in personal sales.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
