import { ImageResponse } from "next/og";
import { brand } from "@/data/brand";

export const runtime = "edge";
export const alt = `${brand.name} — Academic Box & Platform`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#f59e0b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            KE
          </div>
          <span style={{ fontSize: 28, fontWeight: 600, opacity: 0.9 }}>Academic Box</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 900 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            {brand.name}
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, opacity: 0.92 }}>{brand.tagline}</div>
        </div>
        <div style={{ fontSize: 22, opacity: 0.75 }}>AP · English · Tools · Forum · AI Toolbox</div>
      </div>
    ),
    { ...size }
  );
}
