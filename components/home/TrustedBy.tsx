"use client";

import { motion } from "framer-motion";
import { TRUSTED_COMPANIES } from "@/lib/constants";

export default function TrustedBy() {
  const doubled = [...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES];

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-text-muted text-sm uppercase tracking-widest font-[family-name:var(--font-heading)]">
          Trusted by 500+ brands worldwide
        </p>
      </motion.div>

      <div className="glass rounded-2xl py-8 overflow-hidden">
        <div className="flex animate-marquee w-max">
          {doubled.map((company, i) => (
            <div
              key={`${company}-${i}`}
              className="flex-shrink-0 mx-6 px-6 py-3 glass-strong rounded-full"
            >
              <span className="text-text-muted font-[family-name:var(--font-heading)] font-medium text-sm whitespace-nowrap">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
