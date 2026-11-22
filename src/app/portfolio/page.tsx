import { PageHero } from "@/components/sections/PageHero";
import { Portfolio } from "@/components/sections/Portfolio";
import { CtaBand } from "@/components/sections/CtaBand";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Work — Concept Projects & Case Studies",
  description:
    "Explore concept projects by Noob Coders Team across e-commerce, health, manufacturing, AI, fintech and travel — showing how we design and build digital products.",
  path: "/portfolio",
  keywords: ["web development portfolio", "app development portfolio", "UI/UX case studies"],
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Our Work", path: "/portfolio" }]}
        eyebrow="Selected concepts"
        lines={["Good ideas.", "Better execution."]}
        accentLine={1}
        intro="A showcase of concept projects designed and engineered by our team to demonstrate our process and craft. Real client case studies will be added here as engagements are published."
      />
      <div className="-mt-20 md:-mt-28">
        <Portfolio showHeader={false} headingLevel="h2" />
      </div>
      <CtaBand title={["Your project", "could be next."]} />
    </>
  );
}
