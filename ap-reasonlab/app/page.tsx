import Link from "next/link";
import DisclaimerPanel from "@/components/DisclaimerPanel";
import EthicsBanner from "@/components/EthicsBanner";
import {
  LOCAL_AI_RECOMMENDATION_EN,
  LOCAL_AI_RECOMMENDATION_ZH,
} from "@/lib/ai-local-recommendation";
import HomeMembersRoster from "@/components/HomeMembersRoster";
import { brand } from "@/data/brand";

const boxes = [
  {
    title: "AP",
    description: "Concepts, formulas, practice — folders first. + to add with a change code.",
    href: "/ap",
  },
  {
    title: "English Learning",
    description: "Exams (practice questions) · Skills (vocab/grammar/writing) · English AI Tutor.",
    href: "/english",
  },
  {
    title: "AI Toolbox",
    description:
      "本地 AI 优先（作者亲测更聪明）— hints、concepts、Site Guide、calculator、grapher、English AI。",
    href: "/hints",
  },
  {
    title: "AI Toolbox · AI for AP",
    description: "Local AI, hints, generate practice, and safe AI-for-AP workflows in one place.",
    href: "/hints?section=ai-for-ap",
  },
  {
    title: "Code Resource",
    description: "Python, Java, and web folders. + to upload files.",
    href: "/code",
  },
  {
    title: "Forum",
    description: "Discussions, shared materials library, and private My box.",
    href: "/forum",
  },
  {
    title: "Partners",
    description: "Liji Explore members with GitHub. Add anyone by name + GitHub username.",
    href: "/partners",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="hero-gradient relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 min-h-[min(72vh,36rem)] px-6 py-14 text-white md:px-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="font-display text-5xl font-semibold tracking-tight text-[#f7f4ee] md:text-6xl">
            {brand.name}
          </p>
          <h1 className="mt-5 max-w-xl font-display text-2xl font-medium leading-snug text-[#f7f4ee]/90 md:text-3xl">
            {brand.tagline}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-[#f7f4ee]/75">{brand.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/ap"
              className="rounded-lg bg-[#f7f4ee] px-5 py-2.5 text-sm font-semibold text-[#152a45] shadow transition hover:bg-white"
            >
              Open AP box
            </Link>
            <Link
              href="/hints"
              className="rounded-lg border border-[#f7f4ee]/35 px-5 py-2.5 text-sm font-semibold text-[#f7f4ee] transition hover:bg-white/10"
            >
              AI Toolbox
            </Link>
          </div>
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

      <section className="space-y-4">
        <h2 className="section-title">Main boxes</h2>
        <div className="grid gap-1 sm:grid-cols-2">
          {boxes.map((b) => (
            <Link key={b.href} href={b.href} className="directory-link relative">
              <span
                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded border border-[var(--ke-border)] bg-[var(--ke-surface)] font-display text-xs font-semibold text-[var(--ke-navy)]"
                aria-hidden
              >
                {b.title.slice(0, 2).toUpperCase()}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-[var(--ke-ink)] group-hover:text-[var(--ke-navy)]">
                  {b.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">{b.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-sm text-slate-500">
          Coming later: A-Level box and IB box — same folder pattern, separate from AP.
        </p>
      </section>

      <section className="card space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="section-title">Liji Explore members</h2>
          <Link href="/partners" className="text-sm font-medium text-brand-600 hover:underline">
            Full roster & join →
          </Link>
        </div>
        <p className="text-sm text-slate-600">
          People on Liji Explore with GitHub. Add anyone on Partners — free name + GitHub,
          not a fixed single choice.
        </p>
        <HomeMembersRoster />
      </section>
    </div>
  );
}
