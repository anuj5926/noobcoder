import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/portfolio", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: absoluteUrl(r.path),
      lastModified,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...services.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...projects.map((p) => ({
      url: absoluteUrl(`/portfolio/${p.slug}`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
