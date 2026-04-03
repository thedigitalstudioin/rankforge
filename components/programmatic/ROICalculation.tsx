"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

interface ExpectedReturn {
  metric: string;
  value: string;
}

interface ROICalculationProps {
  serviceName: string;
  location: string;
  investmentRange: string;
  expectedReturns: ExpectedReturn[];
  roiNarrative: string;
}

export default function ROICalculation({
  serviceName,
  location,
  investmentRange,
  expectedReturns,
  roiNarrative,
}: ROICalculationProps) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          The ROI of {serviceName} in{" "}
          <span className="gradient-text">{location}</span>
        </motion.h2>
        <motion.p
          className="text-text-muted text-center mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          What to expect when you invest in a proper strategy.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Investment Card */}
          <motion.div
            className="glass p-8 rounded-2xl border border-primary/10 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="text-text-muted text-sm uppercase tracking-wider mb-2">
              Typical Investment
            </div>
            <div className="text-4xl md:text-5xl font-bold gradient-text font-[family-name:var(--font-heading)] mb-4">
              {investmentRange}
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              This covers strategy development, implementation, ongoing
              optimization, and monthly reporting for {serviceName} in{" "}
              {location}.
            </p>
            <div className="mt-6 flex items-center gap-2 text-primary text-sm font-medium">
              <TrendingUp className="w-4 h-4" />
              <span>Positive ROI typically within 4-6 months</span>
            </div>
          </motion.div>

          {/* Returns Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {expectedReturns.map((ret, i) => (
              <motion.div
                key={i}
                className="glass p-5 rounded-xl text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-text-primary mb-1 font-[family-name:var(--font-heading)] drop-shadow-[0_0_8px_rgba(108,92,231,0.3)]">
                  {ret.value}
                </div>
                <div className="text-text-muted text-xs">{ret.metric}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Narrative */}
        <motion.p
          className="text-text-muted leading-relaxed text-center max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {roiNarrative}
        </motion.p>
      </div>
    </section>
  );
}
