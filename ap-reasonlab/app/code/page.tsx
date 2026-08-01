"use client";

import Link from "next/link";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import { howToEmbedEditors, standardSnippets } from "@/data/code-snippets";

const langs = [
  {
    id: "python",
    title: "Python",
    href: "/code/python",
    description: "In-browser Pyodide playground + uploads.",
  },
  {
    id: "java",
    title: "Java",
    href: "/code/java",
    description: "CSA-style starters + documents. No in-browser runner yet.",
  },
  {
    id: "web",
    title: "Web / HTML",
    href: "/code/web",
    description: "Live HTML preview playground + uploads.",
  },
];

export default function CodePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Code Resource</h1>
        <p className="mt-2 text-slate-600">
          Playgrounds for Python and Web, plus a scrollable{" "}
          <Link href="/tools/code-board" className="font-medium text-brand-700 underline">
            long code block adder
          </Link>{" "}
          for common snippets with comments (paste — no file upload needed). Java still uses
          snippets + uploads for now. Need coaching? Open{" "}
          <Link href="/hints?tool=coding" className="font-medium text-brand-700 underline">
            AI Toolbox · Coding AI
          </Link>
          .
        </p>
      </div>

      <section className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white px-5 py-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
          Optimize how you keep code
        </p>
        <h2 className="mt-1 text-xl font-semibold text-slate-900">Long code block adder</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          Add title + comment + long code, then scroll a library of blocks. Copy code, copy with
          comments, or jump to a playground. Better for “常用代码” than uploading every file.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/tools/code-board" className="btn-primary">
            Open code block adder
          </Link>
          <Link href="/code/python" className="btn-secondary">
            Python playground
          </Link>
          <Link href="/code/web" className="btn-secondary">
            Web playground
          </Link>
        </div>
      </section>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {langs.map((r) => (
          <Link key={r.id} href={r.href} className="card-hover group flex items-start gap-3">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-sm font-bold text-emerald-800">
              {r.title.slice(0, 2)}
            </span>
            <div>
              <h2 className="font-semibold group-hover:text-brand-700">{r.title}</h2>
              <p className="mt-1 text-sm text-slate-600">{r.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <UnifiedMediaFrame
        alsoShow={["document", "folder"]}
        folderArea="code"
        spaceKey="_root"
        spaceBasePath="/code"
        title="Code hub · pictures, documents & files (optional uploads)"
      />

      <section className="card space-y-2">
        <h2 className="text-lg font-semibold">Editors</h2>
        <p className="text-sm text-slate-600">
          <Link href="/code/web" className="font-medium text-brand-700 underline">
            Web / HTML
          </Link>{" "}
          has a live preview editor.{" "}
          <Link href="/code/python" className="font-medium text-brand-700 underline">
            Python
          </Link>{" "}
          runs with Pyodide in the browser. Prefer keeping reusable blocks in the{" "}
          <Link href="/tools/code-board" className="font-medium text-brand-700 underline">
            code block adder
          </Link>
          .
        </p>
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
