"use client";

/**
 * Root fallback when the root layout itself fails.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "3rem 1.25rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "1.5rem" }}>Application error</h1>
        <p style={{ color: "#475569", marginTop: "0.75rem" }}>
          A client-side exception occurred. After a deploy, clear cache or hard-refresh
          (Ctrl/Cmd+Shift+R).
        </p>
        <p style={{ color: "#94a3b8", fontSize: "0.75rem", marginTop: "0.5rem" }}>
          {error?.message || "Unknown error"}
        </p>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            marginTop: "1.25rem",
            padding: "0.6rem 1rem",
            borderRadius: "0.5rem",
            border: "0",
            background: "#1e3a5f",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
