"use client";

import { motion } from "framer-motion";
import GradientButton from "@/components/ui/GradientButton";

export default function CTASection({
  title = "Ready to Dominate Search?",
  subtitle = "Get a free SEO audit and see how we can grow your organic traffic.",
  ctaText = "Get Your Free SEO Audit",
  ctaHref = "/free-audit",
}: {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-tertiary/10" />
      <div className="mesh-blob w-[400px] h-[400px] bg-primary -top-20 -right-20 absolute" />
      <div className="mesh-blob w-[300px] h-[300px] bg-secondary -bottom-16 -left-16 absolute" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading)] gradient-text mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-text-muted text-lg mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <GradientButton href={ctaHref} size="lg">
            {ctaText}
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}
