"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientButton from "@/components/ui/GradientButton";

const glowColors = [
  "from-primary/20 to-secondary/5",
  "from-secondary/20 to-primary/5",
  "from-tertiary/20 to-primary/5",
  "from-primary/20 to-tertiary/5",
  "from-secondary/20 to-tertiary/5",
  "from-tertiary/20 to-secondary/5",
];

export default function ServicesPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="mesh-blob w-[500px] h-[500px] bg-primary -top-40 -right-40 absolute" />
        <div className="mesh-blob w-[400px] h-[400px] bg-tertiary -bottom-32 -left-32 absolute" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-heading)] gradient-text mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Comprehensive SEO solutions designed to propel your business to the
            top of search results and keep you there.
          </motion.p>
        </div>
      </section>

      {/* Service Blocks — Zigzag Layout */}
      {SERVICES.map((service, index) => {
        const isEven = index % 2 === 1;
        const Icon = service.icon;

        return (
          <section
            key={service.slug}
            className="relative py-20 md:py-32 overflow-hidden"
          >
            {/* Subtle background glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${glowColors[index % glowColors.length]} opacity-30 pointer-events-none`}
            />

            <div className="container mx-auto px-4 relative z-10">
              <div
                className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isEven ? "md:direction-rtl" : ""
                }`}
              >
                {/* Content side */}
                <motion.div
                  className={isEven ? "md:order-2" : ""}
                  initial={{
                    opacity: 0,
                    x: isEven ? 60 : -60,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-text-muted leading-relaxed mb-8">
                    {service.longDesc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-text-muted"
                      >
                        <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <GradientButton href={`/services/${service.slug}`}>Get Started</GradientButton>
                </motion.div>

                {/* Visual side — large icon */}
                <motion.div
                  className={`flex items-center justify-center ${isEven ? "md:order-1" : ""}`}
                  initial={{
                    opacity: 0,
                    x: isEven ? -60 : 60,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                >
                  <motion.div
                    className="relative w-48 h-48 md:w-64 md:h-64"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-secondary/10 to-tertiary/20 animate-pulse-soft" />

                    {/* Gradient circle */}
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_60px_rgba(108,92,231,0.3)]">
                      <Icon className="w-20 h-20 md:w-28 md:h-28 text-white/90" />
                    </div>

                    {/* Decorative orbit ring */}
                    <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="Ready to Dominate Search?"
            subtitle="Let's build a custom SEO strategy for your business."
          />
          <div className="mt-10">
            <GradientButton href="/contact" size="lg">
              Get Your Free SEO Audit
            </GradientButton>
          </div>
        </div>
      </section>
    </>
  );
}
