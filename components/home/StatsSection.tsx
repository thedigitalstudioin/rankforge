"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function StatsSection() {
  return (
    <section className="relative bg-surface">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {STATS.map((stat) => (
            <GlassCard key={stat.label} hover={false} className="py-8">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals ?? 0}
                label={stat.label}
              />
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
