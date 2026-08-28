import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { LORD_NAVY_GITHUB, reposForLane } from "@/data/lord-navy-github";

const DOWNLOADS = reposForLane("download");

export default function DownloadPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Explore", href: "/explore" },
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
            href={LORD_NAVY_GITHUB}
            className="font-medium text-brand-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/lord-navy-crypto
          </a>
          . Open GitHub to download ZIP or clone — nothing is hosted on this site.
        </p>
        <p className="text-xs text-slate-500">{DOWNLOADS.length} packages · GitHub links only</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50/70 via-white to-slate-50 px-5 py-6">
        <h2 className="font-display text-lg font-semibold text-slate-900">How to download</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700">
          <li>Open a repository below on GitHub.</li>
          <li>
            Use <strong>Code → Download ZIP</strong>, or <code className="text-xs">git clone</code>{" "}
            the URL.
          </li>
          <li>
            Follow that repo’s README / <code className="text-xs">.command</code> launcher on your
            Mac.
          </li>
        </ol>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {DOWNLOADS.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm transition hover:border-brand-300 hover:shadow-md"
          >
            {item.badge ? (
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                {item.badge}
              </p>
            ) : null}
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
