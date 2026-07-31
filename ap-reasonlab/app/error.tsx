"use client";

import { useEffect } from "react";

/**
 * Route-level recovery for Next.js client exceptions (often stale chunks after deploy).
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    const message = `${error?.name || ""} ${error?.message || ""}`;
    const isChunk =
      /ChunkLoadError|Loading chunk|Failed to fetch dynamically imported module|Importing a module script failed/i.test(
        message
      );
    if (!isChunk || typeof window === "undefined") return;
    const key = "ke-chunk-reload";
    const last = Number(sessionStorage.getItem(key) || "0");
    if (Date.now() - last < 15_000) return;
    sessionStorage.setItem(key, String(Date.now()));
    window.location.reload();
  }, [error]);

  return (
    <div className="mx-auto max-w-lg space-y-4 px-4 py-16 text-center">
      <h1 className="font-display text-2xl font-semibold text-slate-900">Something went wrong</h1>
      <p className="text-sm text-slate-600">
        Often this is a stale browser cache after a site update. Try a hard refresh, or reload
        below.
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        <button type="button" className="btn-primary" onClick={() => reset()}>
          Try again
        </button>
        <button
          type="button"
          className="btn-secondary"
          onClick={() => {
            if (typeof window !== "undefined") window.location.reload();
          }}
        >
          Reload page
        </button>
      </div>
    </div>
  );
}
