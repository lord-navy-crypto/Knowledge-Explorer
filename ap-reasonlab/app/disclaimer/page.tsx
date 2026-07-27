import Link from "next/link";
import { brand } from "@/data/brand";
import {
  accuracyDisclaimer,
  copyrightDisclaimer,
  trademarkDisclaimer,
} from "@/data/disclaimer";

export const metadata = {
  title: `Copyright & disclaimers — ${brand.name}`,
  description: "AP / College Board trademark notice and content accuracy disclaimers.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Legal</p>
        <h1 className="text-3xl font-bold text-slate-900">Copyright &amp; disclaimers</h1>
        <p className="text-slate-600">
          These notices apply to the whole {brand.name} website — AP pages, English, Academic,
          tools, AI Toolbox, uploads, and every other section — whether or not you are studying AP.
        </p>
      </section>

      <section className="card space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Trademarks</h2>
        <p className="text-sm leading-relaxed text-slate-700">{trademarkDisclaimer}</p>
      </section>

      <section className="card space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Copyright</h2>
        <p className="text-sm leading-relaxed text-slate-700">{copyrightDisclaimer}</p>
      </section>

      <section className="card space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Accuracy &amp; sources</h2>
        <p className="text-sm leading-relaxed text-slate-700">{accuracyDisclaimer}</p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>Built-in notes and practice may lag curriculum updates.</li>
          <li>User uploads and community posts are not reviewed as official curriculum.</li>
          <li>AI hints and generated text can be wrong — treat them as starting points only.</li>
        </ul>
      </section>

      <section className="card space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Official resources</h2>
        <p className="text-sm text-slate-700">
          For authoritative AP® course and exam information, use the College Board. For TOEFL®,
          use ETS.
        </p>
        <div className="flex flex-wrap gap-3">
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
        </div>
      </section>

      <p className="text-sm text-slate-500">
        <Link href="/about" className="font-medium text-brand-700 hover:underline">
          About {brand.name}
        </Link>
        {" · "}
        <Link href="/" className="hover:underline">
          Home
        </Link>
      </p>
    </div>
  );
}
