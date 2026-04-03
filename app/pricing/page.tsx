"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, Sparkles } from "lucide-react";
import { PRICING_TIERS, FAQ_ITEMS } from "@/lib/constants";
import GlassCard from "@/components/ui/GlassCard";
import GradientButton from "@/components/ui/GradientButton";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        {/* Background blobs */}
        <div className="mesh-blob w-[500px] h-[500px] bg-primary -top-40 -left-40" />
        <div className="mesh-blob w-[400px] h-[400px] bg-secondary -top-20 right-0" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] mb-6">
              Transparent Pricing,{" "}
              <span className="gradient-text">Real Results</span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
              Choose the plan that fits your growth ambitions. All plans include
              a dedicated strategist and transparent reporting.
            </p>
          </motion.div>

          {/* Toggle */}
          <motion.div
            className="flex items-center justify-center mt-10 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-full p-1 inline-flex items-center">
              <button
                onClick={() => setIsAnnual(false)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                  !isAnnual
                    ? "bg-primary text-white shadow-lg"
                    : "text-text-muted hover:text-text-primary"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                  isAnnual
                    ? "bg-primary text-white shadow-lg"
                    : "text-text-muted hover:text-text-primary"
                )}
              >
                Annual
              </button>
            </div>
            <AnimatePresence>
              {isAnnual && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8, x: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -10 }}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-success/20 text-success text-xs font-semibold"
                >
                  <Sparkles className="w-3 h-3" />
                  Save 20%
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 md:pb-32 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
            {PRICING_TIERS.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index + 0.3 }}
                className={cn(
                  "relative",
                  tier.popular && "md:-mt-4 md:mb-[-16px]"
                )}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                <GlassCard
                  hover
                  glow={tier.popular ? "primary" : undefined}
                  className={cn(
                    "h-full flex flex-col",
                    tier.popular &&
                      "border-primary/30 ring-1 ring-primary/20 bg-white/[0.04]"
                  )}
                >
                  <div className="mb-6 pt-2">
                    <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-text-primary mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-text-muted">{tier.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={isAnnual ? "annual" : "monthly"}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-end gap-1"
                      >
                        <span className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-text-primary">
                          $
                          {isAnnual
                            ? tier.annualPrice.toLocaleString()
                            : tier.monthlyPrice.toLocaleString()}
                        </span>
                        <span className="text-text-muted text-lg mb-1">/mo</span>
                      </motion.div>
                    </AnimatePresence>
                    {isAnnual && (
                      <p className="text-xs text-text-muted mt-1">
                        Billed annually
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <GradientButton
                    variant={tier.popular ? "primary" : "outline"}
                    size="lg"
                    href="/contact"
                    className="w-full"
                  >
                    {tier.cta}
                  </GradientButton>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Plan */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="glass-strong rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mesh-blob w-[300px] h-[300px] bg-tertiary top-0 right-0" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
                Need something custom?
              </h2>
              <p className="text-text-muted mb-8 max-w-xl mx-auto">
                Every business is unique. Let us build a tailored SEO strategy
                that perfectly aligns with your goals, budget, and timeline.
              </p>
              <GradientButton variant="secondary" size="lg" href="/contact">
                Contact Us
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our pricing and services."
            className="mb-12"
          />

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="glass rounded-xl overflow-hidden">
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                  >
                    <span className="text-text-primary font-semibold pr-4">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-text-muted flex-shrink-0" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5">
                          <p className="text-text-muted text-sm leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
