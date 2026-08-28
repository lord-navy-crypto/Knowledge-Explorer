"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type AiStatus = {
  configured: boolean;
  note: string;
};

export default function SiteAiStatusBanner() {
  const [status, setStatus] = useState<AiStatus | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const res = await fetch("/api/ai/status", { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as AiStatus;
        if (!cancelled) setStatus(data);
      } catch {
        /* ignore */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (dismissed || !status || status.configured) return null;

  return (
    <div
      role="status"
      className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950"
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p>
          <strong>Cloud AI is in demo mode.</strong> {status.note}{" "}
          <Link href="/guide#ai" className="font-semibold underline">
            Setup guide
          </Link>{" "}
          · Local AI in this browser still works.
        </p>
        <button
          type="button"
          className="rounded-lg px-2 py-1 text-xs font-medium text-amber-800 hover:bg-amber-100"
          onClick={() => setDismissed(true)}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
