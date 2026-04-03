"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Quote, ArrowRight } from "lucide-react";
import {
  CASE_STUDIES,
  CASE_STUDY_CATEGORIES,
  type CaseStudy,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const gradientThumbnails = [
  "from-primary via-secondary to-primary",
  "from-secondary via-tertiary to-secondary",
  "from-tertiary via-primary to-tertiary",
  "from-primary via-tertiary to-secondary",
  "from-secondary via-primary to-tertiary",
  "from-tertiary via-secondary to-primary",
];

function ProgressBar({
  label,
  before,
  after,
  index,
}: {
  label: string;
  before: string;
  after: string;
  index: number;
}) {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-text-muted">{label}</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-xs text-text-muted mb-1">Before</div>
          <div className="glass rounded-lg p-3 text-center">
            <span className="text-lg font-bold text-tertiary font-[family-name:var(--font-heading)]">
              {before}
            </span>
          </div>
        </div>
        <div>
          <div className="text-xs text-text-muted mb-1">After</div>
          <div className="relative glass rounded-lg p-3 text-center overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5 + index * 0.15, duration: 0.8, ease: "easeOut" }}
              style={{ originX: 0 }}
            />
            <span className="relative text-lg font-bold text-success font-[family-name:var(--font-heading)]">
              {after}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CaseStudyModal({
  study,
  onClose,
}: {
  study: CaseStudy;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal content */}
      <motion.div
        className="relative glass-strong rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 z-10"
        initial={{ scale: 0.9, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 40 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-text-muted hover:text-text-primary transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            {study.industry}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-text-primary mt-1">
            {study.title}
          </h2>
          <p className="text-text-muted mt-1">
            Client: {study.client} &middot; Timeline: {study.timeline}
          </p>
        </div>

        {/* Key metric */}
        <div className="glass rounded-xl p-4 mb-8 inline-flex items-center gap-3">
          <span className="text-3xl font-bold gradient-text font-[family-name:var(--font-heading)]">
            {study.metric}
          </span>
          <span className="text-sm text-text-muted">{study.metricLabel}</span>
        </div>

        {/* Sections */}
        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-text-primary mb-2">
              Challenge
            </h3>
            <p className="text-text-muted leading-relaxed">{study.challenge}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-text-primary mb-2">
              Strategy
            </h3>
            <p className="text-text-muted leading-relaxed">{study.strategy}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-text-primary mb-2">
              Results
            </h3>
            <p className="text-text-muted leading-relaxed">{study.results}</p>
          </div>
        </div>

        {/* Before / After Stats */}
        <div className="mb-8">
          <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
            Before &amp; After
          </h3>
          {study.stats.map((stat, i) => (
            <ProgressBar
              key={stat.label}
              label={stat.label}
              before={stat.before}
              after={stat.after}
              index={i}
            />
          ))}
        </div>

        {/* Testimonial */}
        <div className="glass rounded-xl p-6 relative">
          <Quote className="w-8 h-8 text-primary/30 absolute top-4 left-4" />
          <p className="text-text-muted italic leading-relaxed pl-8">
            &ldquo;{study.testimonial}&rdquo;
          </p>
          <p className="text-sm text-secondary mt-3 pl-8 font-semibold">
            &mdash; {study.client}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const filteredStudies =
    activeCategory === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((s) => s.category === activeCategory);

  const handleOpen = useCallback((study: CaseStudy) => {
    setSelectedStudy(study);
    document.body.style.overflow = "hidden";
  }, []);

  const handleClose = useCallback(() => {
    setSelectedStudy(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="mesh-blob w-[500px] h-[500px] bg-secondary -top-40 left-1/2 -translate-x-1/2 absolute" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-heading)] gradient-text mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Results Speak Louder
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Real clients. Real data. Real growth. Explore the results we have
            delivered across industries.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {CASE_STUDY_CATEGORIES.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-5 py-2.5 rounded-xl text-sm font-semibold font-[family-name:var(--font-heading)] transition-all duration-300 cursor-pointer",
                    isActive
                      ? "bg-primary text-white glow-primary"
                      : "glass text-text-muted hover:text-text-primary hover:border-white/15"
                  )}
                >
                  {category}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerGrid}
            >
              {filteredStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  variants={fadeInUp}
                  layout
                  transition={{ duration: 0.4 }}
                >
                  <GlassCard className="cursor-pointer group relative overflow-hidden p-0">
                    <div onClick={() => handleOpen(study)}>
                      {/* Gradient thumbnail */}
                      <div
                        className={`relative h-48 bg-gradient-to-br ${gradientThumbnails[index % gradientThumbnails.length]} rounded-t-2xl flex items-center justify-center overflow-hidden`}
                      >
                        <span className="text-4xl font-bold font-[family-name:var(--font-heading)] text-white/20">
                          {study.client}
                        </span>

                        {/* Key metric badge */}
                        <div className="absolute top-3 right-3 glass-strong rounded-lg px-3 py-1.5">
                          <span className="text-sm font-bold text-text-primary font-[family-name:var(--font-heading)]">
                            {study.metric}
                          </span>
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="flex items-center gap-2 text-text-primary font-semibold font-[family-name:var(--font-heading)]">
                            View Details <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="p-6">
                        {/* Industry pill */}
                        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/10 rounded-full px-3 py-1 mb-3">
                          {study.industry}
                        </span>

                        <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-text-primary mb-2">
                          {study.title}
                        </h3>

                        <p className="text-sm text-text-muted line-clamp-2">
                          {study.challenge}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredStudies.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-muted text-lg">
                No case studies found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="Want Results Like These?"
            subtitle="Let's discuss how we can deliver similar growth for your business."
          />
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <CaseStudyModal study={selectedStudy} onClose={handleClose} />
        )}
      </AnimatePresence>
    </>
  );
}
