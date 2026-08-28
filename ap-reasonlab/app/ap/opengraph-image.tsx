import { buildOgImage } from "@/lib/og-image-shared";

export const runtime = "edge";
export const alt = "AP Subject Library — Knowledge Explorer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function ApOpenGraphImage() {
  return buildOgImage(
    "AP Subject Library",
    "Concepts, formulas, practice, and AI Toolbox by subject."
  );
}
