"use client";

import Link from "next/link";
import EthicsBanner from "@/components/EthicsBanner";
import LocalAiRecommendation from "@/components/LocalAiRecommendation";
import UnifiedAiPanel from "@/components/UnifiedAiPanel";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import EnglishPageHeader from "@/components/EnglishPageHeader";

/** Dedicated English AI workspace, separated from the former global AI Toolbox. */
export default function EnglishAiPage() {
  return (
    <div className="space-y-8">
      <EnglishPageHeader
        eyebrow="English · AI for English"
        title="AI for English"
        description="Grammar, Chinese ↔ English translation, writing feedback, language materials, exam strategy, and practice generators. Prefer Local AI when WebGPU is available — or use Website API / Your own API."
      />

      <section className="flex flex-wrap gap-2 text-sm">
        <Link href="/english" className="btn-secondary">
          English hub
        </Link>
        <Link href="/easy-local-ai" className="btn-secondary">
          General Easy Local AI
        </Link>
      </section>

      <LocalAiRecommendation />
      <EthicsBanner />
      <UnifiedAiPanel defaultCategory="english" />

      <UnifiedMediaFrame
        title="AI for English · pictures, documents & files"
        folderArea="english"
        spaceKey="ai"
        alsoShow={["document", "folder"]}
      />
    </div>
  );
}
