"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Activity,
  Search,
  Users,
  Link2,
  FileText,
  Zap,
  Globe,
  Target,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import GradientButton from "@/components/ui/GradientButton";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const INDUSTRIES = [
  "E-commerce",
  "SaaS",
  "Healthcare",
  "Finance",
  "Real Estate",
  "Local Business",
  "Other",
];

const CHALLENGES = [
  "Low organic traffic",
  "Poor keyword rankings",
  "Technical issues",
  "Slow site speed",
  "Low conversion rate",
  "Competitor outranking us",
];

const AUDIT_ITEMS = [
  {
    icon: Activity,
    title: "Technical Health Score",
    description:
      "Complete analysis of your site's technical foundation, including Core Web Vitals, crawlability, and indexation.",
  },
  {
    icon: Search,
    title: "Keyword Opportunities",
    description:
      "Discover untapped keywords with high traffic potential and low competition in your niche.",
  },
  {
    icon: Users,
    title: "Competitor Comparison",
    description:
      "See how you stack up against top competitors in rankings, traffic, and backlink authority.",
  },
  {
    icon: Link2,
    title: "Backlink Profile Analysis",
    description:
      "Evaluate your backlink health, identify toxic links, and discover link building opportunities.",
  },
  {
    icon: FileText,
    title: "Content Gaps Identified",
    description:
      "Find content opportunities your competitors are ranking for that you're missing out on.",
  },
  {
    icon: Zap,
    title: "Priority Action Items",
    description:
      "Get a ranked list of high-impact improvements to implement immediately for quick wins.",
  },
];

const STEP_LABELS = ["Website Info", "Your Details", "Goals & Challenges"];

const inputClasses =
  "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all text-sm";

const labelClasses = "block text-sm font-medium text-text-primary mb-1.5";

