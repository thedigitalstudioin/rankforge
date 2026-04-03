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
    default: "RankForge — Premium SEO Agency | We Don't Just Rank. We Dominate.",
    template: "%s | RankForge",
  },
  description:
    "RankForge is a premium SEO agency helping businesses dominate search rankings with data-driven strategies, technical excellence, and measurable results. Get your free SEO audit today.",
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
  metadataBase: new URL("https://rankforge.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rankforge.com",
    siteName: "RankForge",
    title: "RankForge — Premium SEO Agency",
    description:
      "We help businesses dominate search rankings with data-driven SEO strategies and measurable results.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RankForge — Premium SEO Agency",
    description:
      "We help businesses dominate search rankings with data-driven SEO strategies and measurable results.",
    images: ["/og-image.png"],
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
