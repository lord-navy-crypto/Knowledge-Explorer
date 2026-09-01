/**
 * Soft-strip accidental chain-of-thought dumps (e.g. leftover <think> tags).
 * Local DeepSeek-R1 Distill was removed because waiting on a private thinking
 * phase made the UI feel stuck; this helper is only a safety net now.
 *
 * Generation budgets / thinking-disable policy: `lib/local-ai-policy.ts`.
 */

const THINK_OPEN = /<(?:redacted_)?think(?:ing)?\b[^>]*>/i;
const THINK_CLOSE = /<\/(?:redacted_)?think(?:ing)?>/i;

export function isInsideOpenThinkBlock(text: string): boolean {
  const openIdx = text.search(THINK_OPEN);
  if (openIdx < 0) return false;
  const after = text.slice(openIdx);
  return !THINK_CLOSE.test(after);
}

export function stripReasoningTrace(text: string, opts?: { trim?: boolean }): string {
  if (!text) return "";

  let out = text
    .replace(/<(?:redacted_)?think\b[^>]*>[\s\S]*?<\/(?:redacted_)?think>/gi, "")
    .replace(/<thinking\b[^>]*>[\s\S]*?<\/thinking>/gi, "")
    .replace(/<reason(?:ing)?\b[^>]*>[\s\S]*?<\/reason(?:ing)?>/gi, "")
    .replace(/◁think▷[\s\S]*?◁\/think▷/gi, "")
    .replace(/\[thinking\][\s\S]*?\[\/thinking\]/gi, "");

  const openIdx = out.search(/<(?:redacted_)?think(?:ing)?\b/i);
  if (openIdx >= 0 && !/<\/(?:redacted_)?think(?:ing)?>/i.test(out.slice(openIdx))) {
    out = out.slice(0, openIdx);
  }

  out = out.replace(/\n{3,}/g, "\n\n");
  return opts?.trim === false ? out : out.trim();
}

/** WebLLM allows only one system message (index 0). Merge the nudge into it. */
export function mergeLocalDirectNudge(
  messages: Array<{ role: string; content: string }>,
  nudge: string = LOCAL_MARKDOWN_NUDGE
): Array<{ role: string; content: string }> {
  const sysIdx = messages.findIndex((m) => m.role === "system");
  if (sysIdx >= 0) {
    return messages.map((m, i) =>
      i === sysIdx ? { ...m, content: `${m.content}\n\n${nudge}` } : m
    );
  }
  return [{ role: "system", content: nudge }, ...messages];
}

export function isReasoningLocalModel(modelId: string): boolean {
  return /deepseek-r1|r1-distill|reasoning/i.test(modelId);
}

export function supportsDisableThinking(modelId: string): boolean {
  return /Qwen3/i.test(modelId);
}

export function shouldDisableThinking(modelId: string): boolean {
  return supportsDisableThinking(modelId);
}

export function isHeavyLocalModel(modelId: string): boolean {
  return /(?:^|[^0-9.])([789])B(?:-|$)/i.test(modelId);
}

export function isMediumLocalModel(modelId: string): boolean {
  return /(?:^|[^0-9.])([34])B(?:-|$)/i.test(modelId) && !isHeavyLocalModel(modelId);
}

export function isTinyLocalModel(modelId: string): boolean {
  return /(?:135M|360M|0\.[0-9]+B|1B(?:-|$)|gemma3-1b)/i.test(modelId) && !isMediumLocalModel(modelId) && !isHeavyLocalModel(modelId);
}

/** First-pass prompts now adapt to the task; never run an automatic full rewrite for thinness. */
export function localReplyLooksThin(_text: string): boolean {
  return false;
}

/** Formula repair/rendering is synchronous; never launch another generation just to add equations. */
export function localReplyNeedsMoreFormulas(_text: string): boolean {
  return false;
}

/** Kept for older call sites; quality passes are disabled. */
export const LOCAL_MORE_FORMULAS_NUDGE =
  "If math is genuinely relevant, add only the missing KaTeX-ready equations without restarting the answer. Never invent formulas for humanities or language tasks.";

export function localNudgeForModel(modelId: string): string {
  const base = shouldDisableThinking(modelId) ? LOCAL_DIRECT_ANSWER_NUDGE : LOCAL_MARKDOWN_NUDGE;
  const sizeHint = isTinyLocalModel(modelId)
    ? LOCAL_TINY_POWER_HINT
    : isHeavyLocalModel(modelId)
      ? LOCAL_HEAVY_POWER_HINT
      : LOCAL_MID_POWER_HINT;
  return `${base}\n\n${LOCAL_DEPTH_NUDGE}\n\n${LOCAL_QUALITY_NUDGE}\n\n${sizeHint}`;
}

export const REASONING_MODEL_DIRECT_ANSWER =
  "You may reason privately inside <think>...</think> if needed. After </think>, output ONLY the final answer in the requested format — no meta commentary about your thinking.";

export const LOCAL_MARKDOWN_NUDGE =
  "Reply in clean markdown. Adapt the response structure to the actual task. Use KaTeX-ready equations only when math/science genuinely needs them; never force equation sections into humanities, English, or navigation answers.";

export const LOCAL_DIRECT_ANSWER_NUDGE =
  "Thinking mode is OFF. Start the visible answer immediately — no <think> tags. Adapt the answer to the task instead of applying one fixed worksheet template.";

