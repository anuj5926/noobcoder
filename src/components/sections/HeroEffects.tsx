"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export function HeroEffects({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to("[data-hero-parallax]", {
          yPercent: (i, target) => Number((target as HTMLElement).dataset.heroParallax) * -100,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to("[data-hero-fade]", {
          opacity: 0,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top top", end: "55% top", scrub: true },
        });
      });

      mm.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
        const spot = el.querySelector<HTMLElement>("[data-hero-spot]");
        if (!spot) return;
        const xTo = gsap.quickTo(spot, "x", { duration: 0.8, ease: "power3" });
        const yTo = gsap.quickTo(spot, "y", { duration: 0.8, ease: "power3" });
        const onMove = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          xTo(e.clientX - r.left);
          yTo(e.clientY - r.top);
        };
        el.addEventListener("pointermove", onMove);
        return () => el.removeEventListener("pointermove", onMove);
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div ref={root} className="relative">
      <div
        data-hero-spot
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 hidden size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/[0.07] blur-3xl md:block"
      />
      {children}
    </div>
  );
}
