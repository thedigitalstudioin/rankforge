"use client";

import { motion } from "framer-motion";

interface Milestone {
  month: string;
  title: string;
  description: string;
}

interface SuccessBlueprintProps {
  location: string;
  serviceName: string;
  milestones: Milestone[];
}

const milestoneColors = [
  { bg: "from-primary to-primary/60", dot: "bg-primary", glow: "shadow-[0_0_20px_rgba(108,92,231,0.4)]" },
  { bg: "from-secondary to-secondary/60", dot: "bg-secondary", glow: "shadow-[0_0_20px_rgba(0,210,255,0.4)]" },
  { bg: "from-success to-success/60", dot: "bg-success", glow: "shadow-[0_0_20px_rgba(0,230,118,0.4)]" },
  { bg: "from-tertiary to-tertiary/60", dot: "bg-tertiary", glow: "shadow-[0_0_20px_rgba(255,107,107,0.4)]" },
];

export default function SuccessBlueprint({
  location,
  serviceName,
  milestones,
}: SuccessBlueprintProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What {serviceName} Success Looks Like in{" "}
          <span className="gradient-text">{location}</span>
        </motion.h2>
        <motion.p
          className="text-text-muted text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A realistic roadmap of milestones and deliverables over 12 months.
        </motion.p>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting gradient line - desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-success rounded-full opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
            {milestones.map((milestone, i) => {
              const colors = milestoneColors[i % milestoneColors.length];
              return (
                <motion.div
                  key={i}
                  className="relative flex flex-col items-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  {/* Dot on timeline */}
                  <div
                    className={`w-6 h-6 rounded-full ${colors.dot} ${colors.glow} mb-6 relative z-10 ring-4 ring-[#12121A]`}
                  />

                  {/* Card */}
                  <div className="glass p-5 rounded-xl w-full text-center">
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-gradient-to-r ${colors.bg} text-white`}
                    >
                      {milestone.month}
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2 font-[family-name:var(--font-heading)]">
                      {milestone.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
