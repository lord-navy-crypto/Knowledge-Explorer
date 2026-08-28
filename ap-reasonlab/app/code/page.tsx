"use client";

import Link from "next/link";
import RecentPlaygrounds from "@/components/RecentPlaygrounds";
import TrackToolboxVisit from "@/components/TrackToolboxVisit";
import Breadcrumbs from "@/components/Breadcrumbs";
import OfficialResourceLinks from "@/components/OfficialResourceLinks";
import RelatedToolboxLinks from "@/components/RelatedToolboxLinks";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import { CODE_LANG_FAMILIES } from "@/data/code-language-hub";
import { howToEmbedEditors, standardSnippets } from "@/data/code-snippets";
import { CODE_HUB_OFFICIAL } from "@/data/official-resources";

export default function CodePage() {
  return (
    <div className="space-y-8">
      <TrackToolboxVisit href="/code" title="Code hub" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tools & Code", href: "/explore/tools-code" },
          { label: "Code" },
        ]}
      />
      <div>
        <h1 className="text-3xl font-bold">Code Resource</h1>
        <p className="mt-2 text-slate-600">
          Browser playgrounds grouped by language family — each editor links to official docs. Keep
          reusable blocks in the{" "}
          <Link href="/tools/code-board" className="font-medium text-brand-700 underline">
            code block adder
          </Link>
          , format JSON with the{" "}
          <Link href="/tools/json-formatter" className="font-medium text-brand-700 underline">
            JSON formatter
          </Link>
          , or open{" "}
          <Link href="/hints?tool=coding" className="font-medium text-brand-700 underline">
            AI Toolbox · Coding AI
          </Link>
          .
        </p>
      </div>

      <RecentPlaygrounds />

      <OfficialResourceLinks block={CODE_HUB_OFFICIAL} tone="slate" />

      <section className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white px-5 py-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
          Keep reusable code
        </p>
        <h2 className="mt-1 text-xl font-semibold text-slate-900">Long code block adder</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          Add title + comment + long code, then scroll a library of blocks. Copy code or jump to a
          playground.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/tools/code-board" className="btn-primary">
            Open code block adder
          </Link>
          <Link href="/tools/json-formatter" className="btn-secondary">
            JSON formatter
          </Link>
        </div>
      </section>

      {CODE_LANG_FAMILIES.map((family) => (
        <section key={family.id} className="space-y-3">
          <div>
            <h2 className="text-lg font-semibold">{family.label}</h2>
            <p className="text-sm text-slate-600">{family.blurb}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {family.langs.map((r) => (
              <Link key={r.id} href={r.href} className="card-hover group flex flex-col gap-2">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[11px] font-bold uppercase text-emerald-800">
                    {r.title.slice(0, 3)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold group-hover:text-brand-700">{r.title}</h3>
                      <span
                        className={
                          r.runKind === "browser"
                            ? "rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-800"
                            : "rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-800"
                        }
                      >
                        {r.runKind === "browser" ? "Run in browser" : "Practice Run"}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-600">{r.description}</p>
                  </div>
                </div>
                {r.official ? (
                  <a
                    href={r.official.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="ml-[3.25rem] inline-flex w-fit items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-semibold text-brand-700 hover:bg-brand-50"
                  >
                    {r.official.label} ↗
                  </a>
                ) : null}
              </Link>
            ))}
          </div>
        </section>
      ))}

      <RelatedToolboxLinks clusterId="code-workbench" />

      <UnifiedMediaFrame
        alsoShow={["document", "folder"]}
        folderArea="code"
        spaceKey="_root"
        spaceBasePath="/code"
        title="Code hub · pictures, documents & files (optional uploads)"
      />

      <section className="card space-y-2">
        <h2 className="text-lg font-semibold">Editors</h2>
        <pre className="whitespace-pre-wrap text-sm text-slate-600">{howToEmbedEditors}</pre>
      </section>

      <section className="space-y-3">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h2 className="text-lg font-semibold">Standard snippets (preview)</h2>
          <Link href="/tools/code-board" className="text-sm font-medium text-brand-700 hover:underline">
            Full library + adder →
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {standardSnippets.slice(0, 4).map((s) => (
            <article key={s.id} className="card space-y-2">
              <div className="flex flex-wrap gap-2">
                <span className="badge">{s.language}</span>
              </div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-slate-600">{s.description}</p>
              <pre className="max-h-40 overflow-auto rounded-lg bg-slate-900 p-3 text-xs text-slate-100">
                {s.code}
              </pre>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
