import { Marquee } from "@/components/ui/Marquee";
import { services } from "@/data/services";

export function ServiceMarquee() {
  const names = services.map((s) => s.title);
  return (
    <div aria-label="What we do" role="region" className="relative z-10 -my-2 overflow-hidden py-10">
      <div className="-rotate-2 bg-lime py-4 text-ink md:py-5">
        <Marquee items={names} className="font-display text-2xl font-bold uppercase tracking-tight md:text-4xl" />
      </div>
      <div className="mt-[-1.25rem] rotate-1 border-y border-white/10 bg-graphite py-3 text-white/50">
        <Marquee items={names} reverse className="font-mono text-xs uppercase tracking-[0.25em]" separator="/" />
      </div>
    </div>
  );
}
