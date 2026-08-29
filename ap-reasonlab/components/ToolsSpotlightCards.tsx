import Link from "next/link";
import { getStudyTool } from "@/data/study-tools";

const SPOTLIGHT_IDS = ["math-pad", "write-convert"] as const;

export default function ToolsSpotlightCards() {
  const cards = SPOTLIGHT_IDS.map((id) => getStudyTool(id)).filter(Boolean);

  if (!cards.length) return null;

  return (
    <section aria-labelledby="tools-spotlight-heading" className="space-y-3">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">Combined first</p>
        <h2 id="tools-spotlight-heading" className="mt-1 text-lg font-semibold text-slate-900">
          Start with a workbench
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Use the larger combined desks first; individual utilities are listed later on the page.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((tool) => {
          const isMath = tool!.id === "math-pad";
          return (
            <Link
              key={tool!.id}
              href={tool!.href}
              className={`group relative overflow-hidden rounded-2xl border p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                isMath
                  ? "border-sky-200 bg-gradient-to-br from-sky-50 via-white to-cyan-50 hover:border-sky-300"
                  : "border-violet-200 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 hover:border-violet-300"
              }`}
            >
              <div
                className={`pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full blur-2xl ${
                  isMath ? "bg-sky-200/60" : "bg-violet-200/60"
                }`}
                aria-hidden
              />
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <span
                    className={`inline-block rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                      isMath ? "bg-sky-200 text-sky-900" : "bg-violet-200 text-violet-900"
                    }`}
                  >
                    Combined workbench
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-slate-900 group-hover:text-brand-800">
                    {isMath ? "Math workbench · Calc + Graph" : "Write & convert workbench"}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{tool!.blurb}</p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                    isMath
                      ? "bg-sky-100 text-sky-800 group-hover:bg-sky-200"
                      : "bg-violet-100 text-violet-800 group-hover:bg-violet-200"
                  }`}
                >
                  Open →
                </span>
              </div>
              <p className="relative mt-4 text-xs text-slate-500">
                {isMath
                  ? "Calculator + graph + calculus + units + vectors + LaTeX + formulas in one place."
                  : "Draft + count + cleanup + Word import + PDF handoffs from one entry point."}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
