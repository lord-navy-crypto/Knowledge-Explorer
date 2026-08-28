import type { Metadata } from "next";
import ManageGuideClient from "@/components/ManageGuideClient";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: `Manage Guide — ${brand.name}`,
  description:
    "Editor and admin workflow for Knowledge Explorer — unlock, Manage console, uploads, AI Developer, and publishing.",
  robots: { index: false, follow: false },
};

export default function ManageGuidePage() {
  return <ManageGuideClient />;
}
