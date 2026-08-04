"use client";

import Link from "next/link";
import EthicsBanner from "@/components/EthicsBanner";
import LocalAiRecommendation from "@/components/LocalAiRecommendation";
import UnifiedAiPanel from "@/components/UnifiedAiPanel";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import EnglishPageHeader from "@/components/EnglishPageHeader";

/**
 * Dedicated English AI page — same UnifiedAiPanel as the toolbox, but English-branded
 * (not a redirect into the AP-branded /hints hero).
 */
export default function EnglishAiPage() {
  return (
    <div className="space-y-8">
      <EnglishPageHeader
        eyebrow="English · AI Tutor"
        title="English AI"
        description="Grammar, Chinese ↔ English translation, writing feedback, language materials, exam strategy, and practice generators. Prefer Local AI when WebGPU is available — or use Website API / Your own API."
      />

      <section className="flex flex-wrap gap-2 text-sm">
        <Link href="/english" className="btn-secondary">
          English hub
        </Link>
        <Link href="/hints?tool=english" className="btn-secondary">
          Also in AI Toolbox
        </Link>
      </section>

      <LocalAiRecommendation />

      <EthicsBanner />

      <UnifiedAiPanel defaultCategory="english" />

      <UnifiedMediaFrame
        title="English AI · pictures, documents & files"
        folderArea="english"
        spaceKey="ai"
        alsoShow={["document", "folder"]}
      />
    </div>
  );
}
