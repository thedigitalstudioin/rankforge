"use client";

import { motion } from "framer-motion";

interface Phase {
  period: string;
  title: string;
  activities: string[];
  expectedResults: string;
}

export default function GrowthTimeline({
  serviceName,
  location,
  phases,
}: {
  serviceName: string;
  location: string;
  phases: Phase[];
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
          Your{" "}
          <span className="gradient-text">{serviceName}</span>{" "}
          Growth Journey in {location}
        </motion.h2>
        <motion.p
          className="text-text-muted text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A proven roadmap to sustainable organic growth, month by month.
        </motion.p>

        <div className="relative">
          {/* Gradient connecting line */}
          <div className="absolute left-[23px] md:left-[31px] top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-primary via-secondary to-success opacity-40" />

          <div className="space-y-10">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                className="relative flex gap-5 md:gap-8"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {/* Timeline node */}
                <div className="relative z-10 shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_25px_rgba(108,92,231,0.4)]">
                    <span className="text-white font-bold text-sm md:text-base font-[family-name:var(--font-heading)]">
                      {phase.period.split(" ")[0] || `P${i + 1}`}
                    </span>
                  </div>
                </div>

                {/* Phase card */}
                <div className="glass p-6 md:p-8 rounded-2xl flex-1 hover:border-primary/20 transition-colors duration-300">
                  {/* Period badge */}
                  <div className="inline-block mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-secondary border border-secondary/20">
                      {phase.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-4 font-[family-name:var(--font-heading)]">
                    {phase.title}
                  </h3>

                  {/* Activities */}
                  <ul className="space-y-2 mb-5">
                    {phase.activities.map((activity, j) => (
                      <li key={j} className="flex items-start gap-2 text-text-muted text-sm">
                        <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expected results box */}
                  <div className="rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/15 p-4">
                    <p className="text-sm">
                      <span className="text-success font-semibold">Expected: </span>
                      <span className="text-text-primary">{phase.expectedResults}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
