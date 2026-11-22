import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Noob Coders Team — We build digital experiences.";
export const size = ogSize;
export const contentType = "image/png";

export default function TwitterImage() {
  return renderOgImage({ eyebrow: "Creative technology studio", title: "We build digital experiences." });
}
