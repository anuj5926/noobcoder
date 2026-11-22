import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Crumb } from "@/lib/schema";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  crumbs: Crumb[];
  eyebrow: string;
  lines: string[];
  accentLine?: number;
  intro: string;
  children?: React.ReactNode;
  srTitle?: string;
  size?: "lg" | "md";
};

export function PageHero({ crumbs, eyebrow, lines, accentLine, intro, children, srTitle, size = "lg" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-[calc(var(--header-h)+3rem)] md:pb-24 md:pt-[calc(var(--header-h)+5rem)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 size-[34rem] rounded-full bg-violet/25 blur-[120px]"
      />
      <div className="container-x relative">
        <div className="fade-up" style={{ ["--d" as string]: "0s" }}>
          <Breadcrumbs items={crumbs} />
        </div>
        <p className="eyebrow fade-up mt-12 flex items-center gap-3" style={{ ["--d" as string]: "0.05s" }}>
          <span className="inline-block size-2 rounded-full bg-lime" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className={cn("mt-6", size === "lg" ? "display-lg max-w-[16ch] uppercase" : "display-md max-w-[22ch]")}>
          {srTitle && <span className="sr-only">{srTitle}</span>}
          {lines.map((line, i) => (
            <span key={i} className="hero-line" aria-hidden={srTitle ? true : undefined}>
              {i > 0 && " "}
              <span style={{ ["--d" as string]: `${0.05 + i * 0.08}s` }} className={cn(i === accentLine && "text-lime")}>
                {line}
              </span>
            </span>
          ))}
        </h1>
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <p
            className="fade-up text-lg leading-relaxed text-white/75 md:text-xl lg:col-span-6"
            style={{ ["--d" as string]: "0.3s" }}
          >
            {intro}
          </p>
          {children && (
            <div className="fade-up lg:col-span-5 lg:col-start-8" style={{ ["--d" as string]: "0.4s" }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
