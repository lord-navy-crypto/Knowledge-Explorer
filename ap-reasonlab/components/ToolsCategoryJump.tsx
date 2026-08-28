"use client";

import { STUDY_TOOL_CATEGORIES, listedStudyTools } from "@/data/study-tools";

/** Sticky category jump — especially helpful on mobile long catalogs. */
export default function ToolsCategoryJump() {
  const tools = listedStudyTools();
  const categories = STUDY_TOOL_CATEGORIES.filter((cat) =>
    tools.some((tool) => tool.category === cat.id)
  );

  if (categories.length < 2) return null;

  return (
    <nav
      aria-label="Tool categories"
      className="sticky top-[4.5rem] z-20 -mx-1 flex gap-2 overflow-x-auto pb-1 pt-1 scrollbar-thin md:top-16"
    >
      {categories.map((category) => (
        <a
          key={category.id}
          href={`#tools-${category.id}`}
          className="shrink-0 rounded-full border border-slate-200 bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur hover:border-brand-300 hover:text-brand-800"
        >
          {category.label}
        </a>
      ))}
    </nav>
  );
}
