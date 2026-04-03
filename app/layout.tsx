import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SEO Services — Rank Higher, Convert More | RankForge",
    template: "%s",
  },
  description:
    "RankForge delivers expert SEO services to boost your Google rankings. 500+ businesses helped. Get your free SEO audit today!",
  keywords: [
    "SEO agency",
    "search engine optimization",
    "SEO services",
    "link building",
    "technical SEO",
    "content strategy",
    "local SEO",
    "SEO audit",
  ],
  authors: [{ name: "RankForge" }],
  creator: "RankForge",
  metadataBase: new URL("https://seo-rankforge.pages.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seo-rankforge.pages.dev",
    siteName: "RankForge",
    title: "SEO Services — Rank Higher, Convert More | RankForge",
    description:
      "RankForge delivers expert SEO services to boost your Google rankings. 500+ businesses helped. Get your free SEO audit today!",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "RankForge SEO Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services — Rank Higher, Convert More | RankForge",
    description:
      "RankForge delivers expert SEO services to boost your Google rankings. 500+ businesses helped. Get your free SEO audit today!",
    images: ["/og-image.png"],
    creator: "@rankforge",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)]">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
