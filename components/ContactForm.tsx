"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import GradientButton from "@/components/ui/GradientButton";

const BUDGET_RANGES = [
  "$1K - $2.5K",
  "$2.5K - $5K",
  "$5K - $10K",
  "$10K+",
];

const inputClasses =
  "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all text-sm";

const labelClasses = "block text-sm font-medium text-text-primary mb-1.5";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass rounded-2xl p-8 md:p-10 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-success" />
          </motion.div>
          <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-3">
            Message Sent!
          </h3>
          <p className="text-text-muted max-w-md mx-auto">
            Thank you for reaching out. Our team will get back to you within 24
            hours with a personalized response.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-6 md:p-8 space-y-5"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className={labelClasses}>
                Name *
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                required
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClasses}>
                Email *
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@company.com"
                required
                className={inputClasses}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className={labelClasses}>
                Phone *
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                required
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="company" className={labelClasses}>
                Company *
              </label>
              <input
                id="company"
                type="text"
                placeholder="Your Company"
                required
                className={inputClasses}
              />
            </div>
          </div>

          <div>
            <label htmlFor="website" className={labelClasses}>
              Website URL *
            </label>
            <input
              id="website"
              type="url"
              placeholder="https://yoursite.com"
              required
              className={inputClasses}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="service" className={labelClasses}>
                Service Interested In *
              </label>
              <select id="service" required className={inputClasses}>
                <option value="" className="bg-surface">
                  Select a service
                </option>
                {SERVICES.map((service) => (
                  <option
                    key={service.slug}
                    value={service.title}
                    className="bg-surface"
                  >
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="budget" className={labelClasses}>
                Budget Range *
              </label>
              <select id="budget" required className={inputClasses}>
                <option value="" className="bg-surface">
                  Select budget
                </option>
                {BUDGET_RANGES.map((range) => (
                  <option key={range} value={range} className="bg-surface">
                    {range}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className={labelClasses}>
              Message *
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us about your project and goals..."
              required
              className={inputClasses + " resize-none"}
            />
          </div>

          <GradientButton
            type="submit"
            variant="primary"
            size="lg"
            loading={loading}
            className="w-full"
          >
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </GradientButton>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
