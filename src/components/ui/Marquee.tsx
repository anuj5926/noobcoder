import { cn } from "@/lib/utils";

type MarqueeProps = { items: string[]; className?: string; reverse?: boolean; separator?: React.ReactNode };

export function Marquee({ items, className, reverse, separator = "✦" }: MarqueeProps) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
          <span>{item}</span>
          <span aria-hidden="true" className="opacity-60">
            {separator}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn("group flex overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
