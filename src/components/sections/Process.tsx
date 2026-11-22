import { RevealText } from "@/components/animations/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { processSteps } from "@/data/company";
import { ProcessTimeline } from "./ProcessTimeline";

export function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="relative py-28 md:py-40">
      <div className="container-x">
        <div className="mb-16 md:mb-24">
          <SectionLabel index="06">Development process</SectionLabel>
          <RevealText
            id="process-heading"
            className="display-lg mt-8 uppercase"
            lines={["From first call", "to constant evolution."]}
            accentLines={[1]}
            accentClassName="text-outline"
          />
        </div>
        <ProcessTimeline steps={processSteps} />
      </div>
    </section>
  );
}
