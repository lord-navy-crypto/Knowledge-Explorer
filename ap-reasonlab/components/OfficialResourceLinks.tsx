import type { OfficialResourceBlock } from "@/data/official-resources";

export default function OfficialResourceLinks({
  block,
  tone = "brand",
}: {
  block: OfficialResourceBlock;
  tone?: "brand" | "emerald" | "rose" | "slate";
}) {
  const toneClass =
    tone === "emerald"
      ? "border-emerald-200 bg-emerald-50/50"
      : tone === "rose"
        ? "border-rose-200 bg-rose-50/50"
        : tone === "slate"
          ? "border-slate-200 bg-slate-50/80"
          : "border-brand-100 bg-brand-50/40";

  return (
    <section className={`card ${toneClass}`}>
      <h2 className="font-semibold text-slate-900">{block.title}</h2>
      <p className="mt-2 text-sm text-slate-600">{block.note}</p>
      <div className="mt-3 flex flex-wrap gap-3">
        {block.links.map((link) => (
          <a
            key={`${link.href}-${link.label}`}
            className="btn-secondary"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </section>
  );
}
