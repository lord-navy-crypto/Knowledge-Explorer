import Link from "next/link";
import EasyLocalAIPlayground from "@/components/EasyLocalAIPlayground";

export default function EasyLocalAIPage() {
  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-emerald-950 to-emerald-700 px-6 py-10 text-white shadow-xl md:px-10">
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
          Sentinel Map · Easy Local AI
        </span>
        <h1 className="mt-4 text-4xl font-bold">Easy Local AI</h1>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-emerald-50/90">
          A general-purpose Local AI playground for people who just want to try a model, chat, and
          test their device. No Ollama installation and no local server setup: compatible models run
          directly in this browser through WebLLM and WebGPU.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/explore/sentinel" className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-emerald-950">
            Open Sentinel Map
          </Link>
          <Link href="/user-guide/ai" className="rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold">
            AI Guide
          </Link>
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-3">
        <div className="card">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Local first</p>
          <p className="mt-2 text-sm text-slate-700">Inference happens in your browser. The website does not need your prompts for local chat.</p>
        </div>
        <div className="card">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">No Ollama</p>
          <p className="mt-2 text-sm text-slate-700">Pick a WebLLM model, download it into browser cache, then chat. No separate local daemon is required.</p>
        </div>
        <div className="card">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">General sandbox</p>
          <p className="mt-2 text-sm text-slate-700">Unlike the subject assistants, this page does not force an AP, English, or coding workflow.</p>
        </div>
      </section>

      <EasyLocalAIPlayground />
    </div>
  );
}
