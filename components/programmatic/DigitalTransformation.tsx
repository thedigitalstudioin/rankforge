"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, BarChart3 } from "lucide-react";

interface DigitalTransformationProps {
  location: string;
  digitalMaturity: string;
  internetPenetration: string;
  mobileSearchShare: string;
  narrative: string;
}

export default function DigitalTransformation({
  location,
  digitalMaturity,
  internetPenetration,
  mobileSearchShare,
  narrative,
}: DigitalTransformationProps) {
  const metrics = [
    {
      icon: Globe,
      label: "Internet Penetration",
      value: internetPenetration,
      color: "from-primary to-secondary",
    },
    {
      icon: Smartphone,
      label: "Mobile Search Share",
      value: mobileSearchShare,
      color: "from-secondary to-[#00E676]",
    },
    {
      icon: BarChart3,
      label: "Digital Maturity",
      value: digitalMaturity,
      color: "from-[#FF6B6B] to-[#FF9F43]",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Digital Transformation in{" "}
          <span className="gradient-text">{location}</span>
        </motion.h2>
        <motion.p
          className="text-text-muted text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Understanding the digital landscape to craft the right strategy.
        </motion.p>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={i}
                className="glass p-6 rounded-xl text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div
                  className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-text-primary mb-1 font-[family-name:var(--font-heading)]">
                  {metric.value}
                </div>
                <div className="text-text-muted text-sm">{metric.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Narrative */}
        <motion.div
          className="max-w-3xl mx-auto glass p-8 rounded-2xl border border-white/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-text-muted leading-relaxed text-lg">
            {narrative}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
