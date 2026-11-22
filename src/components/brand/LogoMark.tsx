import { cn } from "@/lib/utils";

export const markPaths = {
  left: "M6 6h13v7h-4v38h4v7H6z",
  right: "M58 6H45v7h4v38h-4v7h13z",
  slash: "M21.5 6H31l11.5 52H33z",
};

type LogoMarkProps = { className?: string; slashColor?: string; color?: string };

export function LogoMark({ className, slashColor = "#C6FF4D", color = "#FFFFFF" }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("block", className)} aria-hidden="true" focusable="false">
      <path d={markPaths.left} fill={color} />
      <path d={markPaths.right} fill={color} />
      <path d={markPaths.slash} fill={slashColor} />
    </svg>
  );
}
