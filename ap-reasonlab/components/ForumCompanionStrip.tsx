import Link from "next/link";
import { CODE_HUB_OFFICIAL } from "@/data/official-resources";

const LANES = [
  {
    href: "/forum",
    label: "Discussions",
    detail: "Public Q&A — Markdown, files, quote reply.",
  },
  {
    href: "/forum?tab=shared",
    label: "Shared library",
    detail: "Public uploads. Large files live here, not in threads.",
  },
  {
    href: "/forum?tab=box",
    label: "My box",
    detail: "Private notes in this browser only.",
  },
];

const WORKFLOWS = [
  { href: "/hints?tool=calculator", label: "Calc + Graph" },
  { href: "/hints", label: "AI Toolbox" },
  { href: "/code/editor", label: "One Code editor" },
  { href: "/code", label: "Code playgrounds" },
  { href: "/tools/code-board", label: "Code block adder" },
  { href: "/tools/write-convert", label: "Write & convert" },
  { href: "/tools/encode-decode", label: "Base64 / URL" },
  { href: "/tools/json-formatter", label: "JSON formatter" },
  { href: "/tools/markdown-plain", label: "Markdown ↔ plain" },
];

export default function ForumCompanionStrip() {
  return (
    <section className="grid gap-4 lg:grid-cols-3">
      <article className="card space-y-3 border-sky-200 bg-sky-50/50">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-sky-900">How Forum works</h2>
        <ul className="space-y-2 text-sm text-slate-700">
          {LANES.map((lane) => (
            <li key={lane.href}>
              <Link href={lane.href} className="font-semibold text-brand-800 hover:underline">
                {lane.label}
              </Link>
              <span className="text-slate-600"> — {lane.detail}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-500">
          Post with a display name only. Do not share private keys or copyrighted dumps.
        </p>
      </article>

      <article className="card space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Pair with Tools & Code
        </h2>
        <p className="text-sm text-slate-600">
          Fence code with <code className="text-xs">```python</code> in a thread, then run it in a
          playground or save it to the code board.
        </p>
        <div className="flex flex-wrap gap-1.5">
          {WORKFLOWS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:border-brand-300 hover:text-brand-800"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </article>

      <article className="card space-y-3 border-emerald-200 bg-emerald-50/40">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-900">
          Official docs (quick)
        </h2>
        <p className="text-xs text-slate-600">{CODE_HUB_OFFICIAL.note}</p>
        <div className="flex flex-wrap gap-1.5">
          {CODE_HUB_OFFICIAL.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-emerald-200 bg-white px-2 py-1 text-xs font-semibold text-emerald-900 hover:bg-emerald-100"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </article>
    </section>
  );
}
