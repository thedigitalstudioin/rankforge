"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import GradientButton from "@/components/ui/GradientButton";

const FloatingShapes = dynamic(() => import("@/components/3d/FloatingShapes"), {
  ssr: false,
});

export default function CTABanner() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative overflow-hidden rounded-3xl mx-4 md:mx-8 lg:mx-auto lg:max-w-7xl">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-secondary opacity-90" />

      {/* Subtle mesh overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,107,0.15),transparent_60%)]" />

      {/* 3D shapes background */}
      <div className="absolute inset-0 opacity-30">
        <FloatingShapes />
      </div>

      {/* Content */}
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

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full sm:flex-1 px-5 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all"
          />
          <GradientButton
            type="submit"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto animate-pulse-soft"
          >
            Get Started
          </GradientButton>
        </form>
      </motion.div>
    </section>
  );
}
