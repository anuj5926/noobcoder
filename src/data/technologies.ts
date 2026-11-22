import {
  siCss,
  siDocker,
  siExpo,
  siExpress,
  siFastapi,
  siFigma,
  siFirebase,
  siFlutter,
  siGithubactions,
  siHtml5,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siRedis,
  siTailwindcss,
  siTensorflow,
  siVercel,
  siVuedotjs,
} from "simple-icons";
import type { TechnologyCategory } from "@/types";

const icon = (si: { path: string; hex: string }) => ({ path: si.path, hex: `#${si.hex}` });

export const technologyCategories: TechnologyCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Interfaces that are fast, accessible and a pleasure to use.",
    items: [
      { name: "React.js", icon: icon(siReact) },
      { name: "Next.js", icon: icon(siNextdotjs) },
      { name: "Vue.js", icon: icon(siVuedotjs) },
      { name: "HTML5", icon: icon(siHtml5) },
      { name: "CSS3", icon: icon(siCss) },
      { name: "Tailwind CSS", icon: icon(siTailwindcss) },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "Secure APIs and services that scale with demand.",
    items: [
      { name: "Node.js", icon: icon(siNodedotjs) },
      { name: "Express.js", icon: icon(siExpress) },
      { name: "Python", icon: icon(siPython) },
      { name: "FastAPI", icon: icon(siFastapi) },
      { name: "PHP", icon: icon(siPhp) },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    description: "Cross-platform apps with a native feel.",
    items: [
      { name: "React Native", icon: icon(siReact) },
      { name: "Flutter", icon: icon(siFlutter) },
      { name: "Expo", icon: icon(siExpo) },
    ],
  },
  {
    id: "database",
    label: "Database",
    description: "Reliable storage, caching and real-time data.",
    items: [
      { name: "MongoDB", icon: icon(siMongodb) },
      { name: "MySQL", icon: icon(siMysql) },
      { name: "PostgreSQL", icon: icon(siPostgresql) },
      { name: "Redis", icon: icon(siRedis) },
      { name: "Firebase", icon: icon(siFirebase) },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    description: "Automated, observable infrastructure.",
    items: [
      { name: "AWS", monogram: "aws" },
      { name: "Docker", icon: icon(siDocker) },
      { name: "GitHub Actions", icon: icon(siGithubactions) },
      { name: "Vercel", icon: icon(siVercel) },
      { name: "Nginx", icon: icon(siNginx) },
    ],
  },
  {
    id: "ai",
    label: "AI",
    description: "Practical intelligence built into products.",
    items: [
      { name: "OpenAI APIs", monogram: "AI" },
      { name: "Generative AI", monogram: "Gen" },
      { name: "Machine Learning", icon: icon(siTensorflow) },
    ],
  },
  {
    id: "design",
    label: "Design",
    description: "From first sketch to pixel-perfect systems.",
    items: [
      { name: "Figma", icon: icon(siFigma) },
      { name: "Photoshop", monogram: "Ps" },
      { name: "Illustrator", monogram: "Ai" },
    ],
  },
];

export const allTechnologies = technologyCategories.flatMap((c) => c.items);
