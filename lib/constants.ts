import {
  Search,
  Settings,
  Link2,
  MapPin,
  FileText,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  name: "RankForge",
  tagline: "We Don't Just Rank. We Dominate.",
  description:
    "RankForge is a premium SEO agency helping businesses dominate search rankings with data-driven strategies, technical excellence, and measurable results.",
  url: "https://seo-rankforge.pages.dev",
  email: "hello@rankforge.com",
  phone: "+1 (555) 123-4567",
  address: "123 Digital Drive, Suite 500, San Francisco, CA 94105",
  socials: {
    twitter: "https://twitter.com/rankforge",
    linkedin: "https://linkedin.com/company/rankforge",
    instagram: "https://instagram.com/rankforge",
    facebook: "https://facebook.com/rankforge",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export interface Service {
  icon: LucideIcon;
  title: string;
  slug: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    icon: Search,
    title: "On-Page SEO",
    slug: "on-page-seo",
    shortDesc:
      "Optimize every element on your pages for maximum search visibility.",
    longDesc:
      "We meticulously optimize every on-page element to ensure search engines understand and value your content. From meta tags and keyword placement to internal linking architecture and image optimization, we leave no stone unturned.",
    features: [
      "Meta tag optimization (title, description, headers)",
      "Strategic keyword placement & density analysis",
      "Internal linking architecture",
      "Image optimization with descriptive alt text",
      "Schema markup implementation",
      "Content structure & readability improvements",
    ],
  },
  {
    icon: Settings,
    title: "Technical SEO",
    slug: "technical-seo",
    shortDesc:
      "Ensure your site's foundation is built for search engine excellence.",
    longDesc:
      "A technically sound website is the foundation of any successful SEO strategy. We audit and optimize your site's technical infrastructure to ensure search engines can efficiently crawl, index, and rank your pages.",
    features: [
      "Site speed & Core Web Vitals optimization",
      "Crawlability & indexation improvements",
      "XML sitemaps & robots.txt configuration",
      "Structured data implementation",
      "HTTPS & security audits",
      "Mobile-friendliness optimization",
    ],
  },
  {
    icon: Link2,
    title: "Link Building & Digital PR",
    slug: "link-building",
    shortDesc:
      "Build authority with high-quality backlinks from trusted sources.",
    longDesc:
      "Earning high-quality backlinks remains one of the most powerful ranking factors. Our white-hat link building strategies focus on securing contextual, authoritative links that drive both rankings and referral traffic.",
    features: [
      "High-authority backlink acquisition",
      "Guest posting on industry publications",
      "Broken link building campaigns",
      "HARO & journalist outreach",
      "Competitor backlink analysis & gap filling",
      "Toxic link identification & disavowal",
    ],
  },
  {
    icon: MapPin,
    title: "Local SEO",
    slug: "local-seo",
    shortDesc:
      "Dominate local search results and Google Maps in your area.",
    longDesc:
      "For businesses serving local customers, appearing in the map pack and local search results is critical. We optimize your local presence across every touchpoint to ensure you're found by customers in your area.",
    features: [
      "Google Business Profile optimization",
      "Local citation building & NAP consistency",
      "Review generation & management strategy",
      "Local keyword targeting & content",
      "Map pack ranking optimization",
      "Hyperlocal landing page creation",
    ],
  },
  {
    icon: FileText,
    title: "Content Strategy & Marketing",
    slug: "content-strategy",
    shortDesc:
      "Create content that ranks, engages, and converts your audience.",
    longDesc:
      "Content is the fuel that powers SEO. We develop comprehensive content strategies built on keyword research, topic authority, and user intent to create content that ranks well and drives meaningful business results.",
    features: [
      "In-depth keyword research & mapping",
      "Editorial calendar development",
      "SEO-optimized blog & article writing",
      "Pillar page & topic cluster strategy",
      "Content audits & optimization",
      "E-E-A-T authority building",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "SEO Audits & Consulting",
    slug: "seo-audit",
    shortDesc:
      "Get a comprehensive roadmap to improve your search performance.",
    longDesc:
      "Our thorough SEO audits uncover every opportunity and issue affecting your search performance. Combined with expert consulting, we deliver actionable roadmaps that prioritize high-impact improvements.",
    features: [
      "Comprehensive 200+ point site audits",
      "Competitor analysis & benchmarking",
      "Keyword gap analysis",
      "Technical health scoring & reporting",
      "Monthly strategy sessions",
      "Custom SEO roadmap development",
    ],
  },
];

export const STATS = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 3.2, suffix: "M+", label: "Keywords Ranked", decimals: 1 },
  { value: 850, suffix: "%", label: "Average Traffic Growth" },
  { value: 98, suffix: "%", label: "Client Retention Rate" },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery & Audit",
    description:
      "We start with a deep dive into your business, competitors, and current search landscape. Our comprehensive audit identifies every opportunity and obstacle.",
  },
  {
    step: 2,
    title: "Strategy Blueprint",
    description:
      "Based on our findings, we craft a customized SEO strategy with clear milestones, KPIs, and a prioritized action plan designed for maximum impact.",
  },
  {
    step: 3,
    title: "Execute & Optimize",
    description:
      "Our team implements the strategy across technical SEO, content, and link building — continuously testing, measuring, and optimizing for better results.",
  },
  {
    step: 4,
    title: "Report & Scale",
    description:
      "Transparent reporting shows real ROI. As results compound, we scale what works and explore new growth opportunities to keep you ahead.",
  },
];

