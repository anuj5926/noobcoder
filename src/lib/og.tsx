import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "./site";

export const ogSize = { width: 1200, height: 630 };

async function loadDisplayFont(text: string) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800&text=${encodeURIComponent(text)}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

async function logoDataUri() {
  const svg = await readFile(path.join(process.cwd(), "public", "brand", "logo-dark.svg"));
  return `data:image/svg+xml;base64,${svg.toString("base64")}`;
}

export async function renderOgImage({ eyebrow, title }: { eyebrow: string; title: string }) {
  const host = siteConfig.url.replace(/^https?:\/\//, "");
  const glyphs = `${title.toUpperCase()}${eyebrow.toUpperCase()}${siteConfig.motto}${host}`;
  const [logo, font] = await Promise.all([logoDataUri(), loadDisplayFont(Array.from(new Set(glyphs)).join(""))]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: "#090909",
        color: "#FFFFFF",
        position: "relative",
        fontFamily: font ? "Display" : "sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -160,
          top: -160,
          width: 620,
          height: 620,
          borderRadius: 9999,
          background: "radial-gradient(circle, rgba(121,87,255,0.75) 0%, rgba(121,87,255,0) 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 70,
          bottom: -80,
          width: 56,
          height: 400,
          background: "#C6FF4D",
          transform: "rotate(-14deg)",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={370} height={80} alt="" />
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#A0A0A0", textTransform: "uppercase" }}>
          {eyebrow}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: title.length > 24 ? 92 : 108,
          lineHeight: 0.95,
          letterSpacing: -3,
          fontWeight: 800,
          textTransform: "uppercase",
          maxWidth: 880,
        }}
      >
        {title}
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-between", gap: 40, fontSize: 19, color: "#A0A0A0", paddingRight: 130 }}
      >
        <span>{siteConfig.motto}</span>
        <span style={{ color: "#C6FF4D" }}>{host}</span>
      </div>
    </div>,
    {
      ...ogSize,
      fonts: font ? [{ name: "Display", data: font, weight: 800, style: "normal" }] : undefined,
    },
  );
}
