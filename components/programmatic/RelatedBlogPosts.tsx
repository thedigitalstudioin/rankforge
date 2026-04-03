"use client";

import { motion } from "framer-motion";

interface Post {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  slug: string;
}

const categoryColors: Record<string, string> = {
  default: "bg-primary/15 text-primary border-primary/20",
  seo: "bg-secondary/15 text-secondary border-secondary/20",
  technical: "bg-tertiary/15 text-tertiary border-tertiary/20",
  strategy: "bg-success/15 text-success border-success/20",
};

function getCategoryStyle(category: string) {
  const key = category.toLowerCase();
  for (const [k, v] of Object.entries(categoryColors)) {
    if (key.includes(k)) return v;
  }
  return categoryColors.default;
}

export default function RelatedBlogPosts({
  posts,
  title,
}: {
  posts: Post[];
  title?: string;
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
          {title || "SEO Insights & Resources"}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post, i) => (
            <motion.a
              key={i}
              href={`/blog/${post.slug}`}
              className="glass rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(108,92,231,0.15)] hover:border-primary/20 flex flex-col"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Category pill */}
              <span
                className={`inline-block self-start text-[11px] font-semibold px-3 py-1 rounded-full border mb-4 ${getCategoryStyle(post.category)}`}
              >
                {post.category}
              </span>

              <h3 className="text-lg font-semibold text-text-primary mb-2 font-[family-name:var(--font-heading)] group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-text-muted text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-xs text-text-muted">
                <span>{post.readTime}</span>
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Read &rarr;
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="/blog"
            className="text-secondary hover:text-primary transition-colors text-sm font-medium"
          >
            View All Articles &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
