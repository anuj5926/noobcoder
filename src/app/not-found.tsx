import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/brand/LogoMark";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[100svh] flex-col justify-center pb-20 pt-[calc(var(--header-h)+3rem)]">
      <LogoMark className="size-16" />
      <p className="eyebrow mt-10">Error 404</p>
      <h1 className="display-lg mt-4 uppercase">
        This page <span className="text-lime">doesn&apos;t compile.</span>
      </h1>
      <p className="mt-6 max-w-lg text-lg text-muted">
        The page you&apos;re looking for may have moved or never existed. Here are some places to start instead.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/" variant="lime">
          Back to home
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          Contact us
        </ButtonLink>
      </div>
      <nav aria-label="Popular pages" className="mt-16">
        <h2 className="eyebrow">Popular services</h2>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="link-underline text-white/80 hover:text-white">
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
