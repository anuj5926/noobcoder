import { RevealText } from "@/components/animations/RevealText";
import { Reveal } from "@/components/animations/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projectDisclaimer, projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const placements = [
  "md:col-span-7",
  "md:col-span-4 md:col-start-9 md:mt-48",
  "md:col-span-6 md:col-start-2 md:-mt-10",
  "md:col-span-5 md:col-start-8 md:mt-32",
  "md:col-span-4 md:col-start-1 md:-mt-6",
  "md:col-span-7 md:col-start-6 md:mt-24",
];

type PortfolioProps = { limit?: number; showHeader?: boolean; headingLevel?: "h2" | "h3" };

export function Portfolio({ limit, showHeader = true, headingLevel = "h3" }: PortfolioProps) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <section
      id="work"
      aria-labelledby={showHeader ? "work-heading" : undefined}
      aria-label={showHeader ? undefined : "Projects"}
      className="relative py-28 md:py-40"
    >
      <div className="container-x">
        {showHeader && (
          <div className="mb-16 grid gap-8 md:mb-24 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <SectionLabel index="04">Our work</SectionLabel>
              <RevealText
                id="work-heading"
                className="display-lg mt-8 uppercase"
                lines={["Good ideas.", "Better execution."]}
                accentLines={[1]}
                accentClassName="text-violet"
              />
            </div>
            <Reveal className="lg:col-span-4">
              <p className="text-lg leading-relaxed text-muted">
                A selection of concept projects that show how we think, design and build across industries.
              </p>
            </Reveal>
          </div>
        )}

        <p className="mb-12 max-w-2xl rounded-2xl border border-lime/25 bg-lime/[0.04] px-5 py-4 text-sm leading-relaxed text-white/75">
          <span className="font-semibold text-lime">Note: </span>
          {projectDisclaimer}
        </p>

        <div className="grid gap-20 md:grid-cols-12 md:gap-x-10 md:gap-y-28">
          {list.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              headingLevel={headingLevel}
              className={cn(placements[i % placements.length])}
              sizes={project.layout === "wide" ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 768px) 40vw, 100vw"}
            />
          ))}
        </div>

        {limit && (
          <div className="mt-24 flex justify-center">
            <ButtonLink href="/portfolio" variant="lime">
              View all projects
            </ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}