/** Modern AP/general Local policy: classify the task before choosing the answer shape. */
export const LOCAL_DEPTH_NUDGE = `Use a task-first response. First infer what kind of academic task this is, then choose only the structure that helps.

Quantitative math/science:
- Name the governing idea/law quickly.
- Use a short ## Equations block with important lines as Name | latex | symbol meanings (NO $ characters).
- Track units and show a partial calculation when useful; do not finish a prohibited graded final.

Conceptual science/math:
- Explain the causal/physical relationship first.
- Include only equations that genuinely clarify the concept.
- Add a misconception or check when helpful.

Humanities / history / social science / AP English:
- Do NOT invent equations or science worksheet sections.
- Use claim → evidence/context → reasoning, comparison, sourcing, chronology, or rhetorical analysis as appropriate.
- For writing/argument tasks, focus on thesis, evidence, reasoning, organization, and revision priorities.

Short factual/concept question:
- Answer directly and completely without padding.

Complex problem:
- Use clear sections and enough detail to be useful, but finish in one generation whenever possible.

Continue the current dialogue naturally. Do not restart from zero on follow-ups.`;

export const LOCAL_QUALITY_NUDGE = `Quality rules:
- Lead with the specific concept, law, grammar point, historical relationship, or code symbol that matters.
- Every paragraph should add useful information; avoid filler and repeated summaries.
- Match the domain: equations for quantitative work, evidence/reasoning for humanities, language analysis for English, code/test logic for programming.
- Use appended Knowledge Explorer materials when relevant and cite only real hit titles.
- If uncertain, say what is uncertain and give the best verification step.
- Keep ethics: coach graded work rather than replacing the student's thinking.`;

export const LOCAL_TINY_POWER_HINT =
  "Small model mode: keep the response compact and task-specific. Prefer one strong explanation/patch/check over many generic sections.";

export const LOCAL_MID_POWER_HINT =
  "Mid model mode: give a complete task-specific response with the most useful example/check, without repeating the prompt or padding.";

export const LOCAL_HEAVY_POWER_HINT =
  "Heavy model mode: use extra capacity for accuracy, edge cases, evidence, units, or deeper reasoning where the task benefits; stay organized and avoid rambling.";

export const LOCAL_RETRY_NO_THINK_NUDGE =
  "Retry: write the visible answer now. Zero <think> tags. Use the task-appropriate structure and give a complete useful answer without filler.";

export const LOCAL_EXPAND_NUDGE =
  "Add only the missing useful detail. Do not restart or repeat the answer.";

export const LOCAL_CONTINUE_NUDGE =
  "Your previous reply was cut off mid-answer by the model context window. Continue EXACTLY from the last incomplete sentence or heading. Do NOT restart. Do NOT repeat earlier sections. Finish the remaining answer now.";

/** English Local is task-first: translator, grammar, writing, materials, strategy and speaking differ. */
export const LOCAL_ENGLISH_NUDGE = `Thinking mode is OFF. Start the visible English-learning answer immediately. No <think> tags and no fake math/science sections.

Choose the response shape from the requested task:
- Translation: give the translation directly. Preserve meaning, tone, names, formatting, and register. Add explanation only if the user asks.
- Grammar: identify the exact issue → corrected form → short reason → one contrasting example when useful.
- Writing feedback: prioritize the 2–3 highest-impact issues first; point to specific phrases; give targeted revisions or a short revised excerpt rather than rewriting everything by default.
- Language materials: extract/generate useful vocabulary, collocations, sentence frames, and natural examples; group them so they are reusable.
- TOEFL/SAT strategy: name the task type → decision process → common trap → one mini drill/check.
- Practice generator: create a new practice item modeled on the requested skill, not a copy of the original answer.
- Speaking coach: focus on fluency, grammar, word choice, organization, and a natural read-aloud revision; do not bury the student in a long essay.

Be proportionate: simple tasks get concise answers; complex drafts get deeper feedback. Continue follow-ups from the existing context.`;

export const LOCAL_ENGLISH_RETRY_NUDGE =
  "Retry: answer the English task directly now. Zero <think> tags. Use the correct task shape (translation, grammar, writing, materials, strategy, practice, or speaking) and avoid generic tutoring filler.";

export const LOCAL_GUIDE_NUDGE = `Thinking mode is OFF. Write the visible site-navigation answer immediately — do not open <think> or <thinking> tags.

This is Knowledge Explorer Site Guide — NOT subject tutoring.
- Do NOT invent formulas or equation sections.
- Name real paths, tabs, and buttons.
- Give short numbered steps.
- If the request is study help, point to the appropriate AI for AP / English / Code area.`;

export function localNudgeForEnglish(modelId: string): string {
  if (shouldDisableThinking(modelId)) return LOCAL_ENGLISH_NUDGE;
  return `Reply in clean markdown for English learning.\n\n${LOCAL_ENGLISH_NUDGE}`;
}

/** Coding Local aligns with the modern diagnose → minimal patch → verify workflow. */
export const LOCAL_CODING_NUDGE = `Thinking mode is OFF. Start the visible coding answer immediately. No <think> tags and no AP-science worksheet template.

Use the requested coding task:
- Debug: likely root cause → exact failing expression/state → minimum patch → reproduce/verify.
- Write: behavior + assumptions → small plan → minimal runnable core → one test.
- Explain: what it does → data/control flow → non-obvious detail → check question.
- CSA FRQ: signatures/state → plan/helpers → small trace → guided partial Java structure → edge cases.

Preserve the student's code structure when possible. Do not rewrite an entire file for a local bug. Put code in fenced blocks with a language tag. If evidence is insufficient, rank the top hypotheses and say how to distinguish them.`;

export const LOCAL_CODING_RETRY_NUDGE =
  "Retry: answer the coding task now. Zero <think> tags. Give diagnosis/approach, the minimum useful code or patch, and one verification step.";

export function localNudgeForCoding(modelId: string): string {
  if (shouldDisableThinking(modelId)) return LOCAL_CODING_NUDGE;
  return `Reply in clean markdown for coding help. Use fenced code blocks.\n\n${LOCAL_CODING_NUDGE}`;
}
