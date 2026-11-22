import type { Technology } from "@/types";
import { cn } from "@/lib/utils";

const darkBrands = new Set(["#000000", "#0A0A0A", "#1C2024", "#181717"]);

export function TechIcon({ tech, className }: { tech: Technology; className?: string }) {
  if (tech.icon) {
    const brand = darkBrands.has(tech.icon.hex.toUpperCase()) ? "#FFFFFF" : tech.icon.hex;
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        className={cn("tech-icon fill-white/70 transition-[fill,transform] duration-500 ease-[var(--ease-out-expo)]", className)}
        style={{ ["--brand" as string]: brand }}
      >
        <path d={tech.icon.path} />
      </svg>
    );
  }
  return (
    <span
      aria-hidden="true"
      className={cn(
        "tech-icon grid place-items-center rounded-md border border-white/30 font-mono text-[0.6rem] font-bold uppercase leading-none tracking-tight text-white/80 transition-[transform,color,border-color] duration-500 group-hover:border-lime group-hover:text-lime",
        className,
      )}
    >
      {tech.monogram}
    </span>
  );
}
