import type { Service } from "@/types";
import { absoluteUrl, siteConfig } from "./site";
import { services } from "@/data/services";

const orgId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;

function sameAs() {
  return Object.values(siteConfig.social).filter((v): v is string => Boolean(v));
}

function contactPoint() {
  const hasRealEmail = Boolean(process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim());
  if (!hasRealEmail && !siteConfig.contact.phone) return undefined;
  return [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      ...(hasRealEmail ? { email: siteConfig.contact.email } : {}),
      ...(siteConfig.contact.phone ? { telephone: siteConfig.contact.phone } : {}),
      availableLanguage: ["English"],
    },
  ];
}

export function organizationSchema() {
  const links = sameAs();
  const contact = contactPoint();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/brand/logo-icon.svg"),
    },
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    ...(links.length ? { sameAs: links } : {}),
    ...(contact ? { contactPoint: contact } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: { "@id": orgId },
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#professional-service`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl("/opengraph-image"),
    description: siteConfig.description,
    parentOrganization: { "@id": orgId },
    ...(siteConfig.contact.phone ? { telephone: siteConfig.contact.phone } : {}),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital and technology services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: absoluteUrl(`/services/${s.slug}`),
        },
      })),
    },
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/services/${service.slug}`)}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: { "@id": orgId, "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.offerings.map((o) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: o.title, description: o.description },
      })),
    },
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
