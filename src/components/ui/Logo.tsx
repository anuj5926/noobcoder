import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "dark" | "light" | "white";
  className?: string;
  priority?: boolean;
  href?: string | null;
};

const sources = {
  dark: siteConfig.logo.dark,
  light: siteConfig.logo.light,
  white: siteConfig.logo.white,
};

export function Logo({ variant = "dark", className, priority, href = "/" }: LogoProps) {
  const img = (
    <Image
      src={sources[variant]}
      alt={`${siteConfig.name} logo`}
      width={296}
      height={64}
      priority={priority}
      unoptimized
      className={cn("h-full w-auto", className)}
    />
  );

  if (!href) return img;

  return (
    <Link href={href} aria-label={`${siteConfig.name} — home`} className="inline-flex h-9 items-center md:h-10">
      {img}
    </Link>
  );
}
