import type { StaticImageData } from "next/image";

export type ServiceSlug =
  | "web-development"
  | "mobile-app-development"
  | "custom-software-development"
  | "ai-solutions"
  | "ui-ux-design"
  | "digital-marketing"
  | "cloud-devops"
  | "maintenance-support";

export type ServiceIcon = "globe" | "smartphone" | "boxes" | "sparkles" | "pen-tool" | "trending-up" | "cloud" | "life-buoy";

export type Service = {
  slug: ServiceSlug;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  tagline: string;
  summary: string;
  icon: ServiceIcon;
  intro: string[];
  offerings: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  approach: { title: string; description: string }[];
  stack: string[];
  deliverables: string[];
  faqs: { question: string; answer: string }[];
  related: ServiceSlug[];
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  industry: string;
  services: ServiceSlug[];
  stack: string[];
  image: StaticImageData;
  imageAlt: string;
  year: string;
  challenge: string;
  approach: string[];
  features: string[];
  layout: "wide" | "tall" | "square";
};

export type Technology = {
  name: string;
  icon?: { path: string; hex: string };
  monogram?: string;
};

export type TechnologyCategory = {
  id: string;
  label: string;
  description: string;
  items: Technology[];
};
