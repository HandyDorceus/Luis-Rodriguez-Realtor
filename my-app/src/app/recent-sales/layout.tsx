import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boston Listings & Recent Sales | Luis Rodriguez Realtor",
  description:
    "Browse Luis Rodriguez's listings and recent sales across Greater Boston — residential, multi-family, luxury, land, and rentals. Powered by MLS IDX.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Luis Rodriguez | Boston Realtor",
    title: "Boston Listings & Recent Sales | Luis Rodriguez Realtor",
    description:
      "Browse Luis Rodriguez's listings and recent sales across Greater Boston — residential, multi-family, luxury, land, and rentals. Powered by MLS IDX.",
    url: "https://luisrodriguezrealtor.com/recent-sales",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boston Listings & Recent Sales | Luis Rodriguez Realtor",
    description:
      "Browse Luis Rodriguez's listings and recent sales across Greater Boston — residential, multi-family, luxury, land, and rentals. Powered by MLS IDX.",
  },
};

export default function RecentSalesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
