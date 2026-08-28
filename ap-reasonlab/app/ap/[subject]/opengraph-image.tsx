import { ImageResponse } from "next/og";
import { AP_CATALOG } from "@/data/ap-catalog";
import { buildOgImage } from "@/lib/og-image-shared";

export const runtime = "edge";
export const alt = "AP subject — Knowledge Explorer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ subject: string }> }) {
  const { subject: slug } = await params;
  const entry = AP_CATALOG.find((s) => s.slug === slug);
  const title = entry?.name || slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const subtitle = entry?.description || "Concepts, formulas, practice, and AI study tools.";
  return buildOgImage(title, subtitle);
}
