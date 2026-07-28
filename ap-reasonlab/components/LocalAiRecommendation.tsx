import {
  LOCAL_AI_RECOMMENDATION_EN,
  LOCAL_AI_RECOMMENDATION_ZH,
} from "@/lib/ai-local-recommendation";

type Variant = "card" | "inline" | "hero";

type Props = {
  variant?: Variant;
  className?: string;
  /** Hide the English subline on tight layouts. */
  compact?: boolean;
};

/**
 * Author note shown on AI settings, toolbox, home, and desktop surfaces.
 */
export default function LocalAiRecommendation({
  variant = "card",
  className = "",
  compact = false,
}: Props) {
  if (variant === "hero") {
    return (
      <p
        className={`rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm leading-relaxed text-white/95 backdrop-blur-sm ${className}`.trim()}
      >
        <span className="font-semibold text-white">{LOCAL_AI_RECOMMENDATION_ZH}</span>
        {!compact ? (
          <span className="mt-1 block text-xs text-blue-100/90">{LOCAL_AI_RECOMMENDATION_EN}</span>
        ) : null}
      </p>
    );
  }

  if (variant === "inline") {
    return (
      <p className={`text-xs leading-relaxed text-slate-600 ${className}`.trim()}>
        <span className="font-medium text-emerald-900">{LOCAL_AI_RECOMMENDATION_ZH}</span>
        {!compact ? (
          <span className="mt-1 block text-slate-500">{LOCAL_AI_RECOMMENDATION_EN}</span>
        ) : null}
      </p>
    );
  }

  return (
    <div
      className={`rounded-xl border border-emerald-200 bg-emerald-50/90 px-3 py-2.5 text-sm leading-relaxed text-emerald-950 ${className}`.trim()}
      role="note"
    >
      <p className="text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
        作者建议 · Author note
      </p>
      <p className="mt-1 font-medium text-emerald-900">{LOCAL_AI_RECOMMENDATION_ZH}</p>
      {!compact ? <p className="mt-1 text-xs text-emerald-900/80">{LOCAL_AI_RECOMMENDATION_EN}</p> : null}
    </div>
  );
}
