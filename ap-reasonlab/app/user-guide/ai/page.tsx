"use client";

import Link from "next/link";
import EthicsBanner from "@/components/EthicsBanner";
import UnifiedAiPanel from "@/components/UnifiedAiPanel";

export default function AiGuidePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-violet-200 bg-violet-50 px-6 py-9 md:px-9">
        <span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-violet-800">
          User Guide · AI Guide
        </span>
        <h1 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">AI Guide</h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          The old Toolbox guidance function now lives with the site guide. Ask how to use Knowledge
          Explorer, choose an AI path, understand Local AI, or decide which specialized assistant fits
          your task.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href="/user-guide" className="btn-secondary">User Guide</Link>
          <Link href="/easy-local-ai" className="btn-secondary">Easy Local AI</Link>
          <Link href="/ai-for-ap" className="btn-secondary">AI for AP</Link>
          <Link href="/english/ai" className="btn-secondary">AI for English</Link>
          <Link href="/code/ai" className="btn-secondary">AI for Code</Link>
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {[
          ["AI for AP", "Hints, concepts, formulas, AP practice and subject workflows.", "/ai-for-ap"],
          ["AI for English", "Writing feedback, grammar, translation, vocab and exam strategy.", "/english/ai"],
          ["AI for Code", "Debugging, code writing, explanations and coding workflows.", "/code/ai"],
          ["Easy Local AI", "General browser-local chat and model testing without Ollama.", "/easy-local-ai"],
        ].map(([title, description, href]) => (
          <Link key={title} href={href} className="card-hover">
            <h2 className="font-bold text-slate-950">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
          </Link>
        ))}
      </section>

      <EthicsBanner />
      <UnifiedAiPanel defaultCategory="ap" defaultApTask="guide" />
    </div>
  );
}
