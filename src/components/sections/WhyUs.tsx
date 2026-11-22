import { RevealText } from "@/components/animations/RevealText";
import { Reveal } from "@/components/animations/Reveal";
import { LogoMark } from "@/components/brand/LogoMark";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { reasons } from "@/data/company";
import { pad } from "@/lib/utils";

export function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-heading"
      className="relative overflow-hidden rounded-[2.5rem] bg-paper py-28 text-ink md:rounded-[4rem] md:py-40"
    >
      <div className="container-x grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionLabel index="05" tone="light">
              Why choose us
            </SectionLabel>
            <RevealText
              id="why-heading"
              className="display-md mt-8 uppercase"
              lines={["Creative minds.", "Serious", "technology."]}
              accentLines={[0]}
              accentClassName="text-violet"
            />
            <Reveal className="mt-10 max-w-sm">
              <p className="text-lg leading-relaxed text-ink/70">
                We combine the imagination of a design studio with the rigour of an engineering team — and we stay honest about
                what we can deliver.
              </p>
            </Reveal>
            <div className="mt-12 hidden lg:block" aria-hidden="true">
              <LogoMark className="size-24 animate-spin-slow [animation-duration:30s]" color="#090909" slashColor="#7957FF" />
            </div>
          </div>
        </div>

        <ol className="lg:col-span-7">
          {reasons.map((r, i) => (
            <li key={r.title} className="group relative border-t border-ink/15 last:border-b">
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-x-100"
              />
              <Reveal className="relative grid grid-cols-[3rem_1fr] gap-4 px-2 py-8 transition-colors duration-500 group-hover:text-white md:grid-cols-[4rem_1fr_1fr] md:gap-8 md:px-6 md:py-10">
                <span className="font-mono text-sm text-violet transition-colors group-hover:text-lime">{pad(i + 1)}</span>
                <h3 className="font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl">{r.title}</h3>
                <p className="col-start-2 leading-relaxed text-ink/65 transition-colors group-hover:text-white/70 md:col-start-3">
                  {r.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