export default function FreeAuditPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [direction, setDirection] = useState(1);
  const [challenges, setChallenges] = useState<string[]>([]);
  const [auditData, setAuditData] = useState({
    website: "",
    industry: "",
    name: "",
    email: "",
    phone: "",
    goals: "",
  });

  const goNext = async () => {
    if (step < 3) {
      setDirection(1);
      setStep(step + 1);
    } else {
      setLoading(true);
      try {
        await fetch("https://formsubmit.co/ajax/manavgodhani.business@gmail.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            _subject: "New Free Audit Request — RankForge",
            Name: auditData.name,
            Email: auditData.email,
            Phone: auditData.phone,
            Website: auditData.website,
            Industry: auditData.industry,
            Challenges: challenges.join(", ") || "None selected",
            Goals: auditData.goals || "N/A",
            "Form Type": "free-audit",
            _template: "table",
          }),
        });
      } catch {
        // Still show success — form data was likely sent
      }
      setLoading(false);
      setSubmitted(true);
    }
  };

  const goBack = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const toggleChallenge = (challenge: string) => {
    setChallenges((prev) =>
      prev.includes(challenge)
        ? prev.filter((c) => c !== challenge)
        : [...prev, challenge]
    );
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="mesh-blob w-[500px] h-[500px] bg-primary -top-40 -left-40" />
        <div className="mesh-blob w-[400px] h-[400px] bg-secondary -top-20 right-0" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] mb-6">
              Get Your Free{" "}
              <span className="gradient-text">SEO Audit</span> in 24 Hours
            </h1>
            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
              Discover what&apos;s holding your website back and get a clear
              roadmap to improve your search rankings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Multi-Step Form */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="glass rounded-2xl p-8 md:p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="w-24 h-24 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-12 h-12 text-success" />
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
                  Your Audit is on the Way!
                </h2>
                <p className="text-text-muted max-w-md mx-auto mb-6">
                  We&apos;ll send your comprehensive SEO audit within 24 hours.
                  Check your inbox for a confirmation email.
                </p>
                <GradientButton variant="outline" href="/">
                  Back to Home
                </GradientButton>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Progress Bar */}
                <div className="mb-10">
                  <div className="flex items-center justify-between relative">
                    {/* Connecting line */}
                    <div className="absolute top-5 left-0 right-0 h-0.5 bg-white/10" />
                    <div
                      className="absolute top-5 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                      style={{
                        width: `${((step - 1) / 2) * 100}%`,
                      }}
                    />

                    {STEP_LABELS.map((label, i) => {
                      const stepNum = i + 1;
                      const isCompleted = step > stepNum;
                      const isCurrent = step === stepNum;

                      return (
                        <div
                          key={label}
                          className="relative z-10 flex flex-col items-center"
                        >
                          <div
                            className={cn(
                              "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300",
                              isCompleted &&
                                "bg-success text-white",
                              isCurrent &&
                                "bg-primary text-white ring-4 ring-primary/25",
                              !isCompleted &&
                                !isCurrent &&
                                "bg-white/10 text-text-muted"
                            )}
                          >
                            {isCompleted ? (
                              <CheckCircle className="w-5 h-5" />
                            ) : (
                              stepNum
                            )}
                          </div>
                          <span
                            className={cn(
                              "text-xs mt-2 font-medium whitespace-nowrap",
                              isCurrent
                                ? "text-text-primary"
                                : "text-text-muted"
                            )}
                          >
                            {label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Form Steps */}
                <div className="glass rounded-2xl p-6 md:p-8 overflow-hidden">
                  <AnimatePresence mode="wait" custom={direction}>
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="space-y-5"
                      >
                        <div>
                          <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-1">
                            Tell Us About Your Website
                          </h2>
                          <p className="text-sm text-text-muted">
                            We need your website URL and industry to start the
                            audit.
                          </p>
                        </div>

                        <div>
                          <label htmlFor="audit-url" className={labelClasses}>
                            Website URL *
                          </label>
                          <div className="relative">
                            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                            <input
                              id="audit-url"
                              type="url"
                              placeholder="https://yoursite.com"
                              required
                              value={auditData.website}
                              onChange={(e) => setAuditData({ ...auditData, website: e.target.value })}
                              className={inputClasses + " pl-10"}
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="audit-industry"
                            className={labelClasses}
                          >
                            Industry *
                          </label>
                          <select
                            id="audit-industry"
                            required
                            value={auditData.industry}
                            onChange={(e) => setAuditData({ ...auditData, industry: e.target.value })}
                            className={inputClasses}
                          >
                            <option value="" className="bg-surface">
                              Select your industry
                            </option>
                            {INDUSTRIES.map((industry) => (
                              <option
                                key={industry}
                                value={industry}
                                className="bg-surface"
                              >
                                {industry}
                              </option>
                            ))}
                          </select>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="space-y-5"
                      >
                        <div>
                          <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-1">
                            Your Contact Details
                          </h2>
                          <p className="text-sm text-text-muted">
                            So we know where to send your audit report.
                          </p>
                        </div>

                        <div>
                          <label htmlFor="audit-name" className={labelClasses}>
                            Full Name *
                          </label>
                          <input
                            id="audit-name"
                            type="text"
                            placeholder="John Doe"
                            required
                            value={auditData.name}
                            onChange={(e) => setAuditData({ ...auditData, name: e.target.value })}
                            className={inputClasses}
                          />
                        </div>

                        <div>
                          <label htmlFor="audit-email" className={labelClasses}>
                            Email Address *
                          </label>
                          <input
                            id="audit-email"
                            type="email"
                            placeholder="john@company.com"
                            required
                            value={auditData.email}
                            onChange={(e) => setAuditData({ ...auditData, email: e.target.value })}
                            className={inputClasses}
                          />
                        </div>

                        <div>
                          <label htmlFor="audit-phone" className={labelClasses}>
                            Phone Number *
                          </label>
                          <input
                            id="audit-phone"
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={auditData.phone}
                            onChange={(e) => setAuditData({ ...auditData, phone: e.target.value })}
                            required
                            className={inputClasses}
                          />
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="space-y-5"
                      >
                        <div>
                          <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-1">
                            Goals & Challenges
                          </h2>
                          <p className="text-sm text-text-muted">
                            Help us focus the audit on what matters most to you.
                          </p>
                        </div>

                        <div>
                          <p className={labelClasses}>
                            Current Challenges (select all that apply)
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {CHALLENGES.map((challenge) => (
                              <button
                                key={challenge}
                                type="button"
                                onClick={() => toggleChallenge(challenge)}
                                className={cn(
                                  "flex items-center gap-3 p-3 rounded-xl text-sm text-left transition-all duration-200 cursor-pointer",
                                  challenges.includes(challenge)
                                    ? "bg-primary/15 border border-primary/30 text-text-primary"
                                    : "bg-white/5 border border-white/10 text-text-muted hover:border-white/20"
                                )}
                              >
                                <div
                                  className={cn(
                                    "w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 transition-all",
                                    challenges.includes(challenge)
                                      ? "bg-primary"
                                      : "bg-white/10"
                                  )}
                                >
                                  {challenges.includes(challenge) && (
                                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                                  )}
                                </div>
                                {challenge}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label htmlFor="audit-goals" className={labelClasses}>
                            What are your main SEO goals?
                          </label>
                          <textarea
                            id="audit-goals"
                            rows={3}
                            placeholder="E.g., Increase organic traffic by 50%, rank for specific keywords, improve local visibility..."
                            value={auditData.goals}
                            onChange={(e) => setAuditData({ ...auditData, goals: e.target.value })}
                            className={inputClasses + " resize-none"}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                    {step > 1 ? (
                      <button
                        onClick={goBack}
                        className="flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </button>
                    ) : (
                      <div />
                    )}

                    <GradientButton
                      variant="primary"
                      size="md"
                      onClick={goNext}
                      loading={loading}
                    >
                      {step === 3 ? (
                        <>
                          <Target className="w-4 h-4 mr-2" />
                          {loading ? "Submitting..." : "Get My Free Audit"}
                        </>
                      ) : (
                        <>
                          Next
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </GradientButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* What's Included */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            title="What's Included in Your Audit"
            subtitle="A comprehensive analysis covering every aspect of your SEO performance."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {AUDIT_ITEMS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <GlassCard hover glow="primary" className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Banner */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="relative rounded-2xl overflow-hidden p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20" />
            <div className="absolute inset-0 glass-strong" />

            <div className="relative z-10">
              <motion.p
                className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] gradient-text mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                2,000+
              </motion.p>
              <p className="text-lg text-text-muted max-w-md mx-auto">
                Businesses have already received their free audit and started
                dominating search results.
              </p>
              <div className="mt-6">
                <GradientButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Get Your Free Audit Now
                </GradientButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
