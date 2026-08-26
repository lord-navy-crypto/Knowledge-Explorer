import type { Metadata } from "next";
import GuideHub from "@/components/GuideHub";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: `Setup & AI Guide — ${brand.name}`,
  description: `Unified setup, AI workflow, deploy, and collaboration guide for ${brand.name}.`,
};

export default function GuidePage() {
  return <GuideHub />;
}
