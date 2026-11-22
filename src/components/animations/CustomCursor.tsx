"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !reduced.matches);
    update();
    fine.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-custom-cursor");

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
    };

    const onOver = (e: PointerEvent) => {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-cursor], a, button, [role='button'], label, select",
      );
      setHover(Boolean(target));
      setLabel(target?.dataset.cursorLabel ?? null);
    };

    const onLeave = () => {
      mx = my = -100;
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      <div ref={dot} className="absolute left-0 top-0">
        <div
          className={`-ml-1 -mt-1 size-2 rounded-full bg-lime transition-opacity duration-200 ${label ? "opacity-0" : "opacity-100"}`}
        />
      </div>
      <div ref={ring} className="absolute left-0 top-0">
        <div
          className={`grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border transition-[width,height,background-color,border-color] duration-500 ease-[var(--ease-out-expo)] ${
            label ? "size-24 border-lime bg-lime" : hover ? "size-14 border-lime/80 bg-lime/10" : "size-9 border-white/40"
          }`}
        >
          {label && <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-ink">{label}</span>}
        </div>
      </div>
    </div>
  );
}
