import Link from "next/link";
import { listedStudyTools, STUDY_TOOL_CATEGORIES } from "@/data/study-tools";

export default function UserGuideToolsGrid() {
  const tools = listedStudyTools();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <h2 className="font-display text-xl font-semibold text-slate-900">All Convenient Tools</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Every listed tool in the catalog — open any card to try it in your browser. Calculator and
        Grapher also live inside AI Toolbox.
      </p>
      <div className="mt-6 space-y-8">
        {STUDY_TOOL_CATEGORIES.map((category) => {
          const items = tools.filter((tool) => tool.category === category.id);
          if (!items.length) return null;
          return (
            <div key={category.id}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                {category.label}
              </h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {items.map((tool) => (
                  <li key={tool.id}>
                    <Link
                      href={tool.href}
                      className="group flex h-full flex-col rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 transition hover:border-brand-300 hover:bg-brand-50/40"
                    >
                      <span className="text-sm font-semibold text-brand-800 group-hover:underline">
                        {tool.title} →
                      </span>
                      <span className="mt-0.5 text-xs leading-snug text-slate-600">{tool.blurb}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
