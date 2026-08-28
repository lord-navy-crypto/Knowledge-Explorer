import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

export function buildOgImage(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 45%, #0f766e 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 24, fontWeight: 600, opacity: 0.85 }}>Knowledge Explorer</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 960 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>{title}</div>
          <div style={{ fontSize: 28, lineHeight: 1.35, opacity: 0.92 }}>{subtitle}</div>
        </div>
        <div style={{ fontSize: 20, opacity: 0.75 }}>ap-webside.vercel.app</div>
      </div>
    ),
    OG_SIZE
  );
}
