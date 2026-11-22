import { Mail, Phone } from "lucide-react";
import { RevealText } from "@/components/animations/RevealText";
import { Reveal } from "@/components/animations/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { siteConfig, socialLinks } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export function Contact({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden py-28 md:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 size-[40rem] rounded-full bg-violet/20 blur-[140px]"
      />
      <div className="container-x relative">
        <SectionLabel index="07">Contact</SectionLabel>
        <RevealText
          as={headingLevel}
          id="contact-heading"
          className="display-xl mt-8 uppercase"
          lines={["Have an idea?", "Let's make", "it real."]}
          accentLines={[2]}
          accentClassName="text-lime"
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-lg leading-relaxed text-white/75">
              Tell us about your project — a new product, a redesign, or a system that needs rescuing. We&apos;ll read every word
              and reply with honest next steps.
            </p>

            <dl className="mt-12 space-y-8">
              <div>
                <dt className="eyebrow">Email</dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="link-underline inline-flex items-center gap-3 text-xl font-medium"
                  >
                    <Mail className="size-5 text-lime" aria-hidden="true" />
                    {siteConfig.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Phone</dt>
                <dd className="mt-2 inline-flex items-center gap-3 text-xl font-medium">
                  <Phone className="size-5 text-lime" aria-hidden="true" />
                  {siteConfig.contact.phone ? (
                    <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="link-underline">
                      {siteConfig.contact.phone}
                    </a>
                  ) : (
                    <span className="text-white/50">{siteConfig.contact.phonePlaceholder}</span>
                  )}
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Follow</dt>
                <dd className="mt-3">
                  <ul className="flex flex-wrap gap-3">
                    {socialLinks.map((s) => (
                      <li key={s.name}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm transition-colors duration-300 hover:border-lime hover:bg-lime hover:text-ink"
                        >
                          <SocialIcon name={s.name} className="size-4" />
                          {s.name}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal className="lg:col-span-7 lg:col-start-6" delay={0.1}>
            <div className="rounded-[2rem] border border-white/10 bg-graphite/80 p-6 sm:p-10 md:p-12">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
