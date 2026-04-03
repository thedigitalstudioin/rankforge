"use client";

import { motion } from "framer-motion";

interface Badge {
  icon: string;
  value: string;
  label: string;
}

export default function TrustBadges({ badges }: { badges: Badge[] }) {
  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4">
        <motion.div
          className="glass rounded-2xl px-4 py-6 md:px-8 md:py-8 overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between gap-6 md:gap-8 min-w-max md:min-w-0">
            {badges.map((badge, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center px-4 md:px-6 relative"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {/* Separator (not on first) */}
                {i > 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-10 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                )}

                <span className="text-2xl mb-2">{badge.icon}</span>
                <span className="text-2xl md:text-3xl font-bold gradient-text font-[family-name:var(--font-heading)]">
                  {badge.value}
                </span>
                <span className="text-text-muted text-xs md:text-sm mt-1">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
