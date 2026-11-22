"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import type { ServiceIcon as ServiceIconName } from "@/types";
import { cn, pad } from "@/lib/utils";

export type ShowcaseService = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  icon: ServiceIconName;
  offerings: string[];
};

const ease = [0.16, 1, 0.3, 1] as const;

export function ServicesShowcase({ items }: { items: ShowcaseService[] }) {
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState<number | null>(0);
  const current = items[active];

  return (
    <div className="grid gap-12 lg:grid-cols-12">
      <ol className="lg:col-span-7">
        {items.map((s, i) => {
          const isActive = i === active;
          const isOpen = openMobile === i;
          return (
            <li key={s.slug} className="border-t border-white/10 last:border-b">
              <div className="hidden lg:block">
                <Link
                  href={`/services/${s.slug}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  data-cursor="hover"
                  data-cursor-label="Explore"
                  className="group relative flex items-baseline gap-8 overflow-hidden py-7"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-0 origin-bottom bg-white/[0.03] transition-transform duration-700 ease-[var(--ease-out-expo)]",
                      isActive ? "scale-y-100" : "scale-y-0",
                    )}
                  />
                  <span className={cn("relative font-mono text-sm transition-colors", isActive ? "text-lime" : "text-white/40")}>
                    {pad(i + 1)}
                  </span>
                  <span
                    className={cn(
                      "relative font-display text-[clamp(2rem,3.6vw,3.75rem)] font-bold leading-none tracking-tight transition-[color,transform] duration-700 ease-[var(--ease-out-expo)]",
                      isActive ? "translate-x-4 text-white" : "text-white/35",
                    )}
                  >
                    {s.title}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className={cn(
                      "relative ml-auto size-8 shrink-0 self-center transition-all duration-700 ease-[var(--ease-out-expo)]",
                      isActive ? "rotate-45 text-lime opacity-100" : "text-white/30 opacity-0",
                    )}
                  />
                </Link>
              </div>

              <div className="lg:hidden">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center gap-4 py-6 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`service-panel-${s.slug}`}
                    onClick={() => setOpenMobile(isOpen ? null : i)}
                  >
                    <span className={cn("font-mono text-xs", isOpen ? "text-lime" : "text-white/40")}>{pad(i + 1)}</span>
                    <span className="flex-1 font-display text-3xl font-bold leading-none tracking-tight sm:text-4xl">
                      {s.title}
                    </span>
                    <Plus
                      aria-hidden="true"
                      className={cn("size-6 shrink-0 transition-transform duration-500", isOpen && "rotate-45 text-lime")}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`service-panel-${s.slug}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8">
                        <p className="text-muted">{s.summary}</p>
                        <ul className="mt-5 flex flex-wrap gap-2">
                          {s.offerings.map((o) => (
                            <li key={o} className="rounded-full border border-white/15 px-3 py-1.5 text-sm text-white/80">
                              {o}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={`/services/${s.slug}`}
                          className="mt-6 inline-flex items-center gap-2 font-semibold text-lime"
                        >
                          Explore {s.title}
                          <ArrowUpRight className="size-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-28 h-[min(78vh,40rem)]">
          <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-graphite">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={current.slug}
                className="absolute inset-0 flex flex-col p-10"
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                exit={{ clipPath: "inset(0 0 100% 0)" }}
                transition={{ duration: 0.8, ease }}
              >
                <div
                  aria-hidden="true"
                  className={cn(
                    "absolute -right-20 -top-20 size-80 rounded-full blur-3xl",
                    active % 2 === 0 ? "bg-violet/40" : "bg-lime/20",
                  )}
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-10 -right-4 font-display text-[16rem] font-extrabold leading-none text-white/[0.04]"
                >
                  {pad(active + 1)}
                </span>

                <motion.div
                  className="relative grid size-20 place-items-center rounded-2xl bg-lime text-ink"
                  initial={{ rotate: -20, scale: 0.6 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.9, ease, delay: 0.1 }}
                >
                  <ServiceIcon name={current.icon} className="size-9" strokeWidth={1.75} />
                </motion.div>

                <p className="relative mt-10 font-display text-3xl font-semibold leading-tight tracking-tight">
                  {current.tagline}
                </p>
                <p className="relative mt-4 max-w-md leading-relaxed text-muted">{current.summary}</p>

                <ul className="relative mt-auto flex flex-wrap gap-2">
                  {current.offerings.map((o, i) => (
                    <motion.li
                      key={o}
                      className="rounded-full border border-white/15 bg-ink/40 px-4 py-2 text-sm text-white/85"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease, delay: 0.25 + i * 0.05 }}
                    >
                      {o}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
