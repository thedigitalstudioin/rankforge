"use client";

import { motion } from "framer-motion";

interface Metric {
  label: string;
  before: string;
  after: string;
}

export default function CaseStudyMini({
  client,
  industry,
  challenge,
  result,
  metrics,
  testimonialQuote,
}: {
  client: string;
  industry: string;
  challenge: string;
  result: string;
  metrics: Metric[];
  testimonialQuote?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Client Success Story
        </motion.h2>

        <motion.div
          className="glass rounded-2xl overflow-hidden border-t-2 border-t-primary/40"
          style={{
            background:
              "linear-gradient(135deg, rgba(108,92,231,0.05) 0%, rgba(0,210,255,0.03) 100%)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-6 md:p-10">
            {/* Industry badge + client */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary/15 text-secondary border border-secondary/20">
                {industry}
              </span>
              <span className="text-text-muted text-sm">{client}</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Left: challenge + result */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-tertiary font-semibold mb-2 font-[family-name:var(--font-heading)]">
                    The Challenge
                  </h3>
                  <p className="text-text-muted leading-relaxed">{challenge}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-success font-semibold mb-2 font-[family-name:var(--font-heading)]">
                    The Result
                  </h3>
                  <p className="text-text-primary leading-relaxed">{result}</p>
                </div>
              </div>

              {/* Right: metrics */}
              <div className="space-y-4">
                {metrics.map((m, i) => (
                  <motion.div
                    key={i}
                    className="glass rounded-xl p-4 flex items-center justify-between gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  >
                    <div className="text-center flex-1">
                      <p className="text-text-muted text-xs uppercase tracking-wider mb-1">
                        Before
                      </p>
                      <p className="text-lg font-bold text-tertiary font-[family-name:var(--font-heading)]">
                        {m.before}
                      </p>
                    </div>
                    <div className="text-secondary text-xl shrink-0">&rarr;</div>
                    <div className="text-center flex-1">
                      <p className="text-text-muted text-xs uppercase tracking-wider mb-1">
                        After
                      </p>
                      <p className="text-lg font-bold text-success font-[family-name:var(--font-heading)]">
                        {m.after}
                      </p>
                    </div>
                    <p className="text-text-muted text-xs w-full text-center absolute -bottom-0 left-0 hidden">
                      {m.label}
                    </p>
                    <div className="sr-only">{m.label}</div>
                    <p className="text-text-muted text-[11px] shrink-0 max-w-[80px] text-right leading-tight">
                      {m.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Optional quote */}
            {testimonialQuote && (
              <motion.div
                className="mt-8 pt-8 border-t border-white/5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-text-muted italic text-center max-w-2xl mx-auto">
                  <span className="gradient-text text-2xl font-serif">&ldquo;</span>{" "}
                  {testimonialQuote}{" "}
                  <span className="gradient-text text-2xl font-serif">&rdquo;</span>
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
