"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Comparison {
  metric: string;
  before: string;
  after: string;
}

interface BeforeAfterComparisonProps {
  title?: string;
  comparisons: Comparison[];
}

export default function BeforeAfterComparison({
  title,
  comparisons,
}: BeforeAfterComparisonProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title || "Before & After: Real Client Results"}
        </motion.h2>
        <motion.p
          className="text-text-muted text-center mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Measurable improvements that speak for themselves.
        </motion.p>

        <div className="space-y-5">
          {comparisons.map((comparison, i) => (
            <motion.div
              key={i}
              className="glass rounded-xl p-5 md:p-6"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Metric label */}
              <div className="text-text-muted text-sm uppercase tracking-wider mb-4 text-center font-medium">
                {comparison.metric}
              </div>

              <div className="flex items-center gap-4 md:gap-6">
                {/* Before */}
                <div className="flex-1 text-center p-4 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="text-xs text-text-muted uppercase tracking-wider mb-2 opacity-60">
                    Before
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-text-muted/60 font-[family-name:var(--font-heading)]">
                    {comparison.before}
                  </div>
                </div>

                {/* Arrow */}
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-[0_0_15px_rgba(108,92,231,0.3)]">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* After */}
                <div className="flex-1 text-center p-4 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
                  <div className="text-xs text-secondary uppercase tracking-wider mb-2">
                    After
                  </div>
                  <div className="text-xl md:text-2xl font-bold gradient-text font-[family-name:var(--font-heading)]">
                    {comparison.after}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