export interface Testimonial {
  name: string;
  company: string;
  role: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Chen",
    company: "Luxe Fashion Co.",
    role: "VP of Marketing",
    quote:
      "RankForge transformed our organic presence. We went from page 3 to dominating the top 3 positions for our most valuable keywords. The ROI has been incredible.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    company: "TechScale SaaS",
    role: "CEO",
    quote:
      "In 6 months, our organic traffic grew from nearly zero to 50K monthly visitors. RankForge's strategic approach to content and technical SEO was a game-changer.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    company: "Bright Smile Dental",
    role: "Practice Owner",
    quote:
      "We now rank #1 in Google Maps for 15 of our target keywords. The phone hasn't stopped ringing since we started working with RankForge.",
    rating: 5,
  },
  {
    name: "David Park",
    company: "FinanceHub",
    role: "Head of Growth",
    quote:
      "RankForge helped us reach 2M monthly pageviews through a brilliant content strategy. Their understanding of E-E-A-T in the finance space is unmatched.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    company: "HealthFirst Portal",
    role: "Digital Director",
    quote:
      "A 500% increase in organic leads within a year. RankForge understood our complex healthcare compliance requirements and delivered results that exceeded expectations.",
    rating: 5,
  },
];

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  metric: string;
  metricLabel: string;
  challenge: string;
  strategy: string;
  results: string;
  timeline: string;
  testimonial: string;
  stats: { label: string; before: string; after: string }[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "luxe-fashion",
    title: "E-Commerce Fashion Brand",
    client: "Luxe Fashion Co.",
    industry: "E-commerce",
    category: "E-commerce",
    metric: "+340%",
    metricLabel: "Traffic Growth",
    challenge:
      "Luxe Fashion Co. was struggling with poor organic visibility despite having a premium product line. Their site had severe technical issues, thin content, and virtually no backlink profile.",
    strategy:
      "We implemented a three-pronged approach: complete technical overhaul including Core Web Vitals optimization, a comprehensive content strategy with seasonal product guides, and an aggressive but white-hat link building campaign targeting fashion publications.",
    results:
      "Within 8 months, organic traffic grew by 340%, revenue from organic search increased by 280%, and the brand now ranks in the top 3 for over 200 high-value fashion keywords.",
    timeline: "8 months",
    testimonial:
      "RankForge transformed our organic presence completely. The results speak for themselves.",
    stats: [
      { label: "Monthly Organic Traffic", before: "12,000", after: "52,800" },
      { label: "Ranking Keywords", before: "45", after: "380" },
      { label: "Monthly Revenue (SEO)", before: "$18K", after: "$68K" },
    ],
  },
  {
    id: "techscale-saas",
    title: "SaaS Startup Growth",
    client: "TechScale SaaS",
    industry: "Technology",
    category: "SaaS",
    metric: "0→50K",
    metricLabel: "Monthly Visitors",
    challenge:
      "As a new SaaS startup, TechScale had zero organic presence and was entirely dependent on paid acquisition, making their CAC unsustainable.",
    strategy:
      "We built their SEO from the ground up with a topic cluster strategy targeting bottom-of-funnel keywords, product-led content, and strategic link building through SaaS review sites and tech publications.",
    results:
      "From zero organic traffic to 50K monthly visitors in 12 months, with a 65% reduction in overall CAC as organic became their primary acquisition channel.",
    timeline: "12 months",
    testimonial:
      "RankForge built our entire organic engine from scratch. Best investment we've made.",
    stats: [
      { label: "Monthly Organic Traffic", before: "0", after: "50,000" },
      { label: "Demo Requests (Organic)", before: "0", after: "320/mo" },
      { label: "Customer Acquisition Cost", before: "$280", after: "$95" },
    ],
  },
  {
    id: "bright-smile",
    title: "Local Dental Clinic Domination",
    client: "Bright Smile Dental",
    industry: "Healthcare",
    category: "Local Business",
    metric: "#1 Maps",
    metricLabel: "15 Keywords",
    challenge:
      "Bright Smile was invisible in local search results, losing patients to competitors with stronger online presences despite offering superior care.",
    strategy:
      "Complete local SEO overhaul including Google Business Profile optimization, local citation cleanup, review generation strategy, and hyperlocal content creation targeting neighborhood-specific keywords.",
    results:
      "Now ranking #1 in Google Maps for 15 primary keywords, with a 200% increase in new patient inquiries from organic search within 6 months.",
    timeline: "6 months",
    testimonial:
      "The phone hasn't stopped ringing since we started with RankForge.",
    stats: [
      { label: "Google Maps Rankings (#1)", before: "0", after: "15" },
      { label: "Monthly Patient Inquiries", before: "25", after: "78" },
      { label: "Google Reviews", before: "23", after: "156" },
    ],
  },
  {
    id: "healthfirst",
    title: "Healthcare Portal Lead Generation",
    client: "HealthFirst Portal",
    industry: "Healthcare",
    category: "Healthcare",
    metric: "+500%",
    metricLabel: "Organic Leads",
    challenge:
      "HealthFirst needed to grow organic leads while navigating strict healthcare content compliance requirements and YMYL (Your Money Your Life) scrutiny.",
    strategy:
      "We focused on E-E-A-T optimization by leveraging their medical advisory board for content, building authoritative backlinks from health institutions, and creating a comprehensive resource library.",
    results:
      "500% increase in organic leads within 12 months, with the site becoming a recognized authority in their healthcare niche.",
    timeline: "12 months",
    testimonial:
      "RankForge understood our compliance needs and still delivered incredible results.",
    stats: [
      { label: "Monthly Organic Leads", before: "45", after: "270" },
      { label: "Domain Authority", before: "22", after: "51" },
      { label: "Indexed Pages", before: "80", after: "450" },
    ],
  },
  {
    id: "financehub",
    title: "Finance Blog to 2M Pageviews",
    client: "FinanceHub",
    industry: "Finance",
    category: "Finance",
    metric: "2M",
    metricLabel: "Monthly Pageviews",
    challenge:
      "FinanceHub wanted to become a top-tier financial content destination but was competing against established players with decades of authority.",
    strategy:
      "We developed a content velocity strategy combined with topical authority building, programmatic SEO for financial data pages, and partnerships with financial institutions for credibility signals.",
    results:
      "Reached 2M monthly pageviews within 18 months, with the site becoming a go-to resource for personal finance information.",
    timeline: "18 months",
    testimonial:
      "RankForge's content strategy turned us into a finance authority.",
    stats: [
      { label: "Monthly Pageviews", before: "85,000", after: "2,000,000" },
      { label: "Ranking Keywords", before: "500", after: "12,000" },
      { label: "Ad Revenue (Monthly)", before: "$3,200", after: "$45,000" },
    ],
  },
  {
    id: "prime-realty",
    title: "Real Estate Lead Explosion",
    client: "Prime Realty Group",
    industry: "Real Estate",
    category: "Local Business",
    metric: "+200%",
    metricLabel: "Qualified Leads",
    challenge:
      "Prime Realty was losing market share to competitors with aggressive digital strategies while relying on traditional marketing methods.",
    strategy:
      "We built a neighborhood-focused content strategy, optimized for hyperlocal real estate keywords, implemented IDX-integrated SEO, and created data-driven market report pages that earned natural backlinks.",
    results:
      "200% increase in qualified leads from organic search, with the agency becoming the top-ranked result for key neighborhood searches.",
    timeline: "10 months",
    testimonial:
      "RankForge made us the go-to digital presence in our market.",
    stats: [
      { label: "Monthly Qualified Leads", before: "30", after: "92" },
      { label: "Organic Traffic", before: "5,000", after: "28,000" },
      { label: "Cost Per Lead", before: "$85", after: "$22" },
    ],
  },
];

