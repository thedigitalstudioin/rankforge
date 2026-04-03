"use client";

import { motion } from "framer-motion";

interface Fact {
  icon: string;
  fact: string;
}

const accentBorders = [
  "border-primary/25 hover:shadow-[0_0_20px_rgba(108,92,231,0.15)]",
  "border-secondary/25 hover:shadow-[0_0_20px_rgba(0,210,255,0.15)]",
  "border-tertiary/25 hover:shadow-[0_0_20px_rgba(255,107,107,0.15)]",
  "border-success/25 hover:shadow-[0_0_20px_rgba(0,230,118,0.15)]",
];

const accentDots = [
  "from-primary to-primary/40",
  "from-secondary to-secondary/40",
  "from-tertiary to-tertiary/40",
  "from-success to-success/40",
];

export default function DidYouKnow({
  facts,
  location,
}: {
  facts: Fact[];
  location: string;
}) {
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
          Did You Know?{" "}
          <span className="gradient-text">{location}</span> by the Numbers
        </motion.h2>
        <motion.p
          className="text-text-muted text-center mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Key data points that shape the digital landscape.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {facts.map((f, i) => {
            const accent = accentBorders[i % accentBorders.length];
            const dot = accentDots[i % accentDots.length];
            return (
              <motion.div
                key={i}
                className={`glass rounded-xl p-5 transition-all duration-300 border ${accent}`}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="flex items-start gap-3">
                  {/* Decorative dot */}
                  <div className="relative shrink-0">
                    <span className="text-2xl">{f.icon}</span>
                    <div
                      className={`absolute -inset-1 rounded-full bg-gradient-to-br ${dot} opacity-20 blur-sm`}
                    />
                  </div>
                  <p className="text-text-primary text-sm leading-relaxed">
                    {f.fact}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
