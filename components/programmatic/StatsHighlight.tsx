"use client";

import { motion } from "framer-motion";

interface Stat {
  value: string;
  label: string;
}

export default function StatsHighlight({
  stats,
  title = "Our Results",
}: {
  stats: Stat[];
  title?: string;
}) {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/50 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-12 text-center">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="glass p-6 rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 font-[family-name:var(--font-heading)]">
                {stat.value}
              </div>
              <div className="text-text-muted text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
