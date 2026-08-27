import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const RELATED = [
  {
    href: "/forum",
    title: "Forum shared files",
    detail: "Browse discussions and shared materials others posted.",
  },
  {
    href: "/ap",
    title: "AP subject files",
    detail: "Open a subject — many pages include pictures, documents, and uploads.",
  },
  {
    href: "/english",
    title: "English materials",
    detail: "TOEFL / SAT folders and skill packs you can open or save.",
  },
  {
    href: "/tools/pdf-tools",
    title: "PDF tools",
    detail: "Compress, merge, or prepare files before you download or share.",
  },
  {
    href: "/tools/markdown-pdf",
    title: "Markdown → PDF",
    detail: "Export notes as a PDF for offline study.",
  },
];

export default function DownloadPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Simulation & Download", href: "/explore/workshops" },
          { label: "Download" },
        ]}
      />

      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
          Download
        </p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Download
        </h1>
        <p className="max-w-2xl text-slate-600">
          Find study packs, shared files, and materials you can save for offline use. Start from the
          links below — subject pages and Forum often carry the latest uploads.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50/70 via-white to-slate-50 px-5 py-6">
        <h2 className="font-display text-lg font-semibold text-slate-900">Quick tips</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700">
          <li>Prefer official or editor-uploaded packs on AP / English pages when available.</li>
          <li>Use Forum shared space for peer materials; check filenames before saving.</li>
          <li>Respect copyright — study use only; do not redistribute restricted content.</li>
        </ol>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {RELATED.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm transition hover:border-brand-300 hover:shadow-md"
          >
            <h3 className="font-display text-lg font-semibold text-slate-900 group-hover:text-brand-800">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
            <p className="mt-3 text-sm font-medium text-brand-700">Open →</p>
          </Link>
        ))}
      </section>

      <p className="text-sm text-slate-500">
        Also see{" "}
        <Link href="/explore/simulation-workshop" className="font-medium text-brand-700 hover:underline">
          Simulation Workshop
        </Link>
        .
      </p>
    </div>
  );
}