export const CASE_STUDY_CATEGORIES = [
  "All",
  "E-commerce",
  "SaaS",
  "Local Business",
  "Healthcare",
  "Finance",
];

export interface PricingTier {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  popular: boolean;
  features: string[];
  cta: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    monthlyPrice: 999,
    annualPrice: 799,
    description: "Perfect for small businesses starting their SEO journey.",
    popular: false,
    features: [
      "Up to 30 keywords tracked",
      "On-page SEO optimization",
      "Monthly reporting",
      "Basic link building (5 links/mo)",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    monthlyPrice: 2499,
    annualPrice: 1999,
    description: "For growing businesses ready to scale their organic presence.",
    popular: true,
    features: [
      "Up to 100 keywords tracked",
      "Full on-page + technical SEO",
      "Weekly reporting + strategy calls",
      "Advanced link building (15 links/mo)",
      "Content strategy + 4 blog posts/mo",
      "Priority support",
      "Local SEO included",
    ],
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    monthlyPrice: 4999,
    annualPrice: 3999,
    description: "Full-service SEO for established brands demanding results.",
    popular: false,
    features: [
      "Unlimited keywords tracked",
      "Full-service SEO + content",
      "Dedicated account manager",
      "Daily monitoring & reporting",
      "30+ premium backlinks/mo",
      "Custom strategy & consulting",
      "24/7 priority support",
      "Quarterly business reviews",
    ],
    cta: "Contact Sales",
  },
];

