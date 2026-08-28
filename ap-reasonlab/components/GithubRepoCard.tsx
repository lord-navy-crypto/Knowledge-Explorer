import type { NavyGithubRepo } from "@/data/lord-navy-github";

const ACCENT_STYLES: Record<string, string> = {
  violet: "from-violet-500/15 via-white to-slate-50 border-violet-200/80",
  sky: "from-sky-500/15 via-white to-slate-50 border-sky-200/80",
  emerald: "from-emerald-500/15 via-white to-slate-50 border-emerald-200/80",
  amber: "from-amber-500/15 via-white to-slate-50 border-amber-200/80",
  rose: "from-rose-500/15 via-white to-slate-50 border-rose-200/80",
  indigo: "from-indigo-500/15 via-white to-slate-50 border-indigo-200/80",
  slate: "from-slate-500/10 via-white to-slate-50 border-slate-200",
};

export default function GithubRepoCard({ repo }: { repo: NavyGithubRepo }) {
  const accent = ACCENT_STYLES[repo.accent || "slate"] || ACCENT_STYLES.slate;

  return (
    <a
      href={repo.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col rounded-2xl border bg-gradient-to-br px-5 py-5 shadow-sm transition hover:border-brand-300 hover:shadow-md ${accent}`}
    >
      <div className="flex flex-wrap items-center gap-2">
        {repo.badge ? (
          <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600 ring-1 ring-slate-200">
            {repo.badge}
          </span>
        ) : null}
        {repo.lane === "download" ? (
          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-800">
            macOS builder
          </span>
        ) : (
          <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-violet-800">
            research lab
          </span>
        )}
      </div>

      <h2 className="mt-3 font-display text-lg font-semibold text-slate-900 group-hover:text-brand-800">
        {repo.title}
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{repo.detail}</p>

      {repo.highlights && repo.highlights.length > 0 ? (
        <ul className="mt-3 space-y-1.5 border-t border-white/60 pt-3 text-xs text-slate-600">
          {repo.highlights.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="text-brand-600" aria-hidden>
                ·
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/60 pt-3">
        <code className="truncate text-[11px] text-slate-500">{repo.name}</code>
        <span className="shrink-0 text-sm font-medium text-brand-700 group-hover:underline">
          Open on GitHub →
        </span>
      </div>
    </a>
  );
}
