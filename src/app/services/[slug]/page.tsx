import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Plus } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/animations/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { JsonLd } from "@/components/seo/JsonLd";
import { getService, getServices, services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { pad } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
    image: { url: `/services/${service.slug}/opengraph-image`, alt: `${service.title} — Noob Coders Team` },
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const index = services.findIndex((s) => s.slug === service.slug);
  const related = getServices(service.related);

  return (
    <>
      <PageHero
        size="md"
        crumbs={[
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
        eyebrow={`Service ${pad(index + 1)} — ${service.title}`}
        lines={[service.h1]}
        intro={service.summary}
      >
        <div className="flex flex-col items-start gap-6">
          <ButtonLink href="/contact" variant="lime">
            Discuss your project
          </ButtonLink>
          <p className="text-sm text-muted">
            Typical stack: <span className="text-white/80">{service.stack.slice(0, 5).join(", ")}</span>
          </p>
        </div>
      </PageHero>

      <section aria-labelledby="overview-heading" className="py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="01">Overview</SectionLabel>
            <h2 id="overview-heading" className="mt-6 font-display text-3xl font-bold tracking-tight md:text-4xl">
              {service.title} at Noob Coders Team
            </h2>
            <div className="mt-10 hidden size-28 place-items-center rounded-3xl bg-lime text-ink lg:grid" aria-hidden="true">
              <ServiceIcon name={service.icon} className="size-12" strokeWidth={1.5} />
            </div>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-white/75 lg:col-span-7 lg:col-start-6">
            {service.intro.map((p, i) => (
              <Reveal key={i}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="offerings-heading" className="border-y border-white/10 bg-graphite py-20 md:py-32">
        <div className="container-x">
          <SectionLabel index="02">What&apos;s included</SectionLabel>
          <h2 id="offerings-heading" className="display-md mt-6 max-w-3xl">
            Our {service.title.toLowerCase()} services
          </h2>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {service.offerings.map((o, i) => (
              <li key={o.title} className="group bg-graphite p-8 transition-colors duration-500 hover:bg-ink md:p-10">
                <span className="font-mono text-sm text-lime">{pad(i + 1)}</span>
                <h3 className="mt-8 font-display text-2xl font-bold tracking-tight">{o.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{o.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="benefits-heading" className="py-20 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index="03">Why it matters</SectionLabel>
            <h2 id="benefits-heading" className="display-md mt-6">
              What you gain
            </h2>
          </div>
          <ul className="space-y-4 lg:col-span-7">
            {service.benefits.map((b) => (
              <Reveal as="li" key={b.title} className="flex gap-5 rounded-3xl border border-white/10 p-7">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-violet" aria-hidden="true">
                  <Check className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold">{b.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{b.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="approach-heading" className="rounded-[2.5rem] bg-paper py-20 text-ink md:rounded-[4rem] md:py-32">
        <div className="container-x">
          <SectionLabel index="04" tone="light">
            How we work
          </SectionLabel>
          <h2 id="approach-heading" className="display-md mt-6 max-w-3xl">
            Our approach to {service.title.toLowerCase()}
          </h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {service.approach.map((step, i) => (
              <li key={step.title} className="border-t-2 border-ink pt-6">
                <span className="font-mono text-sm text-violet">Step {pad(i + 1)}</span>
                <h3 className="mt-4 font-display text-2xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-label="Technology and deliverables" className="py-20 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <div>
            <SectionLabel index="05">Technology</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight md:text-4xl">Tools we use</h2>
            <ul className="mt-8 flex flex-wrap gap-3">
              {service.stack.map((t) => (
                <li key={t} className="rounded-full border border-white/15 px-4 py-2.5 text-white/85">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionLabel index="06">Deliverables</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight md:text-4xl">What you receive</h2>
            <ul className="mt-8 space-y-4">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-lg text-white/80">
                  <Check className="mt-1 size-5 shrink-0 text-lime" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="border-t border-white/10 py-20 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="07">FAQ</SectionLabel>
            <h2 id="faq-heading" className="mt-6 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="lg:col-span-8">
            {service.faqs.map((f) => (
              <details key={f.question} className="group border-t border-white/10 py-6 last:border-b">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-semibold [&::-webkit-details-marker]:hidden">
                  <h3>{f.question}</h3>
                  <Plus
                    className="size-6 shrink-0 text-lime transition-transform duration-500 group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="related-heading" className="py-20 md:py-28">
        <div className="container-x">
          <SectionLabel index="08">Keep exploring</SectionLabel>
          <h2 id="related-heading" className="mt-6 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Related services
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/services/${r.slug}`}
                  className="group flex h-full flex-col justify-between gap-10 rounded-3xl border border-white/10 p-8 transition-colors duration-500 hover:border-lime hover:bg-white/[0.03]"
                >
                  <ServiceIcon name={r.icon} className="size-7 text-lime" strokeWidth={1.75} />
                  <div>
                    <span className="flex items-center justify-between gap-4 font-display text-2xl font-bold">
                      {r.title}
                      <ArrowUpRight
                        className="size-5 shrink-0 transition-transform duration-500 group-hover:rotate-45"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="mt-2 block text-sm text-muted">{r.tagline}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={["Ready to", "get started?"]}
        text={`Tell us about your goals and we'll suggest the right ${service.title.toLowerCase()} approach, timeline and budget range.`}
      />
      <JsonLd data={serviceSchema(service)} />
    </>
  );
}
