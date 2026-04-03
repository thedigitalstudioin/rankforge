"use client";

import { motion } from "framer-motion";

export default function TestimonialSpotlight({
  quote,
  name,
  company,
  role,
  rating,
  metric,
}: {
  quote: string;
  name: string;
  company: string;
  role: string;
  rating: number;
  metric?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          className="glass relative rounded-3xl p-8 md:p-12 text-center border-primary/15 shadow-[0_0_40px_rgba(108,92,231,0.1)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Metric badge */}
          {metric && (
            <motion.div
              className="absolute -top-4 right-6 md:right-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm shadow-[0_0_20px_rgba(108,92,231,0.5)]">
                {metric}
              </span>
            </motion.div>
          )}

          {/* Decorative quotation mark */}
          <div className="gradient-text text-8xl md:text-9xl font-serif leading-none select-none opacity-60 -mb-6 md:-mb-8">
            &ldquo;
          </div>

          {/* Quote */}
          <p className="text-xl md:text-2xl lg:text-3xl text-text-primary italic leading-relaxed mb-8 font-light">
            {quote}
          </p>

          {/* Star rating */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-white/10"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Attribution */}
          <div>
            <p className="text-text-primary font-semibold text-lg font-[family-name:var(--font-heading)]">
              {name}
            </p>
            <p className="text-text-muted text-sm">
              {role}, {company}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
