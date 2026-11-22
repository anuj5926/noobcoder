import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: { url: string; alt: string };
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

const defaultImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Noob Coders Team — Creative minds. Serious technology.",
};

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  image,
  absoluteTitle = false,
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  const images = image ? [{ ...defaultImage, ...image }] : [defaultImage];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url,
      title: fullTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: images.map((i) => i.url),
    },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  };
}
