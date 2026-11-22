import { Boxes, Cloud, Globe, LifeBuoy, PenTool, Smartphone, Sparkles, TrendingUp, type LucideProps } from "lucide-react";
import type { ServiceIcon as ServiceIconName } from "@/types";

const map = {
  globe: Globe,
  smartphone: Smartphone,
  boxes: Boxes,
  sparkles: Sparkles,
  "pen-tool": PenTool,
  "trending-up": TrendingUp,
  cloud: Cloud,
  "life-buoy": LifeBuoy,
} satisfies Record<ServiceIconName, React.ComponentType<LucideProps>>;

export function ServiceIcon({ name, ...props }: { name: ServiceIconName } & LucideProps) {
  const Icon = map[name];
  return <Icon aria-hidden="true" {...props} />;
}
