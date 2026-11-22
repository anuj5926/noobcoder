import type { Project } from "@/types";
import lumen from "../../public/projects/lumen-commerce.jpg";
import pulse from "../../public/projects/pulse-health.jpg";
import atlas from "../../public/projects/atlas-erp.jpg";
import nova from "../../public/projects/nova-assist.jpg";
import orbit from "../../public/projects/orbit-finance.jpg";
import terra from "../../public/projects/terra-travel.jpg";

export const projectDisclaimer =
  "These are concept projects created by our team to demonstrate capabilities. They are not client engagements, and no client names or results are implied.";

export const projects: Project[] = [
  {
    slug: "lumen-commerce",
    name: "Lumen Commerce",
    tagline: "A headless storefront for a contemporary fashion label.",
    description: "An editorial e-commerce concept that pairs magazine-style storytelling with a fast, frictionless checkout.",
    industry: "Fashion & Retail",
    services: ["web-development", "ui-ux-design"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS", "Stripe"],
    image: lumen,
    imageAlt:
      "Lumen Commerce concept shown on a laptop and phone: a dark editorial fashion storefront with large serif headlines.",
    year: "Concept",
    challenge:
      "Fashion brands want the visual richness of a lookbook without the slow load times that usually come with it. The concept explores how a storefront can feel editorial while keeping product discovery and checkout fast.",
    approach: [
      "Server-rendered collection pages with streaming for instant first paint.",
      "Art-directed imagery served through responsive AVIF and WebP formats.",
      "A component-based CMS model so merchandisers can compose campaign pages.",
    ],
    features: ["Editorial collection pages", "Instant search and filtering", "One-page checkout", "Responsive art direction"],
    layout: "wide",
  },
  {
    slug: "pulse-health",
    name: "Pulse Health",
    tagline: "A calm, habit-forming wellness companion app.",
    description:
      "A cross-platform mobile concept for tracking activity, sleep and mindfulness with gentle, non-judgemental insights.",
    industry: "Health & Wellness",
    services: ["mobile-app-development", "ui-ux-design"],
    stack: ["React Native", "Expo", "TypeScript", "Firebase"],
    image: pulse,
    imageAlt:
      "Pulse Health concept on three smartphones showing activity rings, sleep stages and wellbeing insights in violet and lime.",
    year: "Concept",
    challenge:
      "Many health apps overwhelm users with numbers. This concept asks how a wellness app can motivate through calm design and clear, kind feedback.",
    approach: [
      "A single React Native codebase targeting iOS and Android.",
      "Offline-first data storage with background sync.",
      "A soft visual language with accessible contrast and large touch targets.",
    ],
    features: ["Activity and sleep tracking", "Guided mindfulness sessions", "Weekly insight summaries", "Offline support"],
    layout: "tall",
  },
  {
    slug: "atlas-erp",
    name: "Atlas Operations",
    tagline: "An ERP dashboard for modern manufacturing teams.",
    description:
      "A custom operations platform concept unifying inventory, production lines and order fulfilment in one real-time view.",
    industry: "Manufacturing",
    services: ["custom-software-development", "cloud-devops"],
    stack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    image: atlas,
    imageAlt:
      "Atlas Operations concept dashboard on a desktop monitor showing inventory tables, production line status and output charts.",
    year: "Concept",
    challenge:
      "Operations data in manufacturing is often spread across spreadsheets and legacy tools. The concept demonstrates a single, real-time source of truth for plant managers.",
    approach: [
      "Event-driven backend with Redis streams for live production updates.",
      "Role-based modules for inventory, procurement and quality.",
      "Containerised services deployed through automated CI/CD pipelines.",
    ],
    features: ["Live production line status", "Inventory and procurement modules", "Role-based access", "Exportable reports"],
    layout: "wide",
  },
  {
    slug: "nova-assist",
    name: "Nova Assist",
    tagline: "An AI support assistant grounded in your own knowledge.",
    description:
      "A generative AI concept that answers customer questions from approved documentation and hands off to humans when it should.",
    industry: "Customer Support / SaaS",
    services: ["ai-solutions", "web-development"],
    stack: ["Next.js", "Python", "FastAPI", "OpenAI APIs", "Vector search"],
    image: nova,
    imageAlt:
      "Nova Assist concept: a glowing violet particle orb above a dark chat interface, representing an AI support assistant.",
    year: "Concept",
    challenge:
      "Support teams answer the same questions repeatedly, but generic chatbots can give confident wrong answers. The concept focuses on grounded, trustworthy responses.",
    approach: [
      "Retrieval-augmented generation over a curated knowledge base.",
      "Confidence thresholds with automatic handoff to a human agent.",
      "Evaluation sets and analytics to track answer quality over time.",
    ],
    features: ["Grounded answers with sources", "Human handoff", "Admin knowledge management", "Quality analytics"],
    layout: "square",
  },
  {
    slug: "orbit-finance",
    name: "Orbit Finance",
    tagline: "A design system for a personal finance product.",
    description:
      "A UI/UX concept covering a complete design system and app screens for budgeting, spending insights and cash flow.",
    industry: "Fintech",
    services: ["ui-ux-design", "mobile-app-development"],
    stack: ["Figma", "Design tokens", "React Native", "Flutter"],
    image: orbit,
    imageAlt:
      "Orbit Finance design system flat lay with tablet and phone screens, typography scale, colour palette and card components.",
    year: "Concept",
    challenge:
      "Finance apps must feel trustworthy and simple even when presenting complex data. The concept builds a design system that keeps every screen consistent and clear.",
    approach: [
      "Token-based colours, typography and spacing ready for code.",
      "Accessible data visualisation patterns for charts and budgets.",
      "A component library mapped one-to-one with development components.",
    ],
    features: ["Complete design system", "Spending and budget screens", "Accessible charts", "Developer handoff specs"],
    layout: "tall",
  },
  {
    slug: "terra-travel",
    name: "Terra Journeys",
    tagline: "An installable travel booking web app.",
    description:
      "A progressive web app concept for curated travel experiences, with offline itineraries and a streamlined booking flow.",
    industry: "Travel & Hospitality",
    services: ["web-development", "digital-marketing"],
    stack: ["Next.js", "PWA", "TypeScript", "MongoDB", "Vercel"],
    image: terra,
    imageAlt: "Terra Journeys concept travel app on a phone held against misty mountains at dusk, showing a booking calendar.",
    year: "Concept",
    challenge:
      "Travellers often book on mobile with unreliable connections. The concept explores an installable web app that works offline and still ranks well in search.",
    approach: [
      "Service worker caching for offline itineraries.",
      "Statically generated destination pages for search visibility.",
      "A three-step booking flow designed for one-handed use.",
    ],
    features: ["Installable PWA", "Offline itineraries", "SEO-friendly destination pages", "Fast mobile booking"],
    layout: "wide",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
