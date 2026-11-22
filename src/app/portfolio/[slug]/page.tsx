import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getProject, projectDisclaimer, projects } from "@/data/projects";
import { getServices } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return buildMetadata({
    title: `${project.name} — ${project.industry} Concept Project`,
    description: `${project.description} A concept project by Noob Coders Team built with ${project.stack.slice(0, 3).join(", ")}.`,
    path: `/portfolio/${project.slug}`,
    image: { url: project.image.src, alt: project.imageAlt },
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const relatedServices = getServices(project.services);

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Our Work", path: "/portfolio" },
          { name: project.name, path: `/portfolio/${project.slug}` },
        ]}
        eyebrow={`Concept project · ${project.industry}`}
        lines={[project.name]}
        accentLine={0}
        intro={project.tagline}
      >
        <dl className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <dt className="eyebrow">Industry</dt>
            <dd className="mt-2 text-white/85">{project.industry}</dd>
          </div>
          <div>
            <dt className="eyebrow">Type</dt>
            <dd className="mt-2 text-white/85">Concept / demo</dd>
          </div>
          <div className="col-span-2">
            <dt className="eyebrow">Services</dt>
            <dd className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              {relatedServices.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="link-underline text-lime">
                  {s.title}
                </Link>
              ))}
            </dd>
          </div>
        </dl>
      </PageHero>

      <div className="container-x">
        <ImageReveal className="aspect-[16/10] rounded-[2rem] bg-graphite">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            sizes="(min-width: 1536px) 1440px, 100vw"
            placeholder="blur"
            className="object-cover"
          />
        </ImageReveal>
        <p className="mt-4 text-sm text-muted">{projectDisclaimer}</p>
      </div>

      <section aria-labelledby="challenge-heading" className="py-20 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="01">The challenge</SectionLabel>
          </div>
          <div className="lg:col-span-8">
            <h2 id="challenge-heading" className="display-md">
              {project.description}
            </h2>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/75">{project.challenge}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="approach-heading" className="border-y border-white/10 bg-graphite py-20 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="02">Our approach</SectionLabel>
            <h2 id="approach-heading" className="mt-6 font-display text-3xl font-bold tracking-tight md:text-4xl">
              How we&apos;d build it
            </h2>
          </div>
          <ol className="space-y-6 lg:col-span-8">
            {project.approach.map((a, i) => (
              <li key={a} className="flex gap-6 border-t border-white/10 pt-6 text-lg leading-relaxed text-white/80">
                <span className="font-mono text-sm text-lime">0{i + 1}</span>
                {a}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-label="Features and technology" className="py-20 md:py-32">
        <div className="container-x grid gap-16 md:grid-cols-2">
          <div>
            <SectionLabel index="03">Key features</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight">Features</h2>
            <ul className="mt-8 space-y-4">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-lg text-white/80">
                  <Check className="mt-1 size-5 shrink-0 text-lime" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionLabel index="04">Technology</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight">Stack</h2>
            <ul className="mt-8 flex flex-wrap gap-3">
              {project.stack.map((t) => (
                <li key={t} className="rounded-full border border-white/15 px-4 py-2.5 text-white/85">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <nav
        aria-label="Project navigation"
        className="container-x flex flex-col gap-6 border-t border-white/10 py-12 md:flex-row md:items-center md:justify-between"
      >
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white">
          <ArrowLeft className="size-4" aria-hidden="true" />
          All projects
        </Link>
        <Link href={`/portfolio/${next.slug}`} className="group text-right">
          <span className="eyebrow block">Next project</span>
          <span className="mt-2 inline-flex items-center gap-3 font-display text-3xl font-bold tracking-tight transition-colors group-hover:text-lime md:text-5xl">
            {next.name}
            <ArrowUpRight className="size-8 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
          </span>
        </Link>
      </nav>

      <CtaBand title={["Have a similar", "idea?"]} />
    </>
  );
}
