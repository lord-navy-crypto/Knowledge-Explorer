"use client";

import Link from "next/link";
import EthicsBanner from "@/components/EthicsBanner";
import UnifiedAiPanel from "@/components/UnifiedAiPanel";

export default function AiForCodePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-slate-950 px-6 py-9 text-white shadow-lg md:px-9">
        <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
          Code · AI for Code
        </span>
        <h1 className="mt-3 text-3xl font-bold md:text-4xl">AI for Code</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Coding-focused AI for debugging, writing, explaining code, and CSA-style work. This is the
          coding assistant split out of the old AI Toolbox; general free chat belongs in Easy Local AI.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href="/code/editor?lang=python" className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950">
            Code Workbench
          </Link>
          <Link href="/easy-local-ai" className="rounded-xl border border-white/25 px-4 py-2 text-sm font-semibold">
            Easy Local AI
          </Link>
        </div>
      </section>

      <EthicsBanner />
      <UnifiedAiPanel defaultCategory="coding" />
    </div>
  );
}
