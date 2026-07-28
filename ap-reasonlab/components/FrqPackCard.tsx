import Link from "next/link";

/** AP Statistics FRQ Practice Pack — integrated entry (not a separate desktop island). */
export default function FrqPackCard({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="text-sm text-slate-600">
        <strong>FRQ Practice Pack</strong> (regenerated, with reference answers) lives in{" "}
        <Link href="/practice?subject=AP%20Statistics#frq-pack" className="font-medium text-brand-700 underline">
          Practice → FRQ pack
        </Link>
        .
      </p>
    );
  }

  return (
    <section className="card space-y-3 border-violet-100 bg-violet-50/40">
      <h2 className="text-lg font-bold text-slate-900">AP Statistics FRQ Practice Pack</h2>
      <p className="text-sm text-slate-600">
        Regenerated FRQ set: four topics, difficulty levels, and Part II reference answers. Download
        the pack from Practice — same place as generated sets and exam &amp; paper materials.
      </p>
      <div className="flex flex-wrap gap-2">
        <Link href="/practice?subject=AP%20Statistics#frq-pack" className="btn-primary">
          Open in Practice
        </Link>
        <Link href="/ap/statistics" className="btn-secondary">
          Statistics subject
        </Link>
      </div>
    </section>
  );
}
