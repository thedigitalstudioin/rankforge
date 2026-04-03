"use client";

import { motion } from "framer-motion";

interface Step {
  title: string;
  description: string;
}

export default function ProcessTimeline({
  steps,
  title = "Our Process",
  context,
}: {
  steps: Step[];
  title?: string;
  context?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 text-center">
          {title}
        </h2>
        {context && (
          <p className="text-text-muted text-center mb-12">{context}</p>
        )}

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-tertiary opacity-30" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="relative flex gap-6 md:gap-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Step number */}
                <div className="relative z-10 shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_20px_rgba(108,92,231,0.3)]">
                  <span className="text-white font-bold text-lg md:text-xl">
                    {i + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="glass p-5 rounded-xl flex-1">
                  <h3 className="text-lg font-semibold text-text-primary mb-2 font-[family-name:var(--font-heading)]">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
