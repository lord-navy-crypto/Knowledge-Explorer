import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RichContent from "@/components/RichContent";
import { SENTINEL_MACOS, SENTINEL_RELEASE_NOTES_MD } from "@/data/sentinel-macos";

export const metadata = {
  title: "Sentinel Mac — Download & Overview",
  description:
    "Sentinel Mac v2.2.0-beta — local-first macOS system intelligence. Download the DMG or view releases on GitHub.",
};

export default function SentinelMacPage() {
  const s = SENTINEL_MACOS;

  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Explore", href: "/explore" },
          { label: "Sentinel Mac" },
        ]}
      />

      <section className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 px-6 py-8 text-white sm:px-8">
        <div
          className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl"
          aria-hidden
        />
        <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
          lord-navy-crypto · macOS
        </p>
        <h1 className="relative mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {s.versionLabel}
        </h1>
        <p className="relative mt-3 max-w-2xl text-base leading-relaxed text-slate-200">{s.tagline}</p>
        <blockquote className="relative mt-4 max-w-xl border-l-2 border-sky-400/60 pl-4 text-sm italic text-slate-300">
          {s.principle}
        </blockquote>
        <div className="relative mt-6 flex flex-wrap gap-3">
          <a
            href={s.dmg.href}
            className="inline-flex rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-sky-400"
          >
            Download {s.dmg.name}
          </a>
          <a
            href={s.releases}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/15"
          >
            GitHub Releases ↗
          </a>
          <a
            href={s.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl px-4 py-2.5 text-sm font-semibold text-sky-200 hover:text-white"
          >
            Source repository ↗
          </a>
        </div>
        <p className="relative mt-4 text-xs text-slate-400">
          {s.dmg.sizeLabel} · Published {s.publishedAt} · {s.license}
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="card space-y-4 border-emerald-200 bg-emerald-50/40">
          <h2 className="font-display text-lg font-semibold text-slate-900">Install</h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700">
            {s.installSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <div className="rounded-xl border border-emerald-200 bg-white px-4 py-3 text-xs text-slate-600">
            <p className="font-semibold text-slate-800">SHA-256 ({s.dmg.name})</p>
            <code className="mt-1 block break-all font-mono text-[11px]">{s.dmg.sha256}</code>
          </div>
        </article>

        <article className="card space-y-3">
          <h2 className="font-display text-lg font-semibold text-slate-900">Why Sentinel</h2>
          <ul className="space-y-2 text-sm leading-6 text-slate-700">
            {s.highlights.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="font-bold text-brand-600" aria-hidden>
                  ·
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="section-title">Modules</h2>
          <p className="mt-1 text-sm text-slate-600">
            Core capabilities from the v2.2.0-beta release — evidence-first, local-only processing.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {s.modules.map((mod) => (
            <article key={mod.title} className="card space-y-2 !p-4">
              <h3 className="font-semibold text-slate-900">{mod.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{mod.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-display text-lg font-semibold text-slate-900">Release notes</h2>
          <a
            href={s.releases}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-brand-700 hover:underline"
          >
            Full notes on GitHub ↗
          </a>
        </div>
        <RichContent className="prose prose-sm max-w-none text-slate-700">{SENTINEL_RELEASE_NOTES_MD}</RichContent>
      </section>

      <p className="text-sm text-slate-500">
        Simulation Workshop and other macOS builders remain on{" "}
        <Link href="/explore/workshops" className="font-medium text-brand-700 hover:underline">
          Simulation &amp; Download
        </Link>
        .
      </p>
    </div>
  );
}
