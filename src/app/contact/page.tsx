import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Contact } from "@/components/sections/Contact";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us — Start Your Project",
  description:
    "Have an idea? Contact Noob Coders Team about web development, mobile apps, custom software, AI, UI/UX design, cloud or digital marketing projects.",
  path: "/contact",
  keywords: ["contact web development company", "hire app developers", "software development quote"],
});

export default function ContactPage() {
  return (
    <div className="pt-[calc(var(--header-h)+2rem)]">
      <div className="container-x">
        <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
      </div>
      <div className="-mt-12 md:-mt-20">
        <Contact headingLevel="h1" />
      </div>
    </div>
  );
}
