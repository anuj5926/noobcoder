import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { Magnetic } from "@/components/animations/Magnetic";
import { cn } from "@/lib/utils";

type Variant = "lime" | "violet" | "outline" | "ink";

const variants: Record<Variant, string> = {
  lime: "bg-lime text-ink hover:bg-white",
  violet: "bg-violet text-white hover:bg-white hover:text-ink",
  outline: "border border-white/25 text-white hover:border-white hover:bg-white hover:text-ink",
  ink: "bg-ink text-white hover:bg-violet",
};

export const buttonClasses = (variant: Variant = "lime", className?: string) =>
  cn(
    "group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-6 py-4 text-sm font-semibold tracking-tight transition-colors duration-500 ease-[var(--ease-out-expo)] md:px-7 md:text-base",
    variants[variant],
    className,
  );

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  icon?: boolean;
  magnetic?: boolean;
};

export function ButtonLink({ variant = "lime", className, children, icon = true, magnetic = true, ...props }: ButtonLinkProps) {
  const link = (
    <Link {...props} className={buttonClasses(variant, className)} data-cursor="hover">
      <span className="relative">{children}</span>
      {icon && (
        <span className="relative grid size-6 place-items-center overflow-hidden" aria-hidden="true">
          <ArrowUpRight className="size-5 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-6 group-hover:translate-x-6" />
          <ArrowUpRight className="absolute size-5 -translate-x-6 translate-y-6 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-0 group-hover:translate-y-0" />
        </span>
      )}
    </Link>
  );
  return magnetic ? <Magnetic>{link}</Magnetic> : link;
}
