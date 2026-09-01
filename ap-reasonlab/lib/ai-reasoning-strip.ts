/**
 * Soft-strip accidental chain-of-thought dumps (e.g. leftover <think> tags).
 * Local DeepSeek-R1 Distill was removed because waiting on a private thinking
 * phase made the UI feel stuck; this helper is only a safety net now.
 *
 * Generation budgets / thinking-disable policy: `lib/local-ai-policy.ts`.
 */

import { splitAiReplyEquations } from "@/lib/ai-latex-accuracy";

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

/**
 * The first-pass Local prompt already asks for a complete structured reply.
 * Do not launch a second full generation merely because a usable answer is short;
 * this was a major source of perceived stalls on 0.5B–3B browser models.
 * Blank replies are still retried and context-truncated replies are still continued
 * by LocalAIProvider.
 */
export function localReplyLooksThin(_text: string): boolean {
  return false;
}

/**
 * Formula repair/rendering is synchronous and cheap. Avoid a second generation
 * just to densify equations; the primary AP nudge already requires an equation block.
 */
export function localReplyNeedsMoreFormulas(_text: string): boolean {
  return false;
}

/** Used when the reply has almost no rendered math. Kept for compatibility. */
export const LOCAL_MORE_FORMULAS_NUDGE =
  "Add KaTeX-ready equations. Keep your teaching text. Insert an ## Equations section with 2–4 lines as: Name | latex | symbol meanings (latex has NO $ characters). Prefer formulas from any site materials / formula pack already in the prompt. Do not rewrite the whole answer shorter. Do not invent conflicting physics. Never emit $...$ or $$$.";

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
  "Reply in markdown. Put every important formula under ## Equations as lines Name | latex | meaning (latex has NO $). Prose stays plain English — never $...$, $$...$$, or $$$, and never bare \\frac in paragraphs.";

export const LOCAL_DIRECT_ANSWER_NUDGE =
  "Thinking mode is OFF. Write the visible answer immediately — do not open <think> or <thinking> tags. Put key formulas under ## Equations as Name | latex | meaning (NO $ in latex). Prose has no $...$ / $$$.";

export const LOCAL_DEPTH_NUDGE = `Speak as you go: write useful teaching text sentence by sentence right away. Do not silently plan a short answer first.

Length & detail:
- Give a complete teaching reply in one pass. Prefer useful detail over a stub, but do not pad the answer just to make it long.
- Use clear sections (idea → key formulas → symbol meanings → steps → partial example → checkpoint → what the student finishes) when they help.
- Explain WHY each step works, not only what to do.

Formulas (required when the topic is math/science/AP):
- Include a ## Equations section with the important lines: Name | latex | symbol meanings (latex has NO $ characters).
- Do not wrap formulas in $...$ / $$...$$ in prose — the UI renders equation cards.
- Show a worked PARTIAL example with numbers/units when useful.

Put all useful content in this visible streamed reply. Aim to finish cleanly in this one pass.`;

export const LOCAL_QUALITY_NUDGE = `Power & quality (stay stable):
- Be precise: name the right law, formula, unit, or code symbol on the first relevant sentence.
- Prefer correct, checkable steps over vague pep-talk. If unsure, say so briefly and give the best next check.
- Structure clearly with markdown headings/bullets so students can scan.
- Avoid filler loops (“as mentioned above…” repeated). Each sentence should add a new fact, formula, or step.
- Never invent fake site citations. Only cite Knowledge Explorer hits when they were appended.
- Keep ethics: do not finish graded numeric finals; leave the last algebra to the student when required.`;

export const LOCAL_TINY_POWER_HINT =
  "Small model mode: give a complete compact teaching reply with clear sections and an ## Equations block when math is relevant. Stay concrete; skip long digressions.";

export const LOCAL_MID_POWER_HINT =
  "Mid model mode: aim for a compact worksheet-style answer — important formulas with symbol meanings, a partial example when useful, one common mistake, and a clear next step.";

export const LOCAL_HEAVY_POWER_HINT =
  "Heavy model mode: use your capacity for depth and accuracy — careful unit tracking, richer partial work, sharper misconception notes, and tighter formula explanations. Stay organized; do not ramble.";

export const LOCAL_RETRY_NO_THINK_NUDGE =
  "Retry: start the visible teaching answer NOW. Zero <think> tags. Give a complete answer with the needed equations, steps, and partial example — no hidden planning and no filler.";

export const LOCAL_EXPAND_NUDGE =
  "Add only the missing useful detail. Do not restart or repeat the answer.";

export const LOCAL_CONTINUE_NUDGE =
  "Your previous reply was cut off mid-answer by the model context window. Continue EXACTLY from the last incomplete sentence or heading. Do NOT restart. Do NOT repeat earlier sections. Finish the remaining teaching content now.";

export const LOCAL_ENGLISH_NUDGE = `Thinking mode is OFF. Write the visible English answer immediately — do not open <think> or <thinking> tags.

This is English learning (grammar / translation / writing / language materials / exam strategy / practice) — NOT AP science.
- Do NOT invent physics formulas, science worksheets, or $...$ math dumps.
- Speak clearly sentence by sentence.
- Translator: JUST TRANSLATE — direction line + full translation only.
- Coaching modes (grammar / writing / materials / strategy / practice): be concrete and strong — name the grammar/vocab point, give 2 corrected examples, and one next practice step. Prefer substance over praise.
- Stay useful; avoid empty pep-talk.`;

export const LOCAL_ENGLISH_RETRY_NUDGE =
  "Retry: start the English answer NOW. Zero <think> tags. No fake math formulas. Translate or coach in clear language — not an AP science worksheet.";

export const LOCAL_GUIDE_NUDGE = `Thinking mode is OFF. Write the visible site-navigation answer immediately — do not open <think> or <thinking> tags.

This is Knowledge Explorer Site Guide — NOT AP science tutoring.
- Do NOT invent formulas, ## Equations sections, or $...$ math.
- Name real paths, tabs, and buttons (e.g. /hints, Manage, Concepts).
- Give numbered steps. If the student asks homework, refuse and point to AI for AP.
- Stay short and concrete.`;

export function localNudgeForEnglish(modelId: string): string {
  if (shouldDisableThinking(modelId)) return LOCAL_ENGLISH_NUDGE;
  return `Reply in markdown for English learning. Do not invent physics formulas.\n\n${LOCAL_ENGLISH_NUDGE}`;
}

export const LOCAL_CODING_NUDGE = `Thinking mode is OFF. Write the visible coding answer immediately — do not open <think> or <thinking> tags.

This is Coding AI (debug / write / explain) — NOT AP science.
- Do NOT invent physics formulas, science worksheets, or $...$ math dumps.
- Use markdown with ## Coaching / ## Steps / ## Snippet / ## Test / edge case when helpful.
- Put code in fenced blocks with a language tag (\`\`\`python, \`\`\`js, …).
- Be concrete: name the bug or pattern, give a small stub, and one test/edge case.
- Prefer teaching partials over dumping full graded homework.`;

export const LOCAL_CODING_RETRY_NUDGE =
  "Retry: start the coding answer NOW. Zero <think> tags. No fake math formulas. Steps + fenced snippet + one test idea.";

export function localNudgeForCoding(modelId: string): string {
  if (shouldDisableThinking(modelId)) return LOCAL_CODING_NUDGE;
  return `Reply in markdown for coding help. Use code fences. Do not invent physics formulas.\n\n${LOCAL_CODING_NUDGE}`;
}
