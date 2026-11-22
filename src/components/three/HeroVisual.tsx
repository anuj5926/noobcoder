"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export function HeroVisual() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduced || saveData || !supportsWebGL()) return;

    const start = () => setMount(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }
    const t = setTimeout(start, 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute left-[70%] top-[22%] size-[min(80vw,34rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_35%,#9b84ff_0%,#7957ff_30%,#2a1a6e_60%,transparent_72%)] opacity-50 blur-2xl md:top-1/2 md:opacity-60" />
      {mount && (
        <div className="absolute -right-[20%] top-0 h-[52%] w-[95%] opacity-80 md:inset-y-0 md:left-[40%] md:right-0 md:h-auto md:w-auto md:opacity-100">
          <HeroScene />
        </div>
      )}
    </div>
  );
}
