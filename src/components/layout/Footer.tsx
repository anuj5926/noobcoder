import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { services } from "@/data/services";
import { mainNav, siteConfig, socialLinks } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink pt-20 md:pt-28" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 size-[36rem] rounded-full bg-violet/15 blur-[120px]"
      />

      <div className="container-x relative">
        <div className="grid gap-14 border-b border-white/10 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo variant="dark" />
            <p className="mt-8 max-w-sm text-base leading-relaxed text-muted">
              Noob Coders Team is a creative technology partner for web development, mobile apps, custom software, AI, design,
              cloud and digital marketing.
            </p>
            <p className="mt-8 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              {siteConfig.tagline.replace(".", "")}
              <span className="text-lime">.</span>
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h3 className="eyebrow mb-5">Company</h3>
              <ul className="space-y-3">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="link-underline text-white/80 transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-1">
              <h3 className="eyebrow mb-5">Services</h3>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="link-underline text-white/80 transition-colors hover:text-white"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="eyebrow mb-5">Contact</h3>
              <ul className="space-y-3 text-white/80">
                <li>
                  <a href={`mailto:${siteConfig.contact.email}`} className="link-underline break-all hover:text-white">
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  {siteConfig.contact.phone ? (
                    <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="link-underline hover:text-white">
                      {siteConfig.contact.phone}
                    </a>
                  ) : (
                    <span className="text-muted">{siteConfig.contact.phonePlaceholder}</span>
                  )}
                </li>
              </ul>
              <h3 className="eyebrow mb-4 mt-8">Social</h3>
              <ul className="flex gap-3">
                {socialLinks.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${siteConfig.name} on ${s.name} (opens in a new tab)`}
                      className="grid size-11 place-items-center rounded-full border border-white/15 text-white/80 transition-colors duration-300 hover:border-lime hover:bg-lime hover:text-ink"
                      data-cursor="hover"
                    >
                      <SocialIcon name={s.name} className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <Link
          href="/contact"
          className="group flex items-end justify-between gap-6 py-12 md:py-16"
          data-cursor="hover"
          aria-label="Start a project with Noob Coders Team"
        >
          <span className="display-lg text-white/90 transition-colors duration-500 group-hover:text-lime">Let&apos;s build.</span>
          <ArrowUpRight
            className="mb-2 size-12 shrink-0 text-lime transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:rotate-45 md:size-20"
            aria-hidden="true"
          />
        </Link>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.18em]">{siteConfig.motto}</p>
        </div>
      </div>
    </footer>
  );
}
