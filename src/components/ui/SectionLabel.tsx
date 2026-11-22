import { cn } from "@/lib/utils";

type SectionLabelProps = { index?: string; children: React.ReactNode; className?: string; tone?: "dark" | "light" };

export function SectionLabel({ index, children, className, tone = "dark" }: SectionLabelProps) {
  return (
    <p className={cn("eyebrow flex items-center gap-3", tone === "light" && "text-ink/60", className)}>
      {index && <span className={tone === "light" ? "text-violet" : "text-lime"}>{index}</span>}
      <span aria-hidden="true" className={cn("h-px w-10", tone === "light" ? "bg-ink/30" : "bg-white/30")} />
      <span>{children}</span>
    </p>
  );
}
