import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { HeroVisual } from "@/components/three/HeroVisual";
import { HeroEffects } from "./HeroEffects";

const delay = (s: number) => ({ ["--d" as string]: `${s}s` });

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative isolate min-h-[100svh] overflow-hidden">
      <HeroEffects>
        <HeroVisual />

        <div className="container-x relative z-10 flex min-h-[100svh] flex-col justify-between pb-10 pt-[calc(var(--header-h)+2rem)] md:pb-12">
          <div className="fade-up flex items-center justify-between gap-6" style={delay(0.1)} data-hero-fade>
            <p className="eyebrow flex items-center gap-3">
              <span className="inline-block size-2 animate-pulse rounded-full bg-lime" aria-hidden="true" />
              Creative technology studio
            </p>
            <p className="eyebrow hidden md:block">Web · Mobile · Software · AI · Cloud</p>
          </div>

          <div className="py-12 md:py-0" data-hero-parallax="0.18">
            <h1 id="hero-heading" className="display-xl uppercase">
              <span className="hero-line">
                <span style={delay(0)}>We build</span>
              </span>{" "}
              <span className="hero-line">
                <span style={delay(0.08)} className="flex items-center gap-[0.2em]">
                  <span className="text-outline">Digital</span>
                  <span
                    aria-hidden="true"
                    className="hidden h-[0.62em] w-[1.6em] items-center justify-center rounded-full bg-violet font-mono text-[0.22em] font-medium tracking-normal normal-case text-white sm:inline-flex"
                  >
                    &lt;/&gt;
                  </span>
                </span>
              </span>{" "}
              <span className="hero-line">
                <span style={delay(0.16)}>
                  Experiences<span className="text-lime">.</span>
                </span>
              </span>
            </h1>
          </div>

          <div className="grid items-end gap-10 md:grid-cols-12" data-hero-fade>
            <div className="md:col-span-6 lg:col-span-5">
              <p className="fade-up max-w-md text-lg leading-relaxed text-white/75 md:text-xl" style={delay(0.35)}>
                We are Noob Coders Team — a creative technology partner helping businesses transform ambitious ideas into powerful
                digital products.
              </p>
              <div className="fade-up mt-8 flex flex-wrap gap-3" style={delay(0.45)}>
                <ButtonLink href="/contact" variant="lime">
                  Let&apos;s Build Something
                </ButtonLink>
                <ButtonLink href="/portfolio" variant="outline">
                  Explore Our Work
                </ButtonLink>
              </div>
            </div>

            <div className="fade-up hidden justify-end md:col-span-6 md:flex lg:col-span-7" style={delay(0.6)}>
              <Link
                href="#about"
                className="group flex items-center gap-4 text-sm text-white/60 transition-colors hover:text-white"
                aria-label="Scroll to the About section"
              >
                <span className="eyebrow">Scroll to explore</span>
                <span className="relative flex h-14 w-8 justify-center overflow-hidden rounded-full border border-white/25">
                  <span className="mt-2 block h-3 w-0.5 animate-scroll-dot rounded-full bg-lime" />
                </span>
                <ArrowDown className="size-4 transition-transform group-hover:translate-y-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </HeroEffects>
    </section>
  );
}
