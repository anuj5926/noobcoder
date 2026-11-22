import { RevealText } from "@/components/animations/RevealText";
import { Reveal } from "@/components/animations/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TechIcon } from "@/components/ui/TechIcon";
import { technologyCategories } from "@/data/technologies";
import { pad } from "@/lib/utils";

export function Technologies() {
  return (
    <section
      id="technologies"
      aria-labelledby="technologies-heading"
      className="relative bg-graphite py-28 [--outline-fill:var(--color-graphite)] md:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div className="container-x relative">
        <div className="mb-16 grid gap-8 md:mb-24 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionLabel index="03">Technologies</SectionLabel>
            <RevealText
              id="technologies-heading"
              className="display-lg mt-8 uppercase"
              lines={["Our technology", "ecosystem."]}
              accentLines={[1]}
              accentClassName="text-outline"
            />
          </div>
          <Reveal className="lg:col-span-4">
            <p className="text-lg leading-relaxed text-muted">
              We choose tools for their reliability, community and long-term support — then master them, so your product is built
              on foundations that last.
            </p>
          </Reveal>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {technologyCategories.map((cat, ci) => (
            <Reveal key={cat.id} className="grid gap-6 py-10 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-4">
                <p className="font-mono text-xs text-lime">{pad(ci + 1)}</p>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-tight">{cat.label}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{cat.description}</p>
              </div>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:col-span-8 lg:grid-cols-4 xl:grid-cols-5">
                {cat.items.map((tech) => (
                  <li
                    key={`${cat.id}-${tech.name}`}
                    className="tech-tile group relative flex aspect-[4/3] flex-col items-start justify-between overflow-hidden rounded-2xl border border-white/10 bg-ink/60 p-5 transition-[border-color,transform,background-color] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-white/30 hover:bg-ink"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-12 -right-12 size-28 rounded-full bg-violet/0 blur-2xl transition-colors duration-700 group-hover:bg-violet/40"
                    />
                    <TechIcon tech={tech} className="relative size-8" />
                    <span className="relative text-sm font-medium text-white/80 transition-colors group-hover:text-white">
                      {tech.name}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
