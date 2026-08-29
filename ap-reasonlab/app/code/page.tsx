"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import OfficialResourceLinks from "@/components/OfficialResourceLinks";
import RecentPlaygrounds from "@/components/RecentPlaygrounds";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import { howToEmbedEditors, standardSnippets } from "@/data/code-snippets";
import { CODE_LANG_FAMILIES } from "@/data/code-language-hub";
import { CODE_HUB_OFFICIAL } from "@/data/official-resources";
import { codeLangSearchHaystack } from "@/lib/toolbox-search";

export default function CodePage() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const langHay = useMemo(() => {
    const map = new Map<string, string>();
    for (const row of codeLangSearchHaystack()) {
      map.set(row.href, `${row.title} ${row.body} ${row.detail}`);
    }
    return map;
  }, []);
  const families = useMemo(() => {
    if (!q) return CODE_LANG_FAMILIES;
    return CODE_LANG_FAMILIES.map((family) => ({
      ...family,
      langs: family.langs.filter((lang) => {
        const hay = `${langHay.get(lang.href) || ""} ${family.label} ${family.blurb}`.toLowerCase();
        return q.split(/\s+/).every((token) => hay.includes(token));
      }),
    })).filter((family) => family.langs.length > 0);
  }, [q, langHay]);

  const snippetHits = useMemo(() => {
    if (!q) return standardSnippets.slice(0, 4);
    return standardSnippets.filter((s) =>
      `${s.title} ${s.language} ${s.description} ${s.code}`.toLowerCase().includes(q)
    );
  }, [q]);
  return (
    <div className="space-y-8">
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
          Open one editor, then pick the language. Save reusable blocks in the{" "}
          <Link href="/tools/code-board" className="font-medium text-brand-700 underline">
            long code block adder
          </Link>
          . Fence code on{" "}
          <Link href="/forum" className="font-medium text-brand-700 underline">
            Forum
          </Link>{" "}
          to run it here. Format JSON or Base64 in{" "}
          <Link href="/tools" className="font-medium text-brand-700 underline">
            Convenient Tools
          </Link>
          .
        </p>
        <Link href="/code/editor?lang=python" className="btn-primary mt-4 inline-flex">
          Open editor
        </Link>
      </div>

      <OfficialResourceLinks block={CODE_HUB_OFFICIAL} tone="slate" />
      <RecentPlaygrounds />

      <label className="block rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm">
        <span className="sr-only">Search playgrounds</span>
        <input
          className="input w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter playgrounds: python, sql, java, markdown, playground, official docs…"
        />
      </label>

      <section className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white px-5 py-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
          Keep reusable code
        </p>
        <h2 className="mt-1 text-xl font-semibold text-slate-900">Long code block adder</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          Add title + comment + long code, then copy or open a playground with the block preloaded.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/tools/code-board" className="btn-primary">
            Open code block adder
          </Link>
          <Link href="/tools/json-formatter" className="btn-secondary">
            JSON formatter
          </Link>
          <Link href="/tools/encode-decode" className="btn-secondary">
            Base64 / URL
          </Link>
        </div>
      </section>

      {families.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-slate-200 bg-white px-4 py-8 text-center text-sm text-slate-500">
          No playgrounds match “{query.trim()}”. Try python, java, sql, html, or a keyword like json / regex / graph.
        </p>
      ) : (
        families.map((family) => (
        <section key={family.id} className="space-y-3">
          <div>
            <h2 className="text-lg font-semibold">{family.label}</h2>
            <p className="text-sm text-slate-600">{family.blurb}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {family.langs.map((r) => (
              <article key={r.id} className="card-hover group flex flex-col gap-3">
                <Link href={r.href} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[11px] font-bold uppercase text-emerald-800">
                    {r.title.slice(0, 3)}
                  </span>
                  <div>
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
                </Link>
                {r.official ? (
                  <a
                    href={r.official.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-brand-700 hover:underline"
                  >
                    Official: {r.official.label} ↗
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>
        ))
      )}

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
        {snippetHits.length === 0 ? (
          <p className="rounded-xl border border-dashed border-slate-200 px-4 py-6 text-center text-sm text-slate-500">
            No snippets match this filter. Clear search or open the code block adder.
          </p>
        ) : (
        <div className="grid gap-3 md:grid-cols-2">
          {snippetHits.map((s) => (
            <article key={s.id} className="card space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge">{s.language}</span>
                <Link
                  href={`/code/editor?lang=${s.language === "html" ? "web" : s.language}`}
                  className="text-xs font-medium text-brand-700 hover:underline"
                >
                  Open playground
                </Link>
              </div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-slate-600">{s.description}</p>
              <pre className="max-h-40 overflow-auto rounded-lg bg-slate-900 p-3 text-xs text-slate-100">
                {s.code}
              </pre>
            </article>
          ))}
        </div>
        )}
      </section>
    </div>
  );
}
