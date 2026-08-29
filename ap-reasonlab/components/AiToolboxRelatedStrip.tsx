"use client";

import Link from "next/link";

const LINKS = [
  { href: "/forum", label: "Forum" },
  { href: "/hints?tool=calculator", label: "Calc + Graph" },
  { href: "/tools/formula-board", label: "Formula board" },
  { href: "/tools/latex", label: "LaTeX checker" },
  { href: "/tools/focus-desk", label: "Focus desk" },
  { href: "/tools/units", label: "Units" },
  { href: "/code/editor?lang=python", label: "Code editor" },
  { href: "/tools/speech-to-text", label: "Speech to text" },
  { href: "https://apcentral.collegeboard.org/", label: "AP Central ↗" },
  { href: "https://www.ets.org/toefl.html", label: "TOEFL (ETS) ↗" },
];

export default function AiToolboxRelatedStrip() {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-2">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
        Related study tools
      </p>
      <div className="mt-1.5 flex flex-wrap gap-1.5">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:border-brand-300 hover:text-brand-800"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
