import Link from "next/link";
import { brand } from "@/data/brand";
import { disclaimerSections } from "@/data/disclaimer";

type Props = {
  /** Show intro line that notices apply sitewide */
  showIntro?: boolean;
  /** Compact spacing for embedding under the home hero */
  compact?: boolean;
  className?: string;
};

/**
 * Full copyright & disclaimer block — used on the home page and /disclaimer.
 */
export default function DisclaimerPanel({
  showIntro = true,
  compact = false,
  className = "",
}: Props) {
  return (
    <section
      id="copyright-disclaimers"
      className={`scroll-mt-24 rounded-2xl border border-slate-300 bg-slate-50 ${
        compact ? "px-4 py-5 md:px-5" : "px-5 py-6 md:px-6"
      } ${className}`}
    >
      <div className="space-y-1">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
          Copyright &amp; disclaimers
        </p>
        <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
          All notices for {brand.name}
        </h2>
        {showIntro ? (
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            These notices apply to the whole website — AP, English, Academic, tools, AI Toolbox,
            uploads, and every other section — whether or not you are studying AP. Materials belong
            to their original sources unless clearly created by this site.
          </p>
        ) : null}
      </div>

      <div className={`mt-4 grid gap-3 ${compact ? "" : "md:grid-cols-2"}`}>
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

      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
        <a
          className="btn-secondary"
          href="https://apstudents.collegeboard.org/"
          target="_blank"
          rel="noreferrer"
        >
          AP Students (College Board) ↗
        </a>
        <a
          className="btn-secondary"
          href="https://www.ets.org/toefl.html"
          target="_blank"
          rel="noreferrer"
        >
          TOEFL (ETS) ↗
        </a>
        <Link href="/disclaimer" className="font-medium text-brand-700 hover:underline">
          Open full disclaimer page
        </Link>
      </div>
    </section>
  );
}
