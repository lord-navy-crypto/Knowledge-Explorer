"use client";

/**
 * Route-level recovery UI. Do NOT auto-reload — that feels like the site
 * “闪退 / keeps flashing” when chunks or hydration keep failing.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const message = `${error?.name || ""} ${error?.message || ""}`.trim();
  const looksLikeStaleChunk =
    /ChunkLoadError|Loading chunk|Failed to fetch dynamically imported module|Importing a module script failed/i.test(
      message
    );
  const looksLikeTranslateDom =
    /insertBefore|NotFoundError|removeChild|The node before which the new node is to be inserted/i.test(
      message
    );

  return (
    <div className="mx-auto max-w-lg space-y-4 px-4 py-16 text-center">
      <h1 className="font-display text-2xl font-semibold text-slate-900">Something went wrong</h1>
      <p className="text-sm text-slate-600">
        {looksLikeTranslateDom
          ? "This is often caused by Chrome’s page translation (翻译此网页). Turn translation OFF for this site, then reload. Browser extensions that rewrite the page can cause the same error."
          : looksLikeStaleChunk
            ? "This often happens after a site update. Hard-refresh the page (Ctrl/Cmd+Shift+R), or tap Reload once below."
            : "Please try again. If it keeps happening, hard-refresh (Ctrl/Cmd+Shift+R) or open a private window."}
      </p>
      {message ? (
        <p className="break-words text-xs text-slate-400">{message.slice(0, 240)}</p>
      ) : null}
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
