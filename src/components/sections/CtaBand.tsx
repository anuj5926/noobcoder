import { ButtonLink } from "@/components/ui/Button";
import { RevealText } from "@/components/animations/RevealText";

type CtaBandProps = { title?: string[]; text?: string };

export function CtaBand({
  title = ["Ready when", "you are."],
  text = "Share your idea and we'll come back with honest advice, a clear plan and a realistic estimate.",
}: CtaBandProps) {
  return (
    <section aria-labelledby="cta-heading" className="container-x py-20 md:py-28">
      <div className="relative overflow-hidden rounded-[2rem] bg-violet px-6 py-16 text-white sm:px-12 md:rounded-[3rem] md:px-16 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full bg-lime/30 blur-3xl"
        />
        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
          <RevealText id="cta-heading" className="display-lg uppercase lg:col-span-8" lines={title} />
          <div className="lg:col-span-4">
            <p className="text-lg leading-relaxed text-white/85">{text}</p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="lime">
                Start a project
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
