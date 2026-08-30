"use client";

import { lazy, Suspense } from "react";
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

const HeavyRenderer = lazy(() => import("@/components/RichContentRenderer"));

/**
 * Lightweight content shell. Markdown/KaTeX dependencies live in a separate
 * chunk so navigation and card-list routes do not pay for the renderer before
 * the page itself is interactive. Plain text stays visible while formatting loads.
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

  const fallbackClass = `${
    mode === "math" || mode === "inline-math" ? "font-mono" : "whitespace-pre-wrap"
  } ${clampClass} ${className}`.trim();

  return (
    <Suspense fallback={<div className={fallbackClass}>{text}</div>}>
      <HeavyRenderer text={text} mode={mode} className={className} clampClass={clampClass} />
    </Suspense>
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
