import { buildOgImage } from "@/lib/og-image-shared";

export const runtime = "edge";
export const alt = "AI Toolbox — Knowledge Explorer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function HintsOpenGraphImage() {
  return buildOgImage(
    "AI Toolbox",
    "Calculator, grapher, Local AI, and subject tutors in one desk."
  );
}
