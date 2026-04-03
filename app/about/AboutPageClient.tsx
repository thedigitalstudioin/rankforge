"use client";

import { motion } from "framer-motion";
import { CheckCircle, Target, Eye } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientButton from "@/components/ui/GradientButton";
import type { TeamMember } from "@/lib/constants";

interface AboutPageClientProps {
  teamMembers: TeamMember[];
  companyValues: { title: string; description: string }[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

const whyChooseUs = [
  "Data-Driven Approach",
  "Transparent Reporting",
  "Proven Track Record",
  "Dedicated Team",
];

export default function AboutPageClient({
  teamMembers,
  companyValues,
}: AboutPageClientProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="mesh-blob w-[500px] h-[500px] bg-primary -top-40 -left-40 absolute" />
        <div className="mesh-blob w-[400px] h-[400px] bg-secondary -bottom-32 -right-32 absolute" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-heading)] gradient-text mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We are a team of search engine obsessives on a mission to help
            businesses achieve unstoppable organic growth.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  RankForge was founded in 2018 with a simple belief: every
                  business deserves access to world-class SEO. What started as a
                  two-person consultancy in a San Francisco co-working space has
                  grown into a powerhouse team of 30+ specialists serving 500+
                  clients across the globe.
                </p>
                <p>
                  Our founder, Alex Rivera, spent over a decade leading SEO at
                  Fortune 500 companies before realizing that the most impactful
                  work happens when you combine enterprise-grade strategy with
                  the agility and dedication of a boutique agency.
                </p>
                <p>
                  Today, RankForge is trusted by startups, scale-ups, and
                  established brands alike. Our data-driven methodology, combined
                  with genuine transparency and a relentless focus on measurable
                  ROI, has earned us a 98% client retention rate.
                </p>
              </div>
            </motion.div>

            {/* Decorative 3D shape */}
            <motion.div
              className="flex items-center justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80"
                style={{ perspective: 800 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-primary/40 bg-gradient-to-br from-primary/10 to-secondary/10"
                  animate={{
                    rotateX: [0, 15, 0, -15, 0],
                    rotateY: [0, -15, 0, 15, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                />
                <motion.div
                  className="absolute inset-6 rounded-2xl border border-secondary/30 bg-gradient-to-tr from-secondary/5 to-tertiary/5"
                  animate={{
                    rotateX: [0, -10, 0, 10, 0],
                    rotateY: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                />
                <motion.div
                  className="absolute inset-12 rounded-xl border border-tertiary/20 bg-gradient-to-bl from-tertiary/5 to-primary/5"
                  animate={{
                    rotateX: [0, 8, 0, -8, 0],
                    rotateY: [0, -8, 0, 8, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl md:text-7xl font-bold font-[family-name:var(--font-heading)] gradient-text">
                    RF
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="h-full" glow="primary">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary">
                    Our Mission
                  </h3>
                </div>
                <p className="text-text-muted leading-relaxed">
                  To democratize world-class SEO by making data-driven search
                  strategies accessible to businesses of every size. We believe
                  organic growth should not be a privilege reserved for companies
                  with massive budgets — it should be an attainable, measurable
                  outcome for anyone willing to invest in their digital presence.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <GlassCard className="h-full" glow="secondary">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-tertiary flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary">
                    Our Vision
                  </h3>
                </div>
                <p className="text-text-muted leading-relaxed">
                  A world where every business can be discovered by the
                  customers who need them most. We envision a search landscape
                  where quality, relevance, and genuine value determine
                  visibility — and we help our clients lead that charge with
                  sustainable, white-hat strategies that stand the test of time.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Meet the Team"
            subtitle="The experts behind every ranking victory."
          />

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {teamMembers.map((member) => (
              <motion.div key={member.name} variants={fadeInUp}>
                <GlassCard className="text-center h-full">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-secondary to-tertiary mx-auto mb-4 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-xl font-bold font-[family-name:var(--font-heading)] text-white">
                      {getInitials(member.name)}
                    </span>
                  </motion.div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-text-primary">
                    {member.name}
                  </h3>
                  <p className="text-sm text-secondary font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do."
          />

          <motion.div
            className="grid sm:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {companyValues.map((value, index) => (
              <motion.div key={value.title} variants={fadeInUp}>
                <GlassCard className="h-full">
                  <span className="text-5xl font-bold font-[family-name:var(--font-heading)] gradient-text-primary opacity-60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-text-primary mt-2 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed text-sm">
                    {value.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Choose Us"
            subtitle="What sets RankForge apart from the rest."
          />

          <motion.div
            className="grid sm:grid-cols-2 gap-6 mt-16 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {whyChooseUs.map((item) => (
              <motion.div
                key={item}
                className="flex items-center gap-4 glass rounded-xl p-5"
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CheckCircle className="w-6 h-6 text-success shrink-0" />
                <span className="text-text-primary font-semibold font-[family-name:var(--font-heading)]">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-16">
            <GradientButton href="/contact" size="lg">
              Work With Us
            </GradientButton>
          </div>
        </div>
      </section>
    </>
  );
}
