import Link from "next/link";

export const metadata = {
  title: "Usage Info",
  robots: { index: false, follow: false },
};

export default function UsageInfoPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Backend logs</p>
        <h1 className="mt-1 text-3xl font-bold text-slate-950">Usage Info</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Knowledge Explorer now emits privacy-minimal structured usage events to the server. On Vercel,
          open Runtime Logs and search for <code>[usage]</code> to inspect them.
        </p>
      </div>

      <section className="card space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-950">Currently recorded</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Page route, without query parameters.</li>
          <li>Device class: mobile, tablet, or desktop.</li>
          <li>Browser language and timezone.</li>
          <li>Referrer host only; same-site navigation is recorded as <code>internal</code>.</li>
          <li>Server timestamp.</li>
        </ul>
      </section>

      <section className="card space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-950">Never recorded</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>AI prompts, AI responses, chat history, question answers, or pasted text.</li>
          <li>API keys, cookies, passwords, change codes, or account identifiers.</li>
          <li>Full referrer URLs or URL query strings.</li>
          <li>Client IP addresses in the application-generated usage payload.</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
        <p className="font-semibold text-slate-950">Log format</p>
        <pre className="mt-2 overflow-x-auto whitespace-pre-wrap text-xs">{`[usage] {"type":"usage","event":"page_view","route":"/easy-local-ai","device":"desktop","language":"en-US","timezone":"America/New_York","referrerHost":"internal","at":"..."}`}</pre>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link href="/admin" className="btn-secondary">Back to Admin</Link>
        <Link href="/manage" className="btn-primary">Manage console</Link>
      </div>
    </div>
  );
}
