import type { Metadata } from "next";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: `English Learning — ${brand.name}`,
  description:
    "TOEFL and SAT exam lanes, vocabulary and grammar skills, plus English AI in AI Toolbox.",
  openGraph: {
    title: `English Learning — ${brand.name}`,
    description: "TOEFL · SAT · vocabulary · grammar · English AI tutor.",
    type: "website",
  },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return children;
}
