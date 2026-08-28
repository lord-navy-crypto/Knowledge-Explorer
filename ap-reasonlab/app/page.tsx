import Link from "next/link";
import DisclaimerPanel from "@/components/DisclaimerPanel";
import EthicsBanner from "@/components/EthicsBanner";
import {
  LOCAL_AI_RECOMMENDATION_EN,
  LOCAL_AI_RECOMMENDATION_ZH,
} from "@/lib/ai-local-recommendation";
import HomeMembersRoster from "@/components/HomeMembersRoster";
import { brand } from "@/data/brand";
import { HOME_GATEWAYS } from "@/data/home-gateways";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="hero-gradient relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 min-h-[min(58vh,28rem)] px-6 py-14 text-white md:px-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-5xl font-semibold tracking-tight text-[#f7f4ee] md:text-6xl">
            {brand.name}
          </h1>
          <p className="mt-4 max-w-xl font-display text-xl font-medium leading-snug text-[#f7f4ee]/90 md:text-2xl">
            Four doors into study — pick a box, then open what you need.
          </p>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-[#f7f4ee]/75">
            AI Toolbox stays in the top bar. AP, English, tools, code, workshops, and forum live
            inside the boxes below.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/user-guide"
              className="inline-flex rounded-lg bg-white/15 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/25"
            >
              User Guide
            </Link>
            <Link
              href="/search"
              className="inline-flex rounded-lg bg-white/15 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/25"
            >
              Site search
            </Link>
            <Link
              href="/about"
              className="inline-flex rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-[#f7f4ee]/90 hover:bg-white/15"
            >
              About
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="section-title">Main boxes</h2>
          <p className="mt-1 text-sm text-slate-600">
            Click a box to enter that area. AI Toolbox is always available from the top bar.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {HOME_GATEWAYS.map((box, index) => {
            const mark = String(index + 1).padStart(2, "0");
            return (
              <Link
                key={box.id}
                href={box.href}
                className="group relative overflow-hidden rounded-2xl border border-[var(--ke-border)] bg-[var(--ke-surface)] px-5 py-6 shadow-sm transition hover:border-brand-300 hover:shadow-md"
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50/80 via-transparent to-sky-50/40 opacity-0 transition group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative">
                  <p className="font-display text-xs font-semibold tracking-[0.18em] text-brand-600">
                    BOX {mark}
                    {box.comingSoon ? " · SOON" : ""}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-[var(--ke-ink)] group-hover:text-brand-900">
                    {box.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{box.description}</p>
                  <p className="mt-4 text-sm font-semibold text-brand-700">
                    {box.comingSoon ? "View placeholder →" : "Enter →"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section
        className="notranslate border border-amber-700/20 bg-amber-50 px-5 py-4 text-amber-950"
        translate="no"
        role="note"
        aria-label="Do not use page translation"
      >
        <p className="font-display text-lg font-semibold text-amber-950">
          请勿开启网页翻译。开启翻译可能导致网站显示异常。
        </p>
        <p className="mt-2 max-w-3xl text-sm text-amber-900/90">
          Please do not turn on page translation. Translation may cause the website to display
          abnormalities.
        </p>
      </section>

      <DisclaimerPanel />

      <section className="border border-emerald-800/15 bg-emerald-50/70 px-5 py-4 text-emerald-950">
        <p className="font-display text-lg font-semibold text-emerald-950">{LOCAL_AI_RECOMMENDATION_ZH}</p>
        <p className="mt-2 max-w-2xl text-sm text-emerald-900/85">{LOCAL_AI_RECOMMENDATION_EN}</p>
        <Link
          href="/hints"
          className="mt-3 inline-flex rounded-lg bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-900"
        >
          Open AI Toolbox · use Local AI
        </Link>
      </section>

      <EthicsBanner />

      <section className="card space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="section-title">{brand.name} members</h2>
          <Link href="/partners" className="text-sm font-medium text-brand-600 hover:underline">
            Full roster & join →
          </Link>
        </div>
        <p className="text-sm text-slate-600">
          People on {brand.name} with GitHub. Add anyone on Partners — free name + GitHub, not a
          fixed single choice.
        </p>
        <HomeMembersRoster />
      </section>
    </div>
  );
}