export const FAQ_ITEMS = [
  {
    question: "How long does it take to see SEO results?",
    answer:
      "SEO is a long-term strategy, and timelines vary based on competition, domain authority, and current site health. Most clients see measurable improvements within 3-6 months, with significant results typically appearing at the 6-12 month mark. We set realistic expectations upfront and provide monthly progress reports.",
  },
  {
    question: "What's included in your monthly reporting?",
    answer:
      "Our reports cover keyword rankings, organic traffic trends, backlink profile growth, technical health scores, content performance, and ROI metrics. Growth and Enterprise plans also include strategy recommendations and competitive analysis. Reports are delivered via a live dashboard plus monthly summary emails.",
  },
  {
    question: "Can I switch plans or cancel anytime?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. We require a 3-month minimum commitment to allow our strategies time to show results. After that, you can cancel with 30 days notice. No long-term contracts or hidden cancellation fees.",
  },
  {
    question: "Do you guarantee first-page rankings?",
    answer:
      "No ethical SEO agency can guarantee specific rankings, as search algorithms are controlled by Google. What we do guarantee is a data-driven approach, transparent reporting, and a proven methodology that has delivered results for 500+ clients. Our 98% client retention rate speaks to our track record.",
  },
  {
    question: "What makes RankForge different from other SEO agencies?",
    answer:
      "We combine deep technical expertise with creative content strategy and genuine relationship-based link building. Unlike agencies that use templated approaches, every strategy we create is custom-built for your business, industry, and competitive landscape. Plus, our team has an average of 8+ years of experience.",
  },
  {
    question: "Do you work with businesses in specific industries?",
    answer:
      "We work across all industries but have particular expertise in e-commerce, SaaS, healthcare, finance, and local services. Our team understands the unique challenges and compliance requirements of each sector, especially YMYL (Your Money Your Life) niches that require extra attention to E-E-A-T.",
  },
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "on-page-seo-factors-2026",
    title: "10 On-Page SEO Factors That Actually Move the Needle in 2026",
    excerpt:
      "Forget outdated advice. Here are the on-page SEO factors that genuinely impact rankings today, backed by data from analyzing 10,000+ top-ranking pages.",
    category: "SEO Tips",
    readTime: "8 min read",
    date: "Mar 28, 2026",
  },
  {
    id: "core-web-vitals-checklist",
    title:
      "Core Web Vitals: The Technical SEO Checklist Every Developer Needs",
    excerpt:
      "A comprehensive, developer-friendly checklist for optimizing Core Web Vitals — from LCP and FID to CLS — with real code examples and tools.",
    category: "Technical SEO",
    readTime: "12 min read",
    date: "Mar 21, 2026",
  },
  {
    id: "link-building-strategies",
    title:
      "Link Building Strategies That Work (And 5 That Will Get You Penalized)",
    excerpt:
      "Not all backlinks are created equal. Learn which link building tactics drive real results and which ones could tank your rankings overnight.",
    category: "Link Building",
    readTime: "10 min read",
    date: "Mar 14, 2026",
  },
  {
    id: "local-seo-2026",
    title: "Local SEO in 2026: How to Dominate Google Maps and Local Pack",
    excerpt:
      "The local SEO landscape has evolved dramatically. Here's your complete guide to ranking in the map pack and capturing local search traffic.",
    category: "Local SEO",
    readTime: "9 min read",
    date: "Mar 7, 2026",
  },
  {
    id: "eeat-content-strategy",
    title: "E-E-A-T and Your Content Strategy: Building Topical Authority",
    excerpt:
      "Google's E-E-A-T framework is more important than ever. Learn how to demonstrate Experience, Expertise, Authoritativeness, and Trustworthiness.",
    category: "Content Marketing",
    readTime: "11 min read",
    date: "Feb 28, 2026",
  },
  {
    id: "seo-audit-checklist",
    title:
      "SEO Audit Checklist: 50 Points to Review Before Launching Any Website",
    excerpt:
      "Don't launch without checking these 50 critical SEO elements. From technical foundations to content optimization, this checklist covers everything.",
    category: "SEO Tips",
    readTime: "15 min read",
    date: "Feb 21, 2026",
  },
];

