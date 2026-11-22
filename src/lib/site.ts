const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";

function optional(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

export const siteConfig = {
  name: "Noob Coders Team",
  shortName: "Noob Coders",
  url: rawUrl.replace(/\/$/, ""),
  tagline: "Turning ideas into digital reality.",
  motto: "Creative minds. Serious technology. Powerful digital solutions.",
  description:
    "Noob Coders Team delivers modern IT solutions including web development, mobile apps, custom software, AI integration, UI/UX design, cloud services and digital marketing.",
  locale: "en_US",
  themeColor: "#090909",
  colors: {
    ink: "#090909",
    graphite: "#151515",
    paper: "#F5F3EF",
    violet: "#7957FF",
    lime: "#C6FF4D",
  },
  logo: {
    light: "/brand/logo.svg",
    dark: "/brand/logo-dark.svg",
    white: "/brand/logo-white.svg",
    icon: "/brand/logo-icon.svg",
    favicon: "/brand/favicon.svg",
  },
  contact: {
    email: optional(process.env.NEXT_PUBLIC_CONTACT_EMAIL) ?? "panuj8822@gmail.com",
    phone: optional(process.env.NEXT_PUBLIC_CONTACT_PHONE),
    phonePlaceholder: "+91 9548159949",
  },
  social: {
    linkedin: optional(process.env.NEXT_PUBLIC_LINKEDIN_URL),
    instagram: optional(process.env.NEXT_PUBLIC_INSTAGRAM_URL),
    github: optional(process.env.NEXT_PUBLIC_GITHUB_URL),
  },
} as const;

export const socialLinks = [
  {
    name: "LinkedIn",
    href: siteConfig.social.linkedin ?? "linkedin.com/company/noob-coders/",
    configured: Boolean(siteConfig.social.linkedin),
  },
  // {
  //   name: "Instagram",
  //   href: siteConfig.social.instagram ?? "https://www.instagram.com/",
  //   configured: Boolean(siteConfig.social.instagram),
  // },
  // { name: "GitHub", href: siteConfig.social.github ?? "https://github.com/", configured: Boolean(siteConfig.social.github) },
] as const;

export const mainNav = [
  { label: "Home", href: "/", section: "home" },
  { label: "About", href: "/about", section: "about" },
  { label: "Services", href: "/services", section: "services" },
  { label: "Technologies", href: "/#technologies", section: "technologies" },
  { label: "Our Work", href: "/portfolio", section: "work" },
  { label: "Contact", href: "/contact", section: "contact" },
] as const;

export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
