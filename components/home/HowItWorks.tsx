"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.2, ease: "easeOut" as const },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function HowItWorks() {
  return (
    <section className="relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          title="How It Works"
          subtitle="A proven four-step process that turns SEO complexity into measurable growth."
        />

        <div className="relative mt-20">
          {/* Center vertical line */}
          <motion.div
            className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary origin-top"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          />

          <div className="space-y-16 md:space-y-24">
            {PROCESS_STEPS.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  custom={i}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative flex items-start gap-8 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step number (glowing circle) */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="h-12 w-12 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                        <span className="font-[family-name:var(--font-heading)] font-bold text-lg gradient-text-primary">
                          {step.step}
                        </span>
                      </div>
                      {/* Glow ring */}
                      <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-soft blur-md -z-10 scale-150" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                      isEven ? "md:pr-0 md:text-right" : "md:pl-0 md:text-left md:ml-auto"
                    }`}
                  >
                    <div className="glass rounded-2xl p-6">
                      <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-3">
                        {step.title}
                      </h3>
                      <p className="text-text-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
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
