import type { OfficialResourceBlock } from "@/data/official-resources";
import { getCodeLangOfficial } from "@/data/official-resources";

type Props = {
  langId: string;
  compact?: boolean;
};

export default function CodeLangOfficialStrip({ langId, compact = false }: Props) {
  const block: OfficialResourceBlock | null = getCodeLangOfficial(langId);
  if (!block?.links.length) return null;

  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-2 rounded-lg border border-slate-200 bg-slate-50/90 px-3 py-2 text-xs">
        <span className="font-semibold text-slate-600">Official docs ↗</span>
        {block.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-200 bg-white px-2 py-0.5 font-medium text-brand-700 hover:bg-brand-50"
          >
            {link.label}
          </a>
        ))}
      </div>
    );
  }

  return (
    <section className="card border-slate-200 bg-slate-50/80">
      <h3 className="text-sm font-semibold text-slate-900">{block.title}</h3>
      <p className="mt-1 text-xs text-slate-600">{block.note}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {block.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary text-xs"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </section>
  );
}
