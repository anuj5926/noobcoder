import type { Service, ServiceSlug } from "@/types";

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    h1: "Web development services built for speed, search and scale",
    metaTitle: "Web Development Services & Next.js Development",
    metaDescription:
      "Website development services from Noob Coders Team: business websites, custom web applications, e-commerce, Next.js development, CMS builds and progressive web apps.",
    keywords: [
      "web development company",
      "website development services",
      "Next.js development services",
      "custom web application development",
      "e-commerce development",
      "progressive web apps",
    ],
    tagline: "Fast, search-friendly websites and web apps.",
    summary:
      "From marketing websites to complex web platforms, we engineer fast, accessible and search-friendly experiences on a modern stack.",
    icon: "globe",
    intro: [
      "Your website is usually the first conversation a customer has with your business. We treat it that way. As a web development company, we design and engineer websites and web applications that load quickly, rank well and are easy for your team to manage long after launch.",
      "Most of our web work is built with Next.js and React, because the combination gives you server rendering for SEO, instant page transitions for users, and a component architecture that grows with your product. When a different tool is the better fit — a lightweight CMS site, a PHP stack you already run, or a Vue front end — we use that instead.",
    ],
    offerings: [
      {
        title: "Business websites",
        description:
          "Marketing sites that explain what you do clearly, load in a blink and turn visitors into enquiries. Structured for SEO from the first commit.",
      },
      {
        title: "Custom web applications",
        description:
          "Portals, dashboards, booking systems and SaaS products with authentication, role-based access, payments and integrations with the tools you already use.",
      },
      {
        title: "E-commerce development",
        description:
          "Headless or platform-based stores with fast product discovery, reliable checkout flows, inventory sync and analytics that show what actually sells.",
      },
      {
        title: "Next.js development",
        description:
          "App Router architectures with server components, static generation, image optimisation and edge-ready APIs — tuned for Core Web Vitals.",
      },
      {
        title: "CMS development",
        description:
          "Content models and editing experiences in headless CMS platforms or WordPress, so your marketing team can publish without waiting on developers.",
      },
      {
        title: "Progressive Web Apps",
        description:
          "Installable web apps with offline support, push notifications and app-like performance, without the overhead of app store releases.",
      },
    ],
    benefits: [
      {
        title: "Performance first",
        description:
          "We budget for speed: optimised images, minimal JavaScript and server rendering, so pages feel instant on real devices.",
      },
      {
        title: "Built to be found",
        description: "Semantic HTML, metadata, structured data and clean URLs are part of the build, not an afterthought.",
      },
      {
        title: "Easy to own",
        description:
          "Typed, documented code and a CMS your team can actually use mean you are never locked out of your own website.",
      },
    ],
    approach: [
      {
        title: "Plan the structure",
        description: "Sitemap, content model and technical requirements agreed before design begins.",
      },
      {
        title: "Build in components",
        description: "A reusable component library keeps pages consistent and new pages cheap to add.",
      },
      {
        title: "Test on real devices",
        description: "Performance, accessibility and cross-browser checks on phones, tablets and desktops.",
      },
      {
        title: "Launch and measure",
        description: "Analytics, search console and monitoring configured so you can see how the site performs.",
      },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vue.js", "Node.js", "PHP", "Headless CMS"],
    deliverables: [
      "Responsive, accessible website or web application",
      "Technical SEO foundation (metadata, sitemap, schema)",
      "Content management setup and editor training",
      "Performance and accessibility report at launch",
      "Source code and deployment documentation",
    ],
    faqs: [
      {
        question: "Why do you recommend Next.js for many projects?",
        answer:
          "Next.js renders pages on the server, which helps search engines and improves load times, while still giving users a fast app-like experience. It also has first-class image optimisation and a large ecosystem, which keeps long-term maintenance costs down.",
      },
      {
        question: "Can you work with our existing website?",
        answer:
          "Yes. We can audit what you have, fix performance or SEO issues, add features, or plan a staged migration so you do not lose traffic during a rebuild.",
      },
      {
        question: "Will we be able to update content ourselves?",
        answer:
          "Yes. Wherever content changes regularly, we connect a CMS and train your team so routine updates never require a developer.",
      },
    ],
    related: ["ui-ux-design", "digital-marketing", "cloud-devops"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    h1: "Mobile app development for iOS, Android and everything in between",
    metaTitle: "Mobile App Development Company — iOS, Android & Cross-Platform",
    metaDescription:
      "Mobile app development for Android and iOS using React Native, Flutter and Expo. Noob Coders Team builds reliable cross-platform apps from idea to app store.",
    keywords: [
      "mobile app development company",
      "React Native development",
      "Flutter app development",
      "iOS app development",
      "Android app development",
      "cross-platform app development",
    ],
    tagline: "Native-feeling apps for iOS and Android.",
    summary:
      "We build polished mobile apps for iOS and Android with cross-platform frameworks that keep one codebase without sacrificing the native feel.",
    icon: "smartphone",
    intro: [
      "A good mobile app earns a place on someone's home screen. That means it has to be fast, intuitive and dependable — on a three-year-old Android phone as much as the latest iPhone. We build apps with that standard in mind.",
      "Our mobile team works mainly with React Native, Expo and Flutter. Cross-platform frameworks let us ship to both app stores from one codebase, which shortens timelines and simplifies maintenance, while native modules cover the cases that need platform-specific capabilities.",
    ],
    offerings: [
      {
        title: "Android apps",
        description:
          "Apps designed for the variety of Android devices, screen sizes and OS versions your customers actually use.",
      },
      {
        title: "iOS apps",
        description: "Apps that follow Apple's interface guidelines and pass App Store review without surprises.",
      },
      {
        title: "React Native",
        description: "One TypeScript codebase for both platforms, sharing logic with your web product where that makes sense.",
      },
      {
        title: "Flutter",
        description: "Pixel-consistent interfaces with smooth animation, ideal for brand-heavy or highly custom UI.",
      },
      {
        title: "Cross-platform applications",
        description: "Apps that work across phones, tablets and the web, with shared APIs, authentication and data.",
      },
    ],
    benefits: [
      {
        title: "One codebase, two stores",
        description: "Cross-platform development reduces cost and keeps features in sync across iOS and Android.",
      },
      {
        title: "Offline-aware",
        description: "Local caching and sync strategies so the app stays useful when the connection is not.",
      },
      { title: "Release-ready", description: "We handle signing, store listings, beta testing and review submission with you." },
    ],
    approach: [
      {
        title: "Map the core journey",
        description: "Identify the few actions users must complete effortlessly, and design around them.",
      },
      { title: "Prototype early", description: "Clickable prototypes on real phones before development begins." },
      {
        title: "Build and test in sprints",
        description: "Regular test builds through TestFlight and internal tracks so you see progress weekly.",
      },
      {
        title: "Launch and iterate",
        description: "Crash reporting, analytics and over-the-air updates for fast improvements after launch.",
      },
    ],
    stack: ["React Native", "Expo", "Flutter", "TypeScript", "Firebase", "Node.js", "REST & GraphQL APIs"],
    deliverables: [
      "iOS and Android applications",
      "Backend APIs and admin panel where required",
      "App store listing assets and submission support",
      "Crash reporting and analytics setup",
      "Source code and release documentation",
    ],
    faqs: [
      {
        question: "Should we choose React Native or Flutter?",
        answer:
          "Both are excellent. React Native is a strong choice if you already use React on the web or want to share logic with a web app. Flutter shines for highly custom, animation-rich interfaces. We recommend one after understanding your product and team.",
      },
      {
        question: "Do you help publish the app to the stores?",
        answer:
          "Yes. We prepare builds, store listings and screenshots, manage beta testing, and support you through App Store and Google Play review.",
      },
    ],
    related: ["ui-ux-design", "custom-software-development", "cloud-devops"],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    h1: "Custom software development that fits the way your business works",
    metaTitle: "Custom Software Development — CRM, ERP & Business Systems",
    metaDescription:
      "Custom software development for growing businesses: CRM, ERP, business management systems, enterprise applications, custom APIs and workflow automation.",
    keywords: [
      "custom software development",
      "custom CRM development",
      "ERP development",
      "business management software",
      "custom API development",
      "workflow automation",
    ],
    tagline: "Systems shaped around your operations.",
    summary:
      "When off-the-shelf tools stop fitting, we design and build software around your real workflows — CRMs, ERPs, internal platforms and APIs.",
    icon: "boxes",
    intro: [
      "Spreadsheets, disconnected tools and manual copy-paste quietly cost businesses hours every week. Custom software replaces that friction with a system built around how your team actually works.",
      "We start by understanding your operations in detail, then design software that automates the repetitive parts, connects your existing tools, and gives managers clear visibility. Everything is built on maintainable, well-documented architecture so it can evolve as your business does.",
    ],
    offerings: [
      {
        title: "CRM systems",
        description: "Customer records, pipelines, follow-ups and reporting tailored to your sales and service process.",
      },
      {
        title: "ERP solutions",
        description: "Inventory, procurement, production and finance modules connected in one source of truth.",
      },
      {
        title: "Business management systems",
        description:
          "Scheduling, staff, billing and operations tools for service businesses that have outgrown generic software.",
      },
      {
        title: "Enterprise applications",
        description: "Secure, role-based applications with audit trails, SSO and integrations across departments.",
      },
      {
        title: "Custom API development",
        description: "Well-documented REST and GraphQL APIs that connect your systems, partners and mobile apps.",
      },
      {
        title: "Workflow automation",
        description: "Automated approvals, notifications, document generation and data sync that remove manual steps.",
      },
    ],
    benefits: [
      {
        title: "Fits your process",
        description: "Software that adapts to your workflow instead of forcing your team to work around it.",
      },
      {
        title: "Connected data",
        description: "Integrations remove double entry and give everyone the same, up-to-date information.",
      },
      { title: "You own it", description: "No per-seat licensing surprises — the software and its roadmap belong to you." },
    ],
    approach: [
      {
        title: "Workflow discovery",
        description: "Interviews and process mapping with the people who will use the system every day.",
      },
      {
        title: "Architecture and data model",
        description: "A scalable foundation designed around your entities, permissions and integrations.",
      },
      {
        title: "Incremental delivery",
        description: "Release the highest-value modules first, so the team benefits while the rest is built.",
      },
      {
        title: "Training and handover",
        description: "Documentation, training sessions and a support plan for a smooth rollout.",
      },
    ],
    stack: ["Node.js", "Express.js", "Python", "FastAPI", "PHP", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
    deliverables: [
      "Custom web-based software and admin tools",
      "Documented APIs and integrations",
      "Role-based access control and audit logging",
      "Data migration from existing tools",
      "User training and technical documentation",
    ],
    faqs: [
      {
        question: "How do we know if we need custom software?",
        answer:
          "If your team relies on workarounds, duplicates data across tools, or pays for features it does not use while missing ones it needs, custom software is usually worth exploring. We are happy to tell you honestly when an existing product is the better choice.",
      },
      {
        question: "Can you integrate with the tools we already use?",
        answer:
          "In most cases, yes. We regularly integrate with accounting, payment, email, messaging and storage platforms through their APIs.",
      },
    ],
    related: ["ai-solutions", "cloud-devops", "maintenance-support"],
  },
  {
    slug: "ai-solutions",
    title: "AI & Machine Learning",
    h1: "AI development services that turn models into useful products",
    metaTitle: "AI Development Services — Chatbots, Generative AI & Automation",
    metaDescription:
      "AI development services from Noob Coders Team: AI-powered applications, AI chatbots, generative AI features, intelligent automation and AI integrations for your business.",
    keywords: [
      "AI development services",
      "AI chatbot development",
      "generative AI development",
      "AI integration services",
      "intelligent automation",
      "machine learning development",
    ],
    tagline: "Practical AI, integrated into real workflows.",
    summary:
      "We help businesses apply AI where it genuinely helps — assistants, content generation, document understanding and automation, built responsibly.",
    icon: "sparkles",
    intro: [
      "AI is most valuable when it quietly removes work from someone's day. We focus on practical applications: assistants that answer customer questions from your own knowledge base, tools that summarise and extract information from documents, and automations that handle routine decisions.",
      "We build with large language model APIs, retrieval-augmented generation and classic machine learning where appropriate. Every AI feature we ship includes guardrails, evaluation and human oversight, so outputs stay accurate, on-brand and safe.",
    ],
    offerings: [
      {
        title: "AI-powered applications",
        description: "Products with AI at the core — from smart search to recommendation and analysis tools.",
      },
      {
        title: "AI chatbots",
        description: "Support and sales assistants grounded in your documentation, with handoff to human agents.",
      },
      {
        title: "Generative AI",
        description: "Content, image and copy generation features with brand guidelines, review steps and usage controls.",
      },
      {
        title: "Intelligent automation",
        description: "Classification, extraction and routing of emails, forms and documents to cut manual processing.",
      },
      {
        title: "AI integrations",
        description: "Connecting AI services into your existing CRM, helpdesk, CMS or internal tools.",
      },
    ],
    benefits: [
      {
        title: "Grounded answers",
        description: "Retrieval from your own data reduces hallucinations and keeps answers relevant.",
      },
      { title: "Measurable impact", description: "We define success metrics up front and evaluate outputs against them." },
      { title: "Responsible by design", description: "Privacy, data handling and human review are built into every workflow." },
    ],
    approach: [
      {
        title: "Find the right use case",
        description: "Identify tasks where AI saves real time and where errors are manageable.",
      },
      {
        title: "Prototype and evaluate",
        description: "Quick proofs of concept tested against real examples from your business.",
      },
      { title: "Productionise", description: "Guardrails, monitoring, cost controls and integration into your systems." },
      { title: "Improve continuously", description: "Feedback loops and evaluation sets that make the system better over time." },
    ],
    stack: ["OpenAI APIs", "Python", "FastAPI", "Vector databases", "Node.js", "Next.js", "Machine Learning"],
    deliverables: [
      "Production-ready AI feature or application",
      "Prompt, retrieval and evaluation setup",
      "Usage, cost and quality monitoring",
      "Data handling and privacy documentation",
      "Admin controls for content and knowledge sources",
    ],
    faqs: [
      {
        question: "Is our data used to train public AI models?",
        answer:
          "We design integrations using provider settings and agreements that keep your business data private, and we document exactly where data flows. Sensitive workloads can use additional isolation where required.",
      },
      {
        question: "How do you stop an AI chatbot from making things up?",
        answer:
          "We ground answers in your approved content, instruct the model to decline when it lacks information, add evaluation tests, and provide a clear route to a human when needed.",
      },
    ],
    related: ["custom-software-development", "web-development", "cloud-devops"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX & Product Design",
    h1: "UI/UX design services for products people enjoy using",
    metaTitle: "UI/UX Design Services — Websites, Apps & Design Systems",
    metaDescription:
      "UI/UX design services for websites and mobile apps: research, wireframes, interactive prototypes and scalable design systems from Noob Coders Team.",
    keywords: [
      "UI/UX design services",
      "product design agency",
      "website design",
      "mobile app design",
      "design systems",
      "prototyping",
    ],
    tagline: "Interfaces that feel obvious.",
    summary:
      "Research-led product design that makes complex things feel simple — from first wireframe to a design system your developers love.",
    icon: "pen-tool",
    intro: [
      "Good design is not decoration. It is the reason a customer finishes checkout, an employee adopts a new tool, or a visitor understands your offer in five seconds. Our UI/UX design services focus on clarity first, then craft.",
      "Because our designers work alongside our engineers, every design is grounded in what can be built well. We hand over production-ready files, documented components and interaction details, so nothing gets lost between design and development.",
    ],
    offerings: [
      {
        title: "Website design",
        description: "Distinctive, conversion-focused website design that reflects your brand and guides visitors to act.",
      },
      {
        title: "Mobile application design",
        description: "Native-feeling app interfaces that respect platform conventions and thumb-friendly ergonomics.",
      },
      {
        title: "Wireframes",
        description: "Low-fidelity layouts that settle structure, content and flows before visual design begins.",
      },
      { title: "Prototypes", description: "Interactive prototypes for testing ideas with real users and aligning stakeholders." },
      {
        title: "Design systems",
        description: "Tokens, components and guidelines that keep products consistent as teams and features grow.",
      },
    ],
    benefits: [
      { title: "Clarity", description: "Users understand what to do next without instructions." },
      { title: "Consistency", description: "A shared design language across every screen and platform." },
      { title: "Build-ready", description: "Designs that map directly to reusable code components." },
    ],
    approach: [
      { title: "Understand users", description: "Interviews, analytics review and competitor audits to define real needs." },
      { title: "Structure", description: "Information architecture, user flows and wireframes." },
      { title: "Visual design", description: "High-fidelity interfaces, motion principles and brand expression." },
      { title: "Validate", description: "Usability testing and iteration before development." },
    ],
    stack: ["Figma", "Photoshop", "Illustrator", "Prototyping", "Design tokens"],
    deliverables: [
      "User flows and wireframes",
      "High-fidelity UI designs for all breakpoints",
      "Interactive prototype",
      "Design system with documented components",
      "Developer handoff specifications",
    ],
    faqs: [
      {
        question: "Can you redesign an existing product without starting over?",
        answer:
          "Yes. We often run a UX audit first, then improve the highest-impact screens and introduce a design system gradually alongside ongoing development.",
      },
      {
        question: "Do you test designs with users?",
        answer:
          "Where possible, yes. Even a handful of usability sessions with prototypes reveals issues that are far cheaper to fix before code is written.",
      },
    ],
    related: ["web-development", "mobile-app-development", "digital-marketing"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    h1: "Digital marketing services and SEO that compound over time",
    metaTitle: "Digital Marketing Services & Technical SEO",
    metaDescription:
      "Digital marketing services from Noob Coders Team: technical SEO, on-page and off-page SEO, social media marketing and performance marketing focused on measurable growth.",
    keywords: [
      "digital marketing services",
      "technical SEO services",
      "on-page SEO",
      "off-page SEO",
      "social media marketing",
      "performance marketing",
    ],
    tagline: "Visibility built on technical foundations.",
    summary:
      "Search and marketing programmes that start with a technically sound website and grow through content, social and data-driven campaigns.",
    icon: "trending-up",
    intro: [
      "Marketing works best on a website that search engines can crawl easily and users enjoy visiting. Because we are developers as well as marketers, we can fix the technical problems that hold rankings back — not just report on them.",
      "From there we build sustainable visibility through helpful content, ethical link building and campaigns measured against business outcomes such as enquiries and sales, rather than vanity metrics.",
    ],
    offerings: [
      {
        title: "Technical SEO",
        description: "Crawlability, indexing, Core Web Vitals, structured data and site architecture fixed at the code level.",
      },
      {
        title: "On-page SEO",
        description: "Keyword research, content optimisation, internal linking and metadata that match search intent.",
      },
      { title: "Off-page SEO", description: "Ethical digital PR and relevant link acquisition — no link farms or shortcuts." },
      {
        title: "Social media marketing",
        description: "Content strategy and publishing that builds a recognisable brand voice across platforms.",
      },
      {
        title: "Performance marketing",
        description: "Search and social ad campaigns with clear tracking, testing and cost control.",
      },
    ],
    benefits: [
      { title: "Technical depth", description: "We can implement SEO fixes directly in your codebase." },
      { title: "Honest reporting", description: "Clear dashboards tied to traffic quality, leads and revenue." },
      { title: "Sustainable growth", description: "White-hat practices that protect your domain long term." },
    ],
    approach: [
      { title: "Audit", description: "Technical, content and competitor analysis to find the biggest opportunities." },
      { title: "Fix foundations", description: "Resolve technical issues that limit crawling, indexing and speed." },
      { title: "Create and promote", description: "Publish helpful content and earn relevant mentions." },
      { title: "Measure and refine", description: "Monthly reporting and experiments based on real data." },
    ],
    stack: ["Google Search Console", "Google Analytics", "Structured data", "Next.js", "Ad platforms"],
    deliverables: [
      "Technical SEO audit and implementation plan",
      "Keyword and content strategy",
      "Analytics and conversion tracking setup",
      "Campaign management and creative testing",
      "Monthly performance reports",
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Technical fixes can improve performance within weeks, but meaningful organic growth typically builds over several months. We set realistic expectations and share progress transparently.",
      },
      {
        question: "Do you guarantee first-page rankings?",
        answer:
          "No one can honestly guarantee rankings. We focus on the practices that search engines reward and report openly on what is working.",
      },
    ],
    related: ["web-development", "ui-ux-design", "maintenance-support"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    h1: "Cloud and DevOps services for reliable, repeatable releases",
    metaTitle: "Cloud & DevOps Services — AWS, Docker & CI/CD",
    metaDescription:
      "Cloud and DevOps services: AWS architecture, Docker containerisation, CI/CD pipelines, cloud deployment, server management and monitoring by Noob Coders Team.",
    keywords: [
      "cloud and DevOps services",
      "AWS consulting",
      "Docker containerization",
      "CI/CD pipeline setup",
      "cloud deployment",
      "server management",
    ],
    tagline: "Infrastructure that just keeps running.",
    summary:
      "We set up cloud infrastructure, containers and automated pipelines so releases are routine, environments are consistent and outages are rare.",
    icon: "cloud",
    intro: [
      "Great software needs equally solid infrastructure. We design cloud environments that are secure, cost-aware and easy to reason about, then automate how code moves from a developer's laptop to production.",
      "Whether you are deploying a first product or untangling an environment that has grown organically, we bring clear architecture, infrastructure-as-code and monitoring that tells you about problems before your customers do.",
    ],
    offerings: [
      {
        title: "AWS",
        description: "Well-architected setups across compute, storage, databases and networking, sized to your workload.",
      },
      { title: "Docker", description: "Containerised applications for consistent environments from development to production." },
      { title: "CI/CD", description: "Automated testing, builds and deployments with GitHub Actions and similar tools." },
      {
        title: "Cloud deployment",
        description: "Zero-downtime deployments on AWS, Vercel and other platforms with rollback strategies.",
      },
      { title: "Server management", description: "Hardened Linux servers, Nginx configuration, backups and patching." },
      {
        title: "Monitoring",
        description: "Uptime, performance and error monitoring with alerting that reaches the right people.",
      },
    ],
    benefits: [
      { title: "Faster releases", description: "Automated pipelines turn deployments into a non-event." },
      { title: "Lower risk", description: "Consistent environments, backups and rollbacks reduce outages." },
      { title: "Cost visibility", description: "Right-sized resources and clear reporting on cloud spend." },
    ],
    approach: [
      { title: "Assess", description: "Review current infrastructure, deployment process and pain points." },
      { title: "Design", description: "Target architecture with security, scalability and cost in mind." },
      { title: "Automate", description: "Infrastructure-as-code, containers and CI/CD pipelines." },
      { title: "Observe", description: "Dashboards, logs and alerts for ongoing operational health." },
    ],
    stack: ["AWS", "Docker", "GitHub Actions", "Vercel", "Nginx", "Linux", "Terraform"],
    deliverables: [
      "Cloud architecture documentation",
      "Containerised applications",
      "CI/CD pipelines with automated tests",
      "Monitoring, logging and alerting",
      "Backup and disaster recovery plan",
    ],
    faqs: [
      {
        question: "Can you reduce our cloud costs?",
        answer:
          "Often, yes. Right-sizing instances, cleaning up unused resources and choosing the right pricing models typically reveal savings. We review spend as part of every engagement.",
      },
      {
        question: "Do you support platforms other than AWS?",
        answer: "Yes. We regularly deploy to Vercel and work with other major cloud providers depending on your requirements.",
      },
    ],
    related: ["custom-software-development", "maintenance-support", "web-development"],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Technical Support",
    h1: "Website maintenance and technical support you can rely on",
    metaTitle: "Website Maintenance & Technical Support Services",
    metaDescription:
      "Website maintenance and technical support from Noob Coders Team: bug fixing, security updates, performance optimisation and ongoing support for websites and apps.",
    keywords: [
      "website maintenance services",
      "technical support services",
      "bug fixing",
      "security updates",
      "performance optimization",
      "application support",
    ],
    tagline: "Care that continues after launch.",
    summary:
      "Ongoing care for your websites and applications — security updates, bug fixes, performance tuning and a team that answers when you need it.",
    icon: "life-buoy",
    intro: [
      "Launch is the beginning, not the end. Software needs regular updates, security patches and improvements to stay fast and safe as browsers, devices and dependencies change.",
      "Our maintenance and support plans give you a dedicated team that knows your system, responds quickly to issues and proactively keeps everything healthy — whether we built it originally or not.",
    ],
    offerings: [
      { title: "Bug fixing", description: "Investigation and resolution of defects with clear communication on cause and fix." },
      {
        title: "Security updates",
        description: "Dependency upgrades, vulnerability patching and security hardening on a regular schedule.",
      },
      {
        title: "Performance optimization",
        description: "Profiling and tuning to keep load times and Core Web Vitals in the green.",
      },
      { title: "Website maintenance", description: "Content updates, plugin and framework upgrades, backups and uptime checks." },
      {
        title: "Ongoing support",
        description: "A reliable point of contact and agreed response times for questions and incidents.",
      },
    ],
    benefits: [
      { title: "Peace of mind", description: "Proactive monitoring catches issues early." },
      { title: "Predictable costs", description: "Monthly plans instead of emergency invoices." },
      { title: "Continuous improvement", description: "Small, regular enhancements keep your product current." },
    ],
    approach: [
      { title: "Onboard", description: "Code review, access setup and a health check of your system." },
      { title: "Stabilise", description: "Address urgent issues and outdated dependencies." },
      { title: "Maintain", description: "Scheduled updates, backups and monitoring." },
      { title: "Report", description: "Regular summaries of work completed and recommendations." },
    ],
    stack: ["Next.js", "React", "Node.js", "PHP", "WordPress", "Docker", "Monitoring tools"],
    deliverables: [
      "System health check and onboarding report",
      "Scheduled security and dependency updates",
      "Agreed response times for support requests",
      "Backups and uptime monitoring",
      "Monthly maintenance reports",
    ],
    faqs: [
      {
        question: "Can you support a website or app built by another team?",
        answer:
          "Yes. We start with a code and infrastructure review to understand the system, then agree a plan for stabilising and maintaining it.",
      },
      {
        question: "What happens if something breaks out of hours?",
        answer:
          "Support plans can include priority response for critical issues. We agree response times and escalation routes with you up front.",
      },
    ],
    related: ["cloud-devops", "web-development", "digital-marketing"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServices(slugs: ServiceSlug[]) {
  return slugs.map((slug) => services.find((s) => s.slug === slug)).filter((s): s is Service => Boolean(s));
}
