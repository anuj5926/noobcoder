import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ImageReveal } from "@/components/animations/ImageReveal";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const aspect: Record<Project["layout"], string> = {
  wide: "aspect-[4/3] md:aspect-[16/11]",
  tall: "aspect-[4/5]",
  square: "aspect-square",
};

type ProjectCardProps = {
  project: Project;
  index: number;
  className?: string;
  headingLevel?: "h2" | "h3";
  sizes?: string;
};

export function ProjectCard({
  project,
  index,
  className,
  headingLevel = "h3",
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: ProjectCardProps) {
  const Heading = headingLevel;
  const href = `/portfolio/${project.slug}`;
  return (
    <article className={cn("group", className)}>
      <Link href={href} data-cursor-label="View" aria-label={`View the ${project.name} concept project`} className="block">
        <ImageReveal className={cn("rounded-3xl bg-graphite", aspect[project.layout])}>
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes={sizes}
            placeholder="blur"
            className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-lime backdrop-blur-sm">
            Concept project
          </span>
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
        </ImageReveal>
      </Link>

      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <p className="eyebrow">
            <span className="text-lime">{String(index + 1).padStart(2, "0")}</span> · {project.industry}
          </p>
          <Heading className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
            <Link href={href} className="link-underline">
              {project.name}
            </Link>
          </Heading>
          <p className="mt-3 max-w-lg leading-relaxed text-muted">{project.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.name} technology stack`}>
            {project.stack.map((t) => (
              <li key={t} className="rounded-full border border-white/12 px-3 py-1 text-xs text-white/70">
                {t}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={href}
          className="grid size-14 shrink-0 place-items-center rounded-full border border-white/20 transition-colors duration-500 group-hover:border-lime group-hover:bg-lime group-hover:text-ink"
          aria-label={`${project.name} project details`}
        >
          <ArrowUpRight className="size-5 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
