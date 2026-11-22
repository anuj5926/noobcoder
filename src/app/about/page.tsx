import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/animations/Reveal";
import { RevealText } from "@/components/animations/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LogoMark } from "@/components/brand/LogoMark";
import { principles } from "@/data/company";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { pad } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "About Us — A Creative Technology Partner",
  description:
    "Meet Noob Coders Team: a creative technology studio combining design, engineering and strategy to build websites, apps, custom software and AI solutions.",
  path: "/about",
  keywords: ["IT solutions company", "creative technology studio", "web development company", "software development team"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", path: "/about" }]}
        eyebrow="About Noob Coders Team"
        lines={["The studio", "behind the code."]}
        accentLine={1}
        intro="We're a team of designers, engineers and strategists who believe great digital products come from curiosity, craft and honest collaboration."
      />

      <section aria-labelledby="story-heading" className="py-20 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index="01">Our story</SectionLabel>
            <RevealText id="story-heading" className="display-md mt-8 uppercase" lines={["Why “Noob”?"]} />
            <Reveal className="mt-10 hidden lg:block">
              <div className="relative grid aspect-square max-w-sm place-items-center rounded-[2.5rem] border border-white/10 bg-graphite">
                <LogoMark className="size-40" />
                <span className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  [ \ ] — the N mark
                </span>
              </div>
            </Reveal>
          </div>
          <div className="space-y-8 text-lg leading-relaxed text-white/75 lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p>
                Every expert started as a beginner. We kept the word &ldquo;noob&rdquo; in our name as a promise to keep that
                beginner&apos;s mindset: ask the obvious questions, challenge assumptions, and never stop learning.
              </p>
            </Reveal>
            <Reveal>
              <p>
                That curiosity is paired with serious engineering. We build on modern, well-supported technology — Next.js, React
                Native, Python, cloud-native infrastructure — and hold ourselves to clear standards for performance,
                accessibility, security and maintainability.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Our mark tells the same story. Two code brackets and a single slash form the letter N: structure on either side,
                and a bold stroke of creativity cutting through the middle.
              </p>
            </Reveal>
            <Reveal>
              <h2 className="pt-6 font-display text-3xl font-bold text-white">Our mission</h2>
              <p className="mt-4">
                To help businesses turn ambitious ideas into digital products that are useful, beautiful and built to last — and
                to be the kind of technology partner we would want to work with ourselves.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="principles-heading" className="border-y border-white/10 bg-graphite py-20 md:py-32">
        <div className="container-x">
          <SectionLabel index="02">Principles</SectionLabel>
          <RevealText id="principles-heading" className="display-md mt-8 uppercase" lines={["What we stand for."]} />
          <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <li key={p.title} className="group bg-graphite p-8 transition-colors duration-500 hover:bg-ink md:p-10">
                <span className="font-mono text-sm text-lime">{pad(i + 1)}</span>
                <h3 className="mt-10 font-display text-2xl font-bold leading-tight">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{p.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="capabilities-heading" className="py-20 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index="03">Capabilities</SectionLabel>
            <RevealText
              id="capabilities-heading"
              className="display-md mt-8 uppercase"
              lines={["One team.", "Every discipline."]}
            />
            <Reveal className="mt-8">
              <p className="max-w-md text-lg leading-relaxed text-muted">
                Strategy, design, engineering and growth work best when they sit together. Explore the services we offer.
              </p>
            </Reveal>
          </div>
          <ul className="lg:col-span-7">
            {services.map((s) => (
              <li key={s.slug} className="border-t border-white/10 last:border-b">
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-center justify-between gap-6 py-6 transition-colors hover:text-lime"
                >
                  <span className="font-display text-2xl font-bold tracking-tight md:text-3xl">{s.title}</span>
                  <ArrowUpRight
                    className="size-6 shrink-0 transition-transform duration-500 group-hover:rotate-45"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WhyUs />
      <Process />
      <CtaBand title={["Let's build", "together."]} />
    </>
  );
}
