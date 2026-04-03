"use client";

import { motion } from "framer-motion";
import GradientButton from "@/components/ui/GradientButton";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function ServiceHero({
  title,
  subtitle,
  ctaText = "Get Free SEO Audit",
  ctaHref = "/free-audit",
  secondaryCtaText = "View Pricing",
  secondaryCtaHref = "/pricing",
}: ServiceHeroProps) {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="mesh-blob w-[500px] h-[500px] bg-primary -top-40 -right-40 absolute" />
      <div className="mesh-blob w-[400px] h-[400px] bg-secondary -bottom-32 -left-32 absolute" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] gradient-text mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <GradientButton href={ctaHref}>{ctaText}</GradientButton>
          <GradientButton href={secondaryCtaHref} variant="outline">
            {secondaryCtaText}
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}
