"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function ServiceFeatureList({
  features,
  title = "What's Included",
  context,
}: {
  features: string[];
  title?: string;
  context?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 text-center">
          {title}
        </h2>
        {context && (
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            {context}
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3 glass p-4 rounded-xl"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
              <span className="text-text-muted">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
