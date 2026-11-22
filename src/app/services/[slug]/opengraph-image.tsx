import { getService, services } from "@/data/services";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Noob Coders Team service";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  return renderOgImage({ eyebrow: "Services", title: service?.title ?? "Digital services" });
}