export const BLOG_CATEGORIES = [
  "All",
  "SEO Tips",
  "Technical SEO",
  "Content Marketing",
  "Link Building",
  "Local SEO",
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Alex Rivera",
    role: "Founder & CEO",
    bio: "15+ years in digital marketing. Former Head of SEO at a Fortune 500 tech company. Passionate about data-driven growth strategies.",
  },
  {
    name: "Priya Patel",
    role: "Head of Technical SEO",
    bio: "Full-stack developer turned SEO specialist. Expert in Core Web Vitals, site architecture, and structured data implementation.",
  },
  {
    name: "James Chen",
    role: "Director of Content Strategy",
    bio: "Former journalist with a knack for turning complex topics into ranking content. Has driven 10M+ organic visits across client portfolios.",
  },
  {
    name: "Sofia Andersson",
    role: "Link Building Lead",
    bio: "Digital PR specialist with relationships at 500+ publications. Known for creative outreach campaigns that earn authoritative backlinks.",
  },
  {
    name: "Omar Hassan",
    role: "Analytics & Reporting Lead",
    bio: "Data scientist who speaks the language of SEO. Builds custom dashboards and attribution models that prove ROI beyond vanity metrics.",
  },
  {
    name: "Maria Santos",
    role: "Local SEO Specialist",
    bio: "Google Business Profile expert who has helped 200+ local businesses dominate their markets. Certified in Google Analytics and Ads.",
  },
];

export const COMPANY_VALUES = [
  {
    title: "Data Over Opinions",
    description:
      "Every recommendation we make is backed by data. We test, measure, and iterate — never relying on gut feelings or outdated best practices.",
  },
  {
    title: "Radical Transparency",
    description:
      "No black boxes. You'll always know exactly what we're doing, why we're doing it, and how it's performing. Our dashboards are always open.",
  },
  {
    title: "Sustainable Growth",
    description:
      "We don't chase shortcuts or quick wins that risk your site. Our strategies build compounding, sustainable organic growth that lasts.",
  },
  {
    title: "Partnership Mindset",
    description:
      "We're not a vendor — we're an extension of your team. Your goals are our goals, and we're invested in your long-term success.",
  },
];

export const TRUSTED_COMPANIES = [
  "TechCorp",
  "CloudBase",
  "DataFlow",
  "NexGen",
  "Velocity",
  "Quantum AI",
  "SkyPeak",
  "BlueWave",
  "CoreStack",
  "PulseDigital",
];
