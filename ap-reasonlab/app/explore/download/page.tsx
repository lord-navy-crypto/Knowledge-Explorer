import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

/**
 * Downloadable special-component Shell builders / installers
 * from github.com/lord-navy-crypto — GitHub links only.
 */
const DOWNLOADS = [
  {
    href: "https://github.com/lord-navy-crypto/chrono-modal-macos-universal2-builder",
    title: "Chrono::Modal macOS Universal2 Builder",
    detail:
      "Shell builder package: build Project Chrono Modal as Universal2 (arm64 + x86_64). Use Code → Download ZIP or clone, then run START_CHRONO_MODAL_BUILDER.command.",
    language: "Shell",
  },
  {
    href: "https://github.com/lord-navy-crypto/lord-navy-crypto-radia-universal2-macos-installer",
    title: "RADIA macOS Universal2 Installer",
    detail:
      "Shell installer scripts to compile the official RADIA Python extension as a Universal2 binary. Run RUN_RADIA_UNIVERSAL2_SAFE.command from Terminal.",
    language: "Shell",
  },
];

export default function DownloadPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Simulation & Download", href: "/explore/workshops" },
          { label: "Download" },
        ]}
      />

      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
          Download
        </p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Download
        </h1>
        <p className="max-w-2xl text-slate-600">
          Special-component builders and installers (Shell) from{" "}
          <a
            href="https://github.com/lord-navy-crypto"
            className="font-medium text-brand-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/lord-navy-crypto
          </a>
          . Open GitHub to download ZIP or clone — nothing is hosted on this site.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50/70 via-white to-slate-50 px-5 py-6">
        <h2 className="font-display text-lg font-semibold text-slate-900">How to download</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700">
          <li>Open a repository below on GitHub.</li>
          <li>
            Use <strong>Code → Download ZIP</strong>, or <code className="text-xs">git clone</code>{" "}
            the URL.
          </li>
          <li>Follow that repo’s README / <code className="text-xs">.command</code> launcher on your Mac.</li>
        </ol>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {DOWNLOADS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm transition hover:border-brand-300 hover:shadow-md"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              {item.language}
            </p>
            <h2 className="mt-1 font-display text-lg font-semibold text-slate-900 group-hover:text-brand-800">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
            <p className="mt-3 text-sm font-medium text-brand-700">Open on GitHub →</p>
          </a>
        ))}
      </section>

      <p className="text-sm text-slate-500">
        Looking for research simulation labs? See{" "}
        <Link href="/explore/simulation-workshop" className="font-medium text-brand-700 hover:underline">
          Simulation Workshop
        </Link>
        .
      </p>
    </div>
  );
}
