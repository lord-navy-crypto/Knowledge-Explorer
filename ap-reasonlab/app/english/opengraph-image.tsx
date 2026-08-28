import { buildOgImage } from "@/lib/og-image-shared";

export const runtime = "edge";
export const alt = "English Learning — Knowledge Explorer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function EnglishOpenGraphImage() {
  return buildOgImage("English Learning", "TOEFL, SAT, vocabulary, grammar, and English AI.");
}
