"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import GradientButton from "@/components/ui/GradientButton";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient mesh blobs */}
      <div className="mesh-blob w-[600px] h-[600px] bg-primary top-[-10%] left-[-10%] animate-float" />
      <div
        className="mesh-blob w-[500px] h-[500px] bg-secondary bottom-[-5%] right-[-5%] animate-float"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="mesh-blob w-[300px] h-[300px] bg-tertiary top-[40%] right-[20%] animate-float"
        style={{ animationDelay: "-1.5s", opacity: 0.08 }}
      />

      {/* 3D Scene background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Content overlay */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          variants={childVariants}
        >
          <span className="text-text-primary">We Don&apos;t Just Rank.</span>
          <br />
          <span className="gradient-text">We Dominate.</span>
        </motion.h1>

        <motion.div className="mt-6 max-w-2xl mx-auto" variants={childVariants}>
          <p className="text-lg md:text-xl text-text-muted overflow-hidden whitespace-nowrap border-r-2 border-secondary animate-typing w-fit mx-auto">
            Data-driven SEO strategies that deliver measurable results for
            ambitious brands.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={childVariants}
        >
          <GradientButton href="/free-audit" size="lg" variant="secondary">
            Get Free SEO Audit
          </GradientButton>
          <GradientButton href="/case-studies" size="lg" variant="outline">
            See Our Results
          </GradientButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-8 w-8 text-text-muted/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
