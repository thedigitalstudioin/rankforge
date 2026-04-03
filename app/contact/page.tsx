import type { Metadata } from "next";
import { Mail, Phone, MapPin, Shield, Clock, Calendar, Globe } from "lucide-react";
import { SITE } from "@/lib/constants";
import GlassCard from "@/components/ui/GlassCard";
import GradientButton from "@/components/ui/GradientButton";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  alternates: { canonical: `${SITE.url}/contact` },
  title: "Contact Us — Get a Free Consultation | RankForge",
  description:
    "Get in touch with RankForge for a free SEO consultation. We respond within 24 hours. Call, email, or fill out our contact form today.",
  openGraph: {
    title: "Contact Us — Get a Free Consultation | RankForge",
    description:
      "Get in touch with RankForge for a free SEO consultation. We respond within 24 hours. Call, email, or fill out our contact form today.",
    url: `${SITE.url}/contact`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630, alt: "Contact RankForge" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Get a Free Consultation | RankForge",
    description:
      "Get in touch with RankForge for a free SEO consultation. We respond within 24 hours. Call, email, or fill out our contact form today.",
    images: [`${SITE.url}/og-image.png`],
    creator: "@rankforge",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Digital Drive, Suite 500",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94105",
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: Object.values(SITE.socials),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: `${SITE.url}/contact`,
    },
  ],
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: Phone,
    label: "Call Us",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "123 Digital Drive, Suite 500",
    subValue: "San Francisco, CA 94105",
  },
];

const socialLinks = [
  { label: "Twitter / X", href: SITE.socials.twitter, icon: Globe },
  { label: "LinkedIn", href: SITE.socials.linkedin, icon: Globe },
  { label: "Instagram", href: SITE.socials.instagram, icon: Globe },
  { label: "Facebook", href: SITE.socials.facebook, icon: Globe },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessJsonLd, breadcrumbJsonLd]),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="mesh-blob w-[500px] h-[500px] bg-primary -top-40 -left-40" />
        <div className="mesh-blob w-[400px] h-[400px] bg-tertiary -top-20 right-0" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] mb-6">
              Let&apos;s Start Your{" "}
              <span className="gradient-text">SEO Journey</span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
              Ready to dominate search rankings? Fill out the form below and
              our team will craft a personalized strategy for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Split Layout: Form + Info */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Left: Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Right: Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((item) => (
                <GlassCard key={item.label} hover glow="primary" className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-text-primary font-semibold hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <>
                        <p className="text-text-primary font-semibold">{item.value}</p>
                        {item.subValue && (
                          <p className="text-sm text-text-muted">{item.subValue}</p>
                        )}
                      </>
                    )}
                  </div>
                </GlassCard>
              ))}

              {/* Office Hours */}
              <GlassCard hover={false} className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-semibold text-text-primary">
                    Office Hours
                  </span>
                </div>
                <p className="text-sm text-text-muted">
                  Mon - Fri: 9:00 AM - 6:00 PM PST
                </p>
                <p className="text-sm text-text-muted">
                  Sat - Sun: Closed
                </p>
              </GlassCard>

              {/* Map Placeholder */}
              <GlassCard hover={false} className="flex flex-col items-center justify-center py-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-text-primary font-semibold font-[family-name:var(--font-heading)]">
                    San Francisco, CA
                  </p>
                  <p className="text-sm text-text-muted mt-1">
                    123 Digital Drive, Suite 500
                  </p>
                </div>
              </GlassCard>

              {/* Social Links */}
              <GlassCard hover={false}>
                <p className="text-sm font-semibold text-text-primary mb-3">
                  Follow Us
                </p>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg glass text-sm text-text-muted hover:text-text-primary hover:border-white/15 transition-all"
                    >
                      <social.icon className="w-4 h-4" />
                      {social.label}
                    </a>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule a Call + Trust Badges */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Schedule CTA */}
          <div className="glass-strong rounded-2xl p-8 md:p-12 text-center mb-8 relative overflow-hidden">
            <div className="mesh-blob w-[300px] h-[300px] bg-secondary top-0 left-0" />
            <div className="relative z-10">
              <Calendar className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-3">
                Prefer to Schedule a Call?
              </h2>
              <p className="text-text-muted mb-6 max-w-lg mx-auto">
                Book a free 30-minute consultation with one of our SEO
                strategists. No commitment required.
              </p>
              <GradientButton variant="secondary" size="lg" href="/free-audit">
                Book a Free Consultation
              </GradientButton>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GlassCard hover={false} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-success/15 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-text-primary font-semibold">
                  Response Within 24 Hours
                </p>
                <p className="text-sm text-text-muted">
                  We value your time and respond fast.
                </p>
              </div>
            </GlassCard>

            <GlassCard hover={false} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-success/15 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-text-primary font-semibold">
                  Free Initial Consultation
                </p>
                <p className="text-sm text-text-muted">
                  No obligations, no hidden fees.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  );
}
