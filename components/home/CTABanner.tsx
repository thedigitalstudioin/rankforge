"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { CheckCircle } from "lucide-react";
import GradientButton from "@/components/ui/GradientButton";

const FloatingShapes = dynamic(() => import("@/components/3d/FloatingShapes"), {
  ssr: false,
});

const inputClasses =
  "w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all text-sm";

export default function CTABanner() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (!formData.name.trim()) { setError("Full name is required."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { setError("Valid email is required."); return; }
    if (formData.phone.replace(/\D/g, "").length < 10) { setError("Phone must have at least 10 digits."); return; }
    if (!/^https?:\/\//.test(formData.website)) { setError("Website must start with http:// or https://"); return; }

    setLoading(true);
    try {
      await fetch("https://formsubmit.co/ajax/4036c2247fbd93c09537e42d154efe39", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "New CTA Lead — RankForge",
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          Website: formData.website,
          "Form Type": "homepage-cta",
          _template: "table",
        }),
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden rounded-3xl mx-4 md:mx-8 lg:mx-auto lg:max-w-7xl">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-secondary opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,107,0.15),transparent_60%)]" />
      <div className="absolute inset-0 opacity-30">
        <FloatingShapes />
      </div>

      <motion.div
        className="relative z-10 py-20 md:py-28 px-6 md:px-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
          Ready to Outrank Your Competition?
        </h2>
        <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
          Get a free, comprehensive SEO audit and discover untapped opportunities
          to grow your organic traffic.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-white">
            <CheckCircle className="w-6 h-6 text-green-300" />
            <span className="text-lg font-semibold">Thank you! We&apos;ll be in touch within 24 hours.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
            {error && (
              <p className="text-red-300 text-sm">{error}</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Full Name *"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={inputClasses}
              />
              <input
                type="email"
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClasses}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={inputClasses}
              />
              <input
                type="url"
                placeholder="Website URL *"
                required
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className={inputClasses}
              />
            </div>
            <GradientButton
              type="submit"
              variant="secondary"
              size="lg"
              loading={loading}
              className="w-full sm:w-auto animate-pulse-soft"
            >
              Get Your Free Audit
            </GradientButton>
          </form>
        )}
      </motion.div>
    </section>
  );
}
