import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Technologies } from "@/components/sections/Technologies";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/animations/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { JsonLd } from "@/components/seo/JsonLd";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { professionalServiceSchema } from "@/lib/schema";
import { pad } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "IT Services — Web, Mobile, Software, AI, Design & Cloud",
  description:
    "Explore Noob Coders Team services: web development, mobile app development, custom software, AI solutions, UI/UX design, digital marketing, cloud & DevOps and support.",
  path: "/services",
  keywords: ["IT services", "IT solutions company", "web development company", "software development services"],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: "/services" }]}
        eyebrow="What we do"
        lines={["Digital services,", "end to end."]}
        accentLine={1}
        intro="From the first wireframe to the thousandth deployment, our services cover the full lifecycle of a digital product. Pick one discipline or bring us in for the whole journey."
      />

      <section aria-label="All services" className="pb-20 md:pb-32">
        <div className="container-x">
          <ol className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2">
            {services.map((s, i) => (
              <li key={s.slug} className="bg-ink">
                <Reveal className="group relative flex h-full flex-col p-8 transition-colors duration-700 hover:bg-graphite md:p-12">
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-mono text-sm text-lime">{pad(i + 1)}</span>
                    <span className="grid size-14 place-items-center rounded-2xl border border-white/15 transition-colors duration-500 group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
                      <ServiceIcon name={s.icon} className="size-6" strokeWidth={1.75} />
                    </span>
                  </div>
                  <h2 className="mt-10 font-display text-3xl font-bold tracking-tight md:text-4xl">
                    <Link href={`/services/${s.slug}`} className="after:absolute after:inset-0">
                      {s.title}
                    </Link>
                  </h2>
                  <p className="mt-4 max-w-md leading-relaxed text-muted">{s.summary}</p>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {s.offerings.map((o) => (
                      <li key={o.title} className="rounded-full border border-white/12 px-3 py-1.5 text-sm text-white/75">
                        {o.title}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-10 inline-flex items-center gap-2 font-semibold text-lime" aria-hidden="true">
                    Explore service
                    <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
                  </span>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Technologies />
      <CtaBand
        title={["Not sure where", "to start?"]}
        text="Tell us what you're trying to achieve. We'll recommend the right mix of services — and tell you honestly if you don't need something."
      />
      <JsonLd data={professionalServiceSchema()} />
    </>
  );
}
