import type { ServiceContentData } from "./types";

export const SERVICE_CONTENT: ServiceContentData[] = [
  {
    slug: "on-page-seo",
    title: "On-Page SEO",
    shortTitle: "On-Page SEO",
    metaKeyword: "on-page SEO services",
    features: [
      "Title tag optimization with targeted keywords",
      "Meta description writing for higher click-through rates",
      "Header tag hierarchy (H1-H6) structuring",
      "Strategic keyword placement and density analysis",
      "Internal linking architecture optimization",
      "Image optimization with descriptive alt text",
      "Schema markup implementation",
      "Content structure and readability improvements",
      "URL structure optimization",
      "Page speed recommendations",
    ],
    processSteps: [
      {
        title: "Comprehensive Page Audit",
        description:
          "We analyze every on-page element across your site — title tags, meta descriptions, headers, content quality, keyword usage, and internal links — to identify optimization opportunities.",
      },
      {
        title: "Keyword Research & Mapping",
        description:
          "We conduct thorough keyword research and map primary, secondary, and long-tail keywords to each page based on search intent and competitive opportunity.",
      },
      {
        title: "Content Optimization",
        description:
          "Our team rewrites and enhances page content, ensuring proper keyword placement, optimal readability scores, and alignment with Google's E-E-A-T guidelines.",
      },
      {
        title: "Technical On-Page Fixes",
        description:
          "We implement schema markup, optimize images, fix broken internal links, improve URL structures, and ensure every technical on-page element is properly configured.",
      },
      {
        title: "Monitoring & Iteration",
        description:
          "We continuously track rankings, click-through rates, and engagement metrics to refine on-page elements and maintain competitive positioning.",
      },
    ],
    includedItems: [
      "Title tag optimization",
      "Meta description writing",
      "Header tag structuring",
      "Keyword placement strategy",
      "Internal linking optimization",
      "Image alt text optimization",
      "Schema markup implementation",
      "Content readability improvements",
      "URL structure optimization",
      "Monthly on-page reporting",
    ],
    stats: [
      { value: "45%", label: "Average CTR Increase" },
      { value: "3x", label: "Keyword Visibility Growth" },
      { value: "200+", label: "Pages Optimized Monthly" },
      { value: "89%", label: "Client Satisfaction Rate" },
    ],
    faqPool: [
      {
        question: "What exactly is on-page SEO?",
        answer:
          "On-page SEO refers to optimizing individual web pages to rank higher in search engines. This includes optimizing content, HTML source code, meta tags, headers, images, internal links, and schema markup — everything that exists on the page itself.",
      },
      {
        question: "How long does it take for on-page SEO changes to take effect?",
        answer:
          "Most on-page SEO improvements begin showing results within 2-8 weeks after implementation, depending on how frequently search engines crawl your site and the competitiveness of your target keywords.",
      },
      {
        question: "How is on-page SEO different from off-page SEO?",
        answer:
          "On-page SEO focuses on elements you control directly on your website — content, meta tags, structure, and technical elements. Off-page SEO involves external factors like backlinks, social signals, and brand mentions that influence your authority.",
      },
      {
        question: "Do you rewrite existing content or create new pages?",
        answer:
          "We do both depending on the situation. Existing high-potential pages get optimized and enhanced, while content gaps are filled with new, strategically targeted pages built around keyword opportunities.",
      },
      {
        question: "How often should on-page SEO be updated?",
        answer:
          "We recommend reviewing and updating on-page elements quarterly at minimum, with continuous monitoring of ranking changes. Search algorithms evolve constantly, and your competitors are always optimizing.",
      },
      {
        question: "What tools do you use for on-page SEO analysis?",
        answer:
          "We use a combination of industry-leading tools including Screaming Frog, Ahrefs, SEMrush, Google Search Console, and our proprietary analysis frameworks to identify and prioritize on-page optimization opportunities.",
      },
      {
        question: "Can on-page SEO alone improve my rankings?",
        answer:
          "On-page SEO is foundational and can deliver significant improvements, especially for less competitive keywords. However, for maximum results in competitive markets, we recommend combining on-page optimization with technical SEO, content strategy, and link building.",
      },
      {
        question: "How do you measure on-page SEO success?",
        answer:
          "We track keyword rankings, organic traffic, click-through rates from search results, bounce rates, time on page, and conversion rates. Monthly reports show exactly how each optimization impacts your business metrics.",
      },
      {
        question: "What is E-E-A-T and how does it relate to on-page SEO?",
        answer:
          "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. Google uses these quality signals to evaluate content. Our on-page optimization ensures your content demonstrates these qualities through proper author attribution, citations, and content depth.",
      },
      {
        question: "Do you optimize for voice search as part of on-page SEO?",
        answer:
          "Yes, voice search optimization is integrated into our on-page strategy. We structure content with conversational long-tail keywords, implement FAQ schema, and ensure featured snippet optimization for voice-friendly results.",
      },
    ],
  },
  {
    slug: "technical-seo",
    title: "Technical SEO",
    shortTitle: "Technical SEO",
    metaKeyword: "technical SEO services",
    features: [
      "Site speed and Core Web Vitals optimization",
      "Crawlability and indexation improvements",
      "XML sitemap creation and management",
      "Robots.txt configuration",
      "Structured data implementation",
      "HTTPS and security audits",
      "Mobile-friendliness optimization",
      "Duplicate content resolution",
      "Canonical tag management",
      "JavaScript rendering optimization",
    ],
    processSteps: [
      {
        title: "Technical Health Assessment",
        description:
          "We run a comprehensive crawl of your entire site to identify technical issues affecting search visibility — from broken links and redirect chains to rendering problems and indexation gaps.",
      },
      {
        title: "Core Web Vitals Audit",
        description:
          "We analyze your site's loading performance, interactivity, and visual stability metrics to identify specific bottlenecks impacting both user experience and search rankings.",
      },
      {
        title: "Architecture Optimization",
        description:
          "We restructure your site's URL hierarchy, internal linking, XML sitemaps, and navigation to help search engines crawl and understand your content more efficiently.",
      },
      {
        title: "Implementation & Fixes",
        description:
          "Our engineering team implements all technical fixes — from server-side optimizations and caching strategies to structured data markup and canonical tag management.",
      },
      {
        title: "Ongoing Monitoring",
        description:
          "We set up automated monitoring for crawl errors, index coverage, Core Web Vitals regressions, and security issues to catch and resolve problems before they impact rankings.",
      },
    ],
    includedItems: [
      "Core Web Vitals optimization",
      "Crawl budget optimization",
      "XML sitemap management",
      "Robots.txt configuration",
      "Structured data markup",
      "HTTPS migration support",
      "Mobile optimization",
      "Page speed optimization",
      "Redirect management",
      "Monthly technical reports",
    ],
    stats: [
      { value: "62%", label: "Average Speed Improvement" },
      { value: "95+", label: "Lighthouse Score Target" },
      { value: "40%", label: "Crawl Efficiency Gain" },
      { value: "150+", label: "Technical Audits Completed" },
    ],
    faqPool: [
      {
        question: "What is technical SEO and why does it matter?",
        answer:
          "Technical SEO encompasses the server and site-level optimizations that help search engines crawl, index, and render your website effectively. Without solid technical foundations, even the best content can struggle to rank.",
      },
      {
        question: "What are Core Web Vitals and how do you optimize them?",
        answer:
          "Core Web Vitals are Google's metrics for page experience: Largest Contentful Paint (loading), First Input Delay (interactivity), and Cumulative Layout Shift (visual stability). We optimize through image compression, code splitting, lazy loading, and server-side improvements.",
      },
      {
        question: "How do you handle site migrations without losing rankings?",
        answer:
          "We follow a rigorous migration protocol including comprehensive URL mapping, 301 redirect implementation, sitemap updates, and post-migration monitoring. Our process has maintained 95%+ traffic through migrations.",
      },
      {
        question: "Can technical SEO help with JavaScript-heavy websites?",
        answer:
          "Absolutely. We specialize in optimizing JavaScript frameworks (React, Next.js, Angular) for search engines, implementing server-side rendering, dynamic rendering, or hybrid approaches based on your architecture.",
      },
      {
        question: "How often should a technical SEO audit be performed?",
        answer:
          "We recommend comprehensive technical audits quarterly, with automated monitoring running continuously. Major site changes, redesigns, or platform migrations should always trigger an immediate audit.",
      },
      {
        question: "What is crawl budget and why should I care?",
        answer:
          "Crawl budget is the number of pages search engines will crawl on your site within a given timeframe. For large sites, optimizing crawl budget ensures your most important pages get discovered and indexed promptly.",
      },
      {
        question: "Do you help with international SEO technical setup?",
        answer:
          "Yes, we implement hreflang tags, country-specific domain strategies, CDN configuration, and geo-targeting setup to ensure your international sites are properly recognized by search engines.",
      },
      {
        question: "How do you fix indexation issues?",
        answer:
          "We identify the root cause — whether it's crawl errors, noindex tags, canonical issues, or thin content — then implement targeted fixes and request re-indexing through Google Search Console.",
      },
      {
        question: "What happens if my site speed is slow?",
        answer:
          "Slow sites lose rankings and visitors — 53% of mobile users abandon sites that take over 3 seconds to load. We optimize server response times, images, code, and caching to achieve sub-2-second load times.",
      },
      {
        question: "Can you help with structured data and rich snippets?",
        answer:
          "We implement all relevant schema markup types — FAQ, HowTo, Product, LocalBusiness, Organization, and more — to help your pages earn rich snippets and enhanced SERP features that boost click-through rates.",
      },
    ],
  },
  {
    slug: "link-building",
    title: "Link Building & Digital PR",
    shortTitle: "Link Building",
    metaKeyword: "link building services",
    features: [
      "High-authority backlink acquisition",
      "Guest posting on industry publications",
      "Broken link building campaigns",
      "HARO and journalist outreach",
      "Competitor backlink analysis",
      "Toxic link identification and disavowal",
      "Digital PR campaign creation",
      "Resource page link building",
      "Niche-relevant directory submissions",
      "Link velocity management",
    ],
    processSteps: [
      {
        title: "Backlink Profile Analysis",
        description:
          "We analyze your existing backlink profile and your competitors' to identify gaps, opportunities, and toxic links that need to be addressed.",
      },
      {
        title: "Strategy Development",
        description:
          "Based on the analysis, we create a custom link building strategy targeting high-authority, niche-relevant websites that will move the needle on your rankings.",
      },
      {
        title: "Outreach & Acquisition",
        description:
          "Our team executes personalized outreach campaigns to secure editorial placements, guest posts, resource links, and digital PR mentions from authoritative sources.",
      },
      {
        title: "Quality Assurance",
        description:
          "Every acquired link is vetted for quality — we check domain authority, relevance, traffic, and editorial standards to ensure only valuable links point to your site.",
      },
      {
        title: "Reporting & Scaling",
        description:
          "Monthly reports detail every link acquired, its metrics, and the impact on your domain authority and rankings. We scale what works and evolve our approach.",
      },
    ],
    includedItems: [
      "Editorial backlink placements",
      "Guest post writing and placement",
      "Broken link building",
      "HARO/journalist responses",
      "Competitor link gap analysis",
      "Toxic link audit and disavowal",
      "Digital PR campaigns",
      "Resource page outreach",
      "Monthly link reports",
      "Anchor text strategy",
    ],
    stats: [
      { value: "50+", label: "Links Built Monthly" },
      { value: "DA 40+", label: "Average Link Quality" },
      { value: "500+", label: "Publisher Relationships" },
      { value: "0%", label: "Spam Link Rate" },
    ],
    faqPool: [
      {
        question: "What makes a high-quality backlink?",
        answer:
          "A high-quality backlink comes from a relevant, authoritative website with real traffic, editorial standards, and contextual placement. We evaluate domain authority, relevance, traffic, and link placement to ensure every link adds value.",
      },
      {
        question: "How many backlinks do I need to rank?",
        answer:
          "The number varies based on your niche competition, current authority, and target keywords. Rather than focusing on quantity, we prioritize quality — one link from a DA 70+ site can outweigh dozens of low-quality links.",
      },
      {
        question: "Is link building still important for SEO?",
        answer:
          "Absolutely. Google has confirmed that backlinks remain one of the top three ranking factors. The key difference is that quality, relevance, and natural acquisition patterns matter more than ever.",
      },
      {
        question: "What link building tactics do you avoid?",
        answer:
          "We never use PBN links, link farms, paid link schemes, excessive reciprocal linking, or any tactic that violates Google's guidelines. Our approach is 100% white-hat and sustainable.",
      },
      {
        question: "How long before link building impacts rankings?",
        answer:
          "New backlinks typically start influencing rankings within 4-12 weeks as search engines discover, crawl, and evaluate them. Consistent link building over 3-6 months creates compounding ranking improvements.",
      },
      {
        question: "Can bad backlinks hurt my site?",
        answer:
          "Yes, toxic or spammy backlinks can trigger manual penalties or algorithmic demotions. We include a toxic link audit in our service and submit disavowal files to Google when harmful links are identified.",
      },
      {
        question: "What is digital PR and how does it differ from link building?",
        answer:
          "Digital PR focuses on earning media coverage and brand mentions through newsworthy content, data studies, and expert commentary. It builds both links and brand awareness simultaneously.",
      },
      {
        question: "Do you provide reports on links built?",
        answer:
          "Yes, every month you receive a detailed report showing each link acquired, the linking domain's metrics, the anchor text used, and the overall impact on your domain authority and keyword rankings.",
      },
      {
        question: "Can you help remove bad links pointing to my site?",
        answer:
          "Yes, our link audit identifies toxic backlinks, and we pursue removal through direct webmaster outreach. For links that cannot be removed, we prepare and submit Google Disavow files.",
      },
      {
        question: "What industries do you build links for?",
        answer:
          "We have experience building links across virtually every industry, with particular expertise in technology, finance, healthcare, e-commerce, and professional services. Our publisher network spans multiple verticals.",
      },
    ],
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    shortTitle: "Local SEO",
    metaKeyword: "local SEO services",
    features: [
      "Google Business Profile optimization",
      "Local citation building and NAP consistency",
      "Review generation and management",
      "Local keyword targeting and content",
      "Map pack ranking optimization",
      "Hyperlocal landing page creation",
      "Local schema markup implementation",
      "Competitor local analysis",
      "Local link building",
      "Multi-location SEO management",
    ],
    processSteps: [
      {
        title: "Local Presence Audit",
        description:
          "We audit your Google Business Profile, local citations, reviews, and local search rankings to identify gaps and opportunities in your local visibility.",
      },
      {
        title: "GBP Optimization",
        description:
          "We fully optimize your Google Business Profile — categories, attributes, photos, posts, Q&A, and description — to maximize your presence in Google Maps and local pack results.",
      },
      {
        title: "Citation & NAP Cleanup",
        description:
          "We ensure your business name, address, and phone number are consistent across 50+ directories, data aggregators, and industry-specific platforms.",
      },
      {
        title: "Review Strategy Execution",
        description:
          "We implement ethical review generation campaigns and response strategies that build trust and improve your local ranking signals.",
      },
      {
        title: "Local Content & Monitoring",
        description:
          "We create location-optimized content, build local links, and continuously monitor your map pack rankings and local visibility metrics.",
      },
    ],
    includedItems: [
      "Google Business Profile management",
      "Citation building (50+ directories)",
      "NAP consistency audits",
      "Review strategy implementation",
      "Local keyword optimization",
      "Map pack ranking tracking",
      "Local landing pages",
      "Local schema markup",
      "Competitor tracking",
      "Monthly local SEO reports",
    ],
    stats: [
      { value: "#1", label: "Map Pack Rankings Achieved" },
      { value: "180%", label: "Average Local Traffic Growth" },
      { value: "200+", label: "Local Businesses Served" },
      { value: "4.8★", label: "Average Client Review Score" },
    ],
    faqPool: [
      {
        question: "What is local SEO and who needs it?",
        answer:
          "Local SEO optimizes your online presence to attract customers from local searches. Any business serving a geographic area — restaurants, dentists, plumbers, law firms, retail stores — benefits from local SEO.",
      },
      {
        question: "How important is Google Business Profile for local SEO?",
        answer:
          "Google Business Profile is the single most important local ranking factor. A fully optimized GBP with reviews, photos, and regular posts can be the difference between appearing in the map pack or being invisible.",
      },
      {
        question: "What are local citations and why do they matter?",
        answer:
          "Local citations are mentions of your business name, address, and phone number on directories and websites. Consistent citations across the web validate your business information and improve local search trust.",
      },
      {
        question: "How do online reviews affect local SEO rankings?",
        answer:
          "Reviews are a top local ranking factor. Both the quantity and quality of Google reviews directly influence your map pack position. Our review strategy helps you ethically generate more positive reviews.",
      },
      {
        question: "Can you help with multi-location SEO?",
        answer:
          "Yes, we specialize in multi-location SEO. We create unique Google Business Profiles for each location, build location-specific landing pages, and manage citations and reviews across all your locations.",
      },
      {
        question: "How long until I see results from local SEO?",
        answer:
          "Local SEO improvements can show results faster than traditional SEO — many clients see map pack ranking improvements within 4-8 weeks. Full optimization typically takes 3-6 months for competitive markets.",
      },
      {
        question: "Do you help manage and respond to reviews?",
        answer:
          "Yes, we provide review response templates and strategies, and can manage review responses on your behalf. Responding to both positive and negative reviews is crucial for local SEO and customer trust.",
      },
      {
        question: "What is the Google Map Pack and how do I rank in it?",
        answer:
          "The Map Pack (or Local Pack) is the box of three local business listings that appears at the top of local search results. Ranking requires an optimized GBP, strong reviews, consistent citations, and local relevance signals.",
      },
      {
        question: "Can local SEO work for service-area businesses?",
        answer:
          "Absolutely. Service-area businesses (plumbers, electricians, cleaners) can optimize for local search without a storefront. We configure your GBP service areas and build location-targeted content.",
      },
      {
        question: "How do you track local SEO performance?",
        answer:
          "We track map pack rankings, local organic rankings, GBP insights (calls, directions, website clicks), citation accuracy, review velocity, and local traffic. Monthly reports give you full visibility.",
      },
    ],
  },
  {
    slug: "content-strategy",
    title: "Content Strategy & Marketing",
    shortTitle: "Content Strategy",
    metaKeyword: "content strategy services",
    features: [
      "In-depth keyword research and mapping",
      "Editorial calendar development",
      "SEO-optimized blog and article writing",
      "Pillar page and topic cluster strategy",
      "Content audits and gap analysis",
      "E-E-A-T authority building",
      "Content performance tracking",
      "Competitor content analysis",
      "Content refresh and optimization",
      "Thought leadership positioning",
    ],
    processSteps: [
      {
        title: "Content Audit & Analysis",
        description:
          "We audit your existing content, analyze competitor strategies, and identify content gaps and keyword opportunities that align with your business goals.",
      },
      {
        title: "Strategy Development",
        description:
          "We build a comprehensive content strategy with topic clusters, pillar pages, and an editorial calendar designed to establish your topical authority.",
      },
      {
        title: "Content Creation",
        description:
          "Our writers produce SEO-optimized, expert-level content that demonstrates E-E-A-T — from blog posts and guides to data studies and industry reports.",
      },
      {
        title: "Publishing & Promotion",
        description:
          "We manage the publishing schedule, optimize on-page elements, implement internal linking, and coordinate distribution across owned channels.",
      },
      {
        title: "Performance Optimization",
        description:
          "We track content performance metrics, identify refresh opportunities, and continuously optimize existing content to maintain and improve rankings.",
      },
    ],
    includedItems: [
      "Keyword research and mapping",
      "Content calendar planning",
      "Blog post writing (SEO-optimized)",
      "Pillar page creation",
      "Topic cluster strategy",
      "Content performance tracking",
      "Competitor content analysis",
      "Content refresh program",
      "Internal linking strategy",
      "Monthly content reports",
    ],
    stats: [
      { value: "4x", label: "Average Traffic from Content" },
      { value: "500+", label: "Articles Published" },
      { value: "10M+", label: "Organic Visits Generated" },
      { value: "85%", label: "Content Ranking on Page 1" },
    ],
    faqPool: [
      {
        question: "What is a content strategy and why do I need one?",
        answer:
          "A content strategy is a plan for creating, publishing, and managing content that attracts and converts your target audience through search. Without one, you're publishing randomly and missing keyword opportunities.",
      },
      {
        question: "What are topic clusters and pillar pages?",
        answer:
          "A pillar page is a comprehensive guide on a broad topic, while cluster pages cover specific subtopics and link back to the pillar. This structure signals topical authority to search engines and improves rankings across the entire topic.",
      },
      {
        question: "How many blog posts do you write per month?",
        answer:
          "This depends on your plan. Our Growth plan includes 4 blog posts per month, while Enterprise plans include custom content volumes. Each post is thoroughly researched, expertly written, and optimized for target keywords.",
      },
      {
        question: "Do you write content in-house or outsource it?",
        answer:
          "All content is produced by our in-house team of experienced writers with subject matter expertise. We never outsource to content mills — every piece goes through editorial review and SEO optimization.",
      },
      {
        question: "How do you ensure content meets E-E-A-T standards?",
        answer:
          "We incorporate first-hand experience, cite authoritative sources, include expert quotes, add author bios with credentials, and structure content to demonstrate comprehensive topic knowledge.",
      },
      {
        question: "Can you help with content in specialized industries?",
        answer:
          "Yes, we have writers experienced in technology, healthcare, finance, legal, and other specialized fields. For highly technical content, we collaborate with subject matter experts to ensure accuracy.",
      },
      {
        question: "How do you measure content ROI?",
        answer:
          "We track organic traffic, keyword rankings, engagement metrics, lead generation, and conversion attribution for every piece of content. Monthly reports connect content performance directly to business outcomes.",
      },
      {
        question: "What happens to underperforming content?",
        answer:
          "We regularly audit content performance and identify refresh opportunities. Underperforming content is updated with new information, better optimization, and improved structure to boost rankings.",
      },
      {
        question: "Do you handle content distribution and promotion?",
        answer:
          "We focus on organic distribution through SEO, but also advise on social amplification, email marketing integration, and internal linking strategies to maximize each piece's reach.",
      },
      {
        question: "How long should SEO content be?",
        answer:
          "Content length depends on the topic and search intent. We analyze top-ranking pages for each keyword and create content that's comprehensive enough to satisfy user intent — whether that's 800 words or 3,000+.",
      },
    ],
  },
  {
    slug: "seo-audit",
    title: "SEO Audits & Consulting",
    shortTitle: "SEO Audits",
    metaKeyword: "SEO audit services",
    features: [
      "Comprehensive 200+ point site audits",
      "Competitor analysis and benchmarking",
      "Keyword gap analysis",
      "Technical health scoring",
      "Content quality assessment",
      "Backlink profile analysis",
      "Monthly strategy sessions",
      "Custom SEO roadmap development",
      "Priority action items with impact scoring",
      "Executive summary and recommendations",
    ],
    processSteps: [
      {
        title: "Data Collection",
        description:
          "We gather data from Google Search Console, Analytics, and our crawling tools to build a complete picture of your site's current SEO health and performance.",
      },
      {
        title: "200+ Point Analysis",
        description:
          "We evaluate over 200 SEO factors across technical health, on-page optimization, content quality, backlink profile, and competitive positioning.",
      },
      {
        title: "Competitor Benchmarking",
        description:
          "We analyze your top competitors' SEO strategies to identify what they're doing right, where they're vulnerable, and where you can gain an advantage.",
      },
      {
        title: "Roadmap Development",
        description:
          "We create a prioritized action plan that ranks opportunities by potential impact and implementation effort, giving you a clear path to improved rankings.",
      },
      {
        title: "Strategy Consultation",
        description:
          "We walk through the audit findings and roadmap in a detailed strategy session, answering questions and aligning on the execution plan.",
      },
    ],
    includedItems: [
      "200+ point site audit",
      "Competitor analysis (3-5 competitors)",
      "Keyword opportunity report",
      "Technical health scorecard",
      "Content gap analysis",
      "Backlink profile review",
      "Prioritized action plan",
      "Executive summary",
      "Strategy consultation call",
      "90-day SEO roadmap",
    ],
    stats: [
      { value: "200+", label: "Audit Points Checked" },
      { value: "48hr", label: "Turnaround Time" },
      { value: "92%", label: "Issue Detection Rate" },
      { value: "3x", label: "Average ROI from Fixes" },
    ],
    faqPool: [
      {
        question: "What does an SEO audit include?",
        answer:
          "Our audit covers 200+ checkpoints across technical SEO, on-page optimization, content quality, backlink profile, competitive positioning, and user experience. You receive a detailed report with prioritized recommendations.",
      },
      {
        question: "How often should I get an SEO audit?",
        answer:
          "We recommend a comprehensive audit annually, with quarterly check-ins. Additional audits should follow major site changes, algorithm updates, or sudden ranking drops.",
      },
      {
        question: "What happens after the audit?",
        answer:
          "You receive a detailed report with a prioritized action plan. We walk you through findings in a strategy session and can either guide your team through implementation or handle it ourselves.",
      },
      {
        question: "How is your audit different from free SEO tools?",
        answer:
          "Free tools check surface-level issues. Our audit includes expert analysis, competitive context, business-specific recommendations, and a strategic roadmap — not just a list of technical errors.",
      },
      {
        question: "Can you audit a site before a redesign or migration?",
        answer:
          "Absolutely — this is one of the most valuable times for an audit. We identify SEO assets to preserve, potential risks, and migration requirements to ensure you don't lose organic traffic.",
      },
      {
        question: "Do you provide ongoing consulting after the audit?",
        answer:
          "Yes, our consulting packages include monthly strategy sessions, priority support, and continuous optimization guidance. Many clients start with an audit and transition to ongoing consulting.",
      },
      {
        question: "How quickly will I receive the audit report?",
        answer:
          "Our standard audit delivery is within 48 hours for sites under 500 pages. Larger sites or enterprise audits may take up to one week. Rush delivery is available upon request.",
      },
      {
        question: "Can you audit my competitor's website too?",
        answer:
          "Yes, competitive analysis is a core part of our audit. We analyze 3-5 of your top competitors to identify their strengths, weaknesses, and the keyword gaps you can exploit.",
      },
      {
        question: "What if my team can't implement the recommendations?",
        answer:
          "We offer implementation services for every recommendation in the audit. Whether you need technical fixes, content optimization, or link building — we can handle the execution.",
      },
      {
        question: "Is the audit a one-time cost or a subscription?",
        answer:
          "Our comprehensive audit is available as a one-time service. However, many clients opt for our ongoing consulting plans that include quarterly audits, monthly strategy sessions, and continuous optimization.",
      },
    ],
  },
];

export function getServiceContent(
  slug: string
): ServiceContentData | undefined {
  return SERVICE_CONTENT.find((s) => s.slug === slug);
}

export const SERVICE_SLUGS = SERVICE_CONTENT.map((s) => s.slug);
