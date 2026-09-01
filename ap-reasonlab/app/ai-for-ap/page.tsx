"use client";

import Link from "next/link";
import AiForApToolboxSection from "@/components/AiForApToolboxSection";
import EthicsBanner from "@/components/EthicsBanner";
import UnifiedAiPanel from "@/components/UnifiedAiPanel";

export default function AiForApPage() {
  return (
    <div className="space-y-8">
      <section className="hero-gradient rounded-3xl px-6 py-9 text-white shadow-lg md:px-9">
        <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
          AP · AI for AP
        </span>
        <h1 className="mt-3 text-3xl font-bold md:text-4xl">AI for AP</h1>
        <p className="mt-3 max-w-2xl text-blue-100">
          The AP-focused assistant lives directly inside the AP area: concept help, hints, formulas,
          derivations, practice generation, and subject-specific study workflows.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href="/ap" className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-brand-800">
            AP subjects
          </Link>
          <Link href="/easy-local-ai" className="rounded-xl border border-white/30 px-4 py-2 text-sm font-semibold">
            Easy Local AI
          </Link>
        </div>
      </section>

      <EthicsBanner />
      <UnifiedAiPanel defaultCategory="ap" />
      <AiForApToolboxSection />
    </div>
  );
}
