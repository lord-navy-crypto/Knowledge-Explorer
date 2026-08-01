"use client";

import { brand } from "@/data/brand";
import { disclaimerSections } from "@/data/disclaimer";

type Props = {
  className?: string;
};

/**
 * Collapsible copyright & disclaimer block for the home page.
 */
export default function DisclaimerPanel({ className = "" }: Props) {
  return (
    <details
      id="copyright-disclaimers"
      className={`scroll-mt-24 group rounded-2xl border border-slate-300 bg-slate-50 open:bg-slate-50 ${className}`}
    >
      <summary className="cursor-pointer list-none px-4 py-4 md:px-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Copyright &amp; disclaimers
            </p>
            <p className="mt-1 text-base font-bold text-slate-900 md:text-lg">
              All notices for {brand.name}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Trademarks, original sources, uploads, and accuracy — tap to expand or hide.
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-600 group-open:hidden">
            Show
          </span>
          <span className="hidden shrink-0 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-600 group-open:inline">
            Hide
          </span>
        </div>
      </summary>

      <div className="border-t border-slate-200 px-4 pb-5 pt-4 md:px-5">
        <p className="text-sm leading-relaxed text-slate-600">
          These notices apply to the whole website — AP, English, Forum, tools, AI Toolbox,
          uploads, and every other section — whether or not you are studying AP. Materials belong
          to their original sources unless clearly created by this site.
        </p>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {disclaimerSections.map((section) => (
            <article
              key={section.id}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-slate-900">{section.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 md:text-sm">
                {section.body}
              </p>
            </article>
          ))}
        </div>

        <ul className="mt-4 list-disc space-y-1 pl-5 text-xs text-slate-600 md:text-sm">
          <li>Built-in notes and practice may lag curriculum updates.</li>
          <li>User uploads and community posts are not reviewed as official curriculum.</li>
          <li>AI hints and generated text can be wrong — treat them as starting points only.</li>
        </ul>
      </div>
    </details>
  );
}
