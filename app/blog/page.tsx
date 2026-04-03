"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, ArrowRight, Send } from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/constants";
import GlassCard from "@/components/ui/GlassCard";
import GradientButton from "@/components/ui/GradientButton";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const categoryGradients: Record<string, string> = {
  "SEO Tips": "from-primary to-secondary",
  "Technical SEO": "from-secondary to-primary",
  "Content Marketing": "from-primary to-tertiary",
  "Link Building": "from-tertiary to-secondary",
  "Local SEO": "from-success to-secondary",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredPost = BLOG_POSTS[0];
  const remainingPosts = BLOG_POSTS.slice(1);
  const filteredPosts =
    activeCategory === "All"
      ? remainingPosts
      : remainingPosts.filter((post) => post.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="mesh-blob w-[500px] h-[500px] bg-primary -top-40 -right-40" />
        <div className="mesh-blob w-[300px] h-[300px] bg-secondary top-20 -left-20" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] mb-6">
              SEO Insights &{" "}
              <span className="gradient-text">Resources</span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
              Expert strategies, technical guides, and industry trends to keep
              you ahead of the competition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard
              hover
              glow="primary"
              className="relative overflow-hidden p-0 group cursor-pointer"
            >
              {/* Gradient background */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-10 transition-opacity duration-500 group-hover:opacity-20",
                  categoryGradients[featuredPost.category] ||
                    "from-primary to-secondary"
                )}
              />

              <div className="relative z-10 p-8 md:p-12 lg:p-16">
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-4">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 group-hover:gradient-text transition-all duration-300">
                      {featuredPost.title}
                    </h2>
                    <p className="text-text-muted text-lg mb-6 max-w-2xl">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-text-muted">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="flex flex-wrap gap-2 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {BLOG_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer",
                  activeCategory === category
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "glass text-text-muted hover:text-text-primary hover:border-white/15"
                )}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <GlassCard
                    hover
                    glow="primary"
                    className="h-full flex flex-col p-0 overflow-hidden group cursor-pointer"
                  >
                    {/* Gradient thumbnail */}
                    <div
                      className={cn(
                        "h-48 bg-gradient-to-br relative overflow-hidden",
                        categoryGradients[post.category] ||
                          "from-primary to-secondary"
                      )}
                    >
                      <div className="absolute inset-0 bg-black/30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <span className="inline-block self-start px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold mb-3">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-text-primary mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-text-muted mb-4 line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-text-muted">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-text-muted text-lg">
                No posts found in this category yet. Check back soon!
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="relative rounded-2xl overflow-hidden p-8 md:p-12 lg:p-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/10 to-tertiary/20" />
            <div className="absolute inset-0 glass-strong" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <SectionHeading
                title="Subscribe to Our Newsletter"
                subtitle="Get the latest SEO insights, tips, and strategies delivered straight to your inbox. No spam, ever."
                className="mb-8"
              />

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all"
                />
                <GradientButton type="submit" variant="primary" size="md">
                  <Send className="w-4 h-4 mr-2" />
                  Subscribe
                </GradientButton>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
