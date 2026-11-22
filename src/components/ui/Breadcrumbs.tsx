import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="eyebrow">
        <ol className="flex flex-wrap items-center gap-2">
          {all.map((item, i) => {
            const last = i === all.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-white">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link href={item.path} className="link-underline transition-colors hover:text-white">
                      {item.name}
                    </Link>
                    <ChevronRight className="size-3 text-white/40" aria-hidden="true" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(all)} />
    </>
  );
}
