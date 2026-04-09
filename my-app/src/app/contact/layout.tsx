import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Luis Rodriguez | Boston Realtor",
  description:
    "Get in touch with Luis Rodriguez, bilingual real estate agent serving Greater Boston. Call, email, or fill out the form to book a free consultation.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Luis Rodriguez | Boston Realtor",
    title: "Contact Luis Rodriguez | Boston Realtor",
    description:
      "Get in touch with Luis Rodriguez, bilingual real estate agent serving Greater Boston. Call, email, or fill out the form to book a free consultation.",
    url: "https://luisrodriguezrealtor.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Luis Rodriguez | Boston Realtor",
    description:
      "Get in touch with Luis Rodriguez, bilingual real estate agent serving Greater Boston. Call, email, or fill out the form to book a free consultation.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
