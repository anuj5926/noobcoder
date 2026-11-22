import { RevealText } from "@/components/animations/RevealText";
import { Reveal } from "@/components/animations/Reveal";
import { Parallax } from "@/components/animations/Parallax";
import { ButtonLink } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { principles } from "@/data/company";

function ManifestoCard() {
  return (
    <figure className="relative overflow-hidden rounded-3xl border border-white/10 bg-graphite shadow-2xl shadow-violet/10">
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4" aria-hidden="true">
        <span className="size-3 rounded-full bg-white/15" />
        <span className="size-3 rounded-full bg-white/15" />
        <span className="size-3 rounded-full bg-lime" />
        <span className="ml-3 font-mono text-xs text-muted">manifesto.ts</span>
      </div>
      <pre className="overflow-x-auto p-6 font-mono text-[0.8rem] leading-7 md:p-8 md:text-sm">
        <code>
          <span className="text-violet-soft">const</span> <span className="text-white">noobCoders</span>{" "}
          <span className="text-white/50">=</span> {"{"}
          {"\n"}
          {"  "}mindset: <span className="text-lime">&quot;curious&quot;</span>,{"\n"}
          {"  "}craft: [<span className="text-lime">&quot;design&quot;</span>,{" "}
          <span className="text-lime">&quot;engineering&quot;</span>],
          {"\n"}
          {"  "}standards: <span className="text-lime">&quot;uncompromising&quot;</span>,{"\n"}
          {"  "}communication: <span className="text-lime">&quot;transparent&quot;</span>,{"\n"}
          {"  "}
          <span className="text-violet-soft">next</span>: (idea) <span className="text-white/50">=&gt;</span> build(idea),{"\n"}
          {"}"};{"\n\n"}
          <span className="text-white/40">{"// you bring the idea. we ship the product."}</span>
          {"\n"}
          noobCoders.<span className="text-violet-soft">next</span>(yourIdea)
          <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-lime" aria-hidden="true" />
        </code>
      </pre>
      <figcaption className="sr-only">
        Our philosophy expressed as code: curious mindset, design and engineering craft, uncompromising standards and transparent
        communication.
      </figcaption>
    </figure>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative py-28 md:py-40">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <SectionLabel index="01">About us</SectionLabel>
          <RevealText
            as="h2"
            id="about-heading"
            className="display-lg mt-8 uppercase"
            lines={["We're not", "just coding.", "We're creating", "what's next."]}
            accentLines={[2, 3]}
            accentClassName="text-violet"
          />

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <Reveal>
              <h3 className="text-lg font-semibold">Our philosophy</h3>
              <p className="mt-3 leading-relaxed text-muted">
                The name is a reminder. We approach every project with a beginner&apos;s curiosity — asking the questions others
                skip — and back it with the discipline of experienced engineers.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 className="text-lg font-semibold">How we engineer</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Typed code, reusable components, automated tests and performance budgets. We build products that are fast today
                and still easy to change two years from now.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <h3 className="text-lg font-semibold">Innovation with purpose</h3>
              <p className="mt-3 leading-relaxed text-muted">
                From AI features to immersive interfaces, we adopt new technology when it creates real value for your users —
                never just because it is new.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <h3 className="text-lg font-semibold">Committed to quality</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Accessibility, security and SEO are part of our definition of done. We stay accountable long after launch.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-12">
            <ButtonLink href="/about" variant="outline">
              More about our studio
            </ButtonLink>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Parallax speed={0.08}>
              <ManifestoCard />
            </Parallax>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {principles.map((p, i) => (
                <li
                  key={p.title}
                  className="rounded-2xl border border-white/10 p-5 transition-colors duration-500 hover:border-lime/50 hover:bg-white/[0.02]"
                >
                  <span className="font-mono text-xs text-lime">0{i + 1}</span>
                  <p className="mt-3 text-sm font-semibold leading-snug">{p.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{p.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
