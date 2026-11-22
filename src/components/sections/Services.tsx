import { RevealText } from "@/components/animations/RevealText";
import { Reveal } from "@/components/animations/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/data/services";
import { ServicesShowcase, type ShowcaseService } from "./ServicesShowcase";

export function Services({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const items: ShowcaseService[] = services.map((s) => ({
    slug: s.slug,
    title: s.title,
    tagline: s.tagline,
    summary: s.summary,
    icon: s.icon,
    offerings: s.offerings.map((o) => o.title),
  }));

  return (
    <section id="services" aria-labelledby="services-heading" className="relative py-28 md:py-40">
      <div className="container-x">
        <div className="mb-16 grid gap-10 md:mb-24 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionLabel index="02">Services</SectionLabel>
            <RevealText
              as={headingLevel}
              id="services-heading"
              className="display-lg mt-8 uppercase"
              lines={["Everything you need", "to build, launch", "and grow."]}
              accentLines={[2]}
              accentClassName="text-lime"
            />
          </div>
          <Reveal className="lg:col-span-4">
            <p className="text-lg leading-relaxed text-muted">
              Eight disciplines, one accountable team. Explore a service to preview what&apos;s included, or open it for the full
              breakdown.
            </p>
            <div className="mt-6">
              <ButtonLink href="/services" variant="outline">
                All services
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <ServicesShowcase items={items} />
      </div>
    </section>
  );
}
