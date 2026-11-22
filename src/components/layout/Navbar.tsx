"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { mainNav, siteConfig, socialLinks } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/animations/Magnetic";

const homeSections = mainNav.map((n) => n.section);

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    if (!enabled) return;
    const els = homeSections.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [enabled]);

  return active;
}

function activeFromPath(pathname: string) {
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/services")) return "services";
  if (pathname.startsWith("/portfolio")) return "work";
  if (pathname.startsWith("/contact")) return "contact";
  return "home";
}

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const sectionActive = useActiveSection(isHome);
  const active = isHome ? sectionActive : activeFromPath(pathname);

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const menuButton = useRef<HTMLButtonElement>(null);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 400 && y > prev && !open);
  });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-500 ease-[var(--ease-out-expo)]",
          scrolled && !open
            ? "border-b border-white/10 bg-ink/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
          hidden ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-6">
          <Link
            href="/"
            aria-label={`${siteConfig.name} — home`}
            className="relative z-10 flex h-8 items-center md:h-9"
            data-cursor="hover"
          >
            <Image
              src={siteConfig.logo.dark}
              alt={`${siteConfig.name} logo`}
              width={296}
              height={64}
              priority
              unoptimized
              className="h-full w-auto"
            />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
              {mainNav.map((item) => {
                const isActive = active === item.section;
                return (
                  <li key={item.href} className="relative">
                    <Link
                      href={item.href}
                      aria-current={isActive ? (isHome ? "true" : "page") : undefined}
                      className={cn(
                        "relative z-10 block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                        isActive ? "text-ink" : "text-white/70 hover:text-white",
                      )}
                      data-cursor="hover"
                    >
                      {item.label}
                    </Link>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-lime"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        aria-hidden="true"
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="relative z-10 flex items-center gap-3">
            <div className="hidden sm:block">
              <Magnetic>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-violet px-5 py-3 text-sm font-semibold text-white transition-colors duration-500 hover:bg-lime hover:text-ink"
                  data-cursor="hover"
                >
                  Let&apos;s Talk
                  <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
                </Link>
              </Magnetic>
            </div>

            <button
              ref={menuButton}
              type="button"
              className="grid size-12 place-items-center rounded-full border border-white/20 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3 w-5" aria-hidden="true">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-0.5 w-5 bg-white transition-transform duration-500",
                    open && "translate-y-[5px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 w-5 bg-white transition-transform duration-500",
                    open && "-translate-y-[5px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-1/3 size-80 rounded-full bg-violet/30 blur-3xl"
            />
            <nav aria-label="Mobile" className="container-x flex flex-1 flex-col justify-center pt-[var(--header-h)]">
              <ul className="space-y-1">
                {mainNav.map((item, i) => (
                  <li key={item.href} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "110%" }}
                      transition={{ duration: 0.7, delay: 0.15 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={active === item.section ? "page" : undefined}
                        className={cn(
                          "flex items-baseline gap-4 py-1 font-display text-[clamp(2.5rem,11vw,4.5rem)] font-bold leading-none tracking-tight",
                          active === item.section ? "text-lime" : "text-white",
                        )}
                      >
                        <span className="font-mono text-xs font-normal text-white/40">0{i + 1}</span>
                        {item.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.div
              className="container-x flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
              exit={{ opacity: 0 }}
            >
              <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-white/70">
                {siteConfig.contact.email}
              </a>
              <ul className="flex gap-4 text-sm text-white/70">
                {socialLinks.map((s) => (
                  <li key={s.name}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="w-full rounded-full bg-lime px-6 py-4 text-center font-semibold text-ink sm:hidden"
              >
                Let&apos;s Talk
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
