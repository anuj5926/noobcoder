import { Hero } from "@/components/sections/Hero";
import { ServiceMarquee } from "@/components/sections/ServiceMarquee";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Technologies } from "@/components/sections/Technologies";
import { Portfolio } from "@/components/sections/Portfolio";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { professionalServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Noob Coders Team | Web Development, AI & IT Solutions",
  absoluteTitle: true,
  description: siteConfig.description,
  path: "/",
  keywords: [
    "web development company",
    "IT solutions company",
    "Next.js development services",
    "mobile app development company",
    "custom software development",
    "AI development services",
    "UI/UX design services",
    "digital marketing services",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceMarquee />
      <About />
      <Services />
      <Technologies />
      <Portfolio limit={4} />
      <WhyUs />
      <Process />
      <Contact />
      <JsonLd data={professionalServiceSchema()} />
    </>
  );
}
