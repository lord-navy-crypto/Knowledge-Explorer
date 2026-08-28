"use client";

import Link from "next/link";

type Props = {
  message: string;
  onDismiss?: () => void;
};

/** Prominent one-time notice after write-convert wizard handoff. */
export default function WriteToolHandoffBanner({ message, onDismiss }: Props) {
  if (!message) return null;

  return (
    <div
      role="status"
      className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-950 shadow-sm"
    >
      <div className="flex min-w-0 flex-1 items-start gap-2">
        <span className="mt-0.5 shrink-0 text-base" aria-hidden>
          ↪
        </span>
        <p>
          <span className="font-semibold">{message}</span>{" "}
          <span className="text-emerald-800">
            Text was inserted once from the{" "}
            <Link href="/tools/write-convert" className="font-medium underline hover:text-emerald-950">
              Write & convert wizard
            </Link>
            .
          </span>
        </p>
      </div>
      {onDismiss ? (
        <button
          type="button"
          className="shrink-0 rounded-lg px-2 py-1 text-xs font-semibold text-emerald-800 hover:bg-emerald-100"
          onClick={onDismiss}
        >
          Dismiss
        </button>
      ) : null}
    </div>
  );
}
