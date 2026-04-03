"use client";

import { motion } from "framer-motion";

interface Tier {
  name: string;
  price: string;
  highlight: boolean;
  features: string[];
}

export default function PricingPreview({
  tiers,
  serviceName,
}: {
  tiers: Tier[];
  serviceName: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Transparent Pricing for{" "}
          <span className="gradient-text">{serviceName}</span>
        </motion.h2>
        <motion.p
          className="text-text-muted text-center mb-14 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Flexible plans designed to match your growth stage.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              className={`glass rounded-2xl p-6 md:p-8 relative transition-all duration-300 ${
                tier.highlight
                  ? "md:scale-105 border-primary/30 shadow-[0_0_30px_rgba(108,92,231,0.2)]"
                  : "hover:border-white/10"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Popular badge */}
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white">
                    Popular
                  </span>
                </div>
              )}

              <h3 className="text-lg font-semibold text-text-primary mb-3 font-[family-name:var(--font-heading)]">
                {tier.name}
              </h3>

              <div className="mb-6">
                <span className="text-3xl md:text-4xl font-bold gradient-text font-[family-name:var(--font-heading)]">
                  {tier.price}
                </span>
                <span className="text-text-muted text-sm">/mo</span>
              </div>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <svg
                      className="w-4 h-4 text-success shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/pricing"
                className={`block text-center text-sm font-semibold py-2.5 rounded-xl transition-all duration-300 ${
                  tier.highlight
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_15px_rgba(108,92,231,0.3)] hover:shadow-[0_0_25px_rgba(108,92,231,0.5)]"
                    : "border border-white/10 text-text-primary hover:border-primary/40 hover:text-primary"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="/pricing"
            className="text-secondary hover:text-primary transition-colors text-sm font-medium"
          >
            View Full Pricing &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
