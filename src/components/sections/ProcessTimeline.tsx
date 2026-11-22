"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type Step = { number: string; title: string; description: string; detail: string };

export function ProcessTimeline({ steps }: { steps: Step[] }) {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-progress]",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: "[data-steps]", start: "top 60%", end: "bottom 60%", scrub: 0.6 },
          },
        );

        gsap.utils.toArray<HTMLElement>("[data-step]").forEach((step) => {
          gsap.fromTo(
            step.querySelectorAll("[data-step-reveal]"),
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              stagger: 0.08,
              ease: "expo.out",
              scrollTrigger: { trigger: step, start: "top 80%" },
            },
          );
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-step]").forEach((step, i) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top 60%",
          end: "bottom 60%",
          onToggle: (self) => self.isActive && setActive(i),
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  const current = steps[active];

  return (
    <div ref={root} className="grid gap-12 lg:grid-cols-12">
      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-32">
          <div className="relative h-[16rem] overflow-hidden" aria-hidden="true">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={current.number}
                className="absolute inset-0 font-display text-[15rem] font-extrabold leading-none tracking-tighter text-lime"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {current.number}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex gap-2" aria-hidden="true">
            {steps.map((s, i) => (
              <span
                key={s.number}
                className={cn("h-1 flex-1 rounded-full transition-colors duration-500", i <= active ? "bg-lime" : "bg-white/15")}
              />
            ))}
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted" aria-live="polite">
            Step {current.number} — {current.title}
          </p>
        </div>
      </div>

      <div className="relative lg:col-span-7" data-steps>
        <div aria-hidden="true" className="absolute bottom-0 left-[1.15rem] top-0 w-px bg-white/10 md:left-[1.4rem]">
          <div data-progress className="h-full w-full origin-top bg-gradient-to-b from-lime via-lime to-violet" />
        </div>
        <ol className="space-y-6">
          {steps.map((step, i) => (
            <li key={step.number} data-step className="relative pl-14 md:pl-20">
              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-0 top-8 grid size-[2.3rem] place-items-center rounded-full border font-mono text-xs transition-all duration-500 md:size-[2.8rem]",
                  i <= active ? "border-lime bg-lime text-ink" : "border-white/20 bg-ink text-white/60",
                )}
              >
                {step.number}
              </span>
              <div
                className={cn(
                  "rounded-3xl border p-7 transition-[border-color,background-color] duration-700 md:p-10",
                  i === active ? "border-white/20 bg-white/[0.04]" : "border-transparent",
                )}
              >
                <h3 data-step-reveal className="font-display text-4xl font-bold tracking-tight md:text-6xl">
                  <span className="sr-only">Step {step.number}: </span>
                  {step.title}
                </h3>
                <p data-step-reveal className="mt-4 max-w-lg text-lg leading-relaxed text-white/70">
                  {step.description}
                </p>
                <p data-step-reveal className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-lime/80">
                  {step.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
