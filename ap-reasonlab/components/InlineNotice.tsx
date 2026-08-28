"use client";

export default function InlineNotice({
  message,
  onDismiss,
  tone = "warning",
}: {
  message: string;
  onDismiss?: () => void;
  tone?: "warning" | "error" | "info";
}) {
  if (!message) return null;
  const toneClass =
    tone === "error"
      ? "border-red-200 bg-red-50 text-red-900"
      : tone === "info"
        ? "border-sky-200 bg-sky-50 text-sky-900"
        : "border-amber-200 bg-amber-50 text-amber-900";

  return (
    <p
      role="alert"
      className={`flex flex-wrap items-center justify-between gap-2 rounded-lg border px-3 py-2 text-sm ${toneClass}`}
    >
      <span>{message}</span>
      {onDismiss ? (
        <button type="button" className="text-xs font-semibold underline" onClick={onDismiss}>
          Dismiss
        </button>
      ) : null}
    </p>
  );
}
