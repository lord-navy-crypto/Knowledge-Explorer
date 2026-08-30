"use client";

import dynamic from "next/dynamic";
import { normalizeAiDialogueText, normalizeAuthoredText, stabilizeStreamingMath } from "@/lib/unicode-math";

type Mode = "markdown" | "math" | "inline-math";

type Props = {
  children: string;
  mode?: Mode;
  className?: string;
  clampLines?: 2 | 3 | 4;
  streaming?: boolean;
  aiDialogue?: boolean;
};

const HeavyRenderer = dynamic(() => import("@/components/RichContentRenderer"), {
  ssr: false,
  loading: () => null,
});

/**
 * Lightweight content shell. Markdown/KaTeX dependencies are split into a
 * separate chunk so navigation and card-list routes do not pay for the full
 * renderer before the page itself is interactive.
 */
export default function RichContent({
  children,
  mode = "markdown",
  className = "",
  clampLines,
  streaming = false,
  aiDialogue = false,
}: Props) {
  const raw = (children ?? "").toString();
  const normalized = aiDialogue ? normalizeAiDialogueText(raw) : normalizeAuthoredText(raw);
  const text = streaming ? stabilizeStreamingMath(normalized) : normalized;
  if (!text.trim()) return null;

  const clampClass =
    clampLines === 2
      ? "line-clamp-2"
      : clampLines === 3
        ? "line-clamp-3"
        : clampLines === 4
          ? "line-clamp-4"
          : "";

  // Keep useful text visible immediately while the richer renderer chunk loads.
  // The absolutely positioned fallback is replaced as soon as HeavyRenderer mounts.
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className={`${mode === "math" || mode === "inline-math" ? "font-mono" : "whitespace-pre-wrap"} ${clampClass} ${className} text-slate-600`.trim()}
      >
        {text}
      </div>
      <div className="absolute inset-0 bg-inherit">
        <HeavyRenderer text={text} mode={mode} className={className} clampClass={clampClass} />
      </div>
    </div>
  );
}

/** Prefer this for formula.expression fields (Unicode or LaTeX). */
export function FormulaMath({
  expression,
  className = "",
}: {
  expression: string;
  className?: string;
}) {
  return (
    <RichContent
      mode="math"
      className={`rounded-lg bg-slate-50 px-4 py-3 text-lg text-slate-900 ${className}`.trim()}
    >
      {expression}
    </RichContent>
  );
}
