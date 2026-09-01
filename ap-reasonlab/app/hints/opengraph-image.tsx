import { buildOgImage } from "@/lib/og-image-shared";

export const runtime = "edge";
export const alt = "Calculator & Grapher — Knowledge Explorer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function HintsOpenGraphImage() {
  return buildOgImage(
    "Calculator & Grapher",
    "Deterministic calculator and graphing tools with compatibility routing."
  );
}
