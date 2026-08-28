import { NextRequest, NextResponse } from "next/server";
import { parseAiProvider, parseSiteModelChoice, runChatJson } from "@/lib/ai-client";
import { conceptExplainSystem } from "@/lib/ai-prompts";
import { appendAiSiteContext, buildServerAiSiteContext } from "@/lib/ai-site-context-server";
import { finalizeAiAssistantMath, withFormulaAccuracy } from "@/lib/ai-latex-accuracy";
import { createCloudAiSseResponse } from "@/lib/ai-route-stream";

async function buildConceptPayload(body: Record<string, unknown>) {
  const subject = String(body.subject || "").trim();
  const conceptTitle = String(body.conceptTitle || body.concept || "").trim();
  const conceptSummary = String(body.conceptSummary || "").trim();
  const mode = String(body.mode || "explain").trim();
  const question = String(body.question || "").trim();
  const userApiKey = String(body.userApiKey || "").trim();
  const provider = parseAiProvider(body.provider);
  const siteModel = parseSiteModelChoice(body.siteModel);
  const lockToConcept = Boolean(body.lockToConcept);
  const siteSearch = body.siteSearch !== false;

  const modeHint =
    mode === "formula-derive"
      ? "Mode focus: derive/explain the pasted formula or relation (assumptions, meaning). Do not finish a graded numeric answer."
      : mode === "generate-questions"
        ? "Mode focus: invent short original practice questions from the pasted topic/problem stem. No copyrighted exam items."
        : mode === "concept-extension"
          ? "Mode focus: treat the pasted text as a BASIC concept or formula. Spread outward into AP exam extension scenes — extension concepts, formulas, moves, and common stretch patterns. Not harder for hardness’ sake — richer / combined / constrained. Do not finish a graded numeric final answer."
          : `Mode: ${mode}`;

  const defaultQuestion =
    mode === "quiz" || mode === "generate-questions"
      ? "Quiz me / generate practice on this concept."
      : mode === "concept-extension"
        ? "Extend this basic concept/formula into typical AP exam extension scenes."
        : "Explain this concept clearly for AP study.";

  const user = `Subject: ${subject || "AP"}
Concept title: ${conceptTitle || "(user will name it in the question)"}
Concept summary (may be empty): ${conceptSummary || "(none)"}
${modeHint}
Lock to this concept only: ${lockToConcept ? "yes" : "no — still must stay on learning/AP concepts"}
User message:
${question || defaultQuestion}

Return JSON with refused, reply, equations, formulas, quizPrompt, aiMayBeWrong.`;

  const siteContext = await buildServerAiSiteContext(
    `${subject}\n${conceptTitle}\n${conceptSummary}\n${question}`,
    siteSearch,
    "formulas"
  );
  const userWithSite = appendAiSiteContext(user, siteContext);

  return {
    subject,
    conceptTitle,
    mode,
    userApiKey,
    provider,
    siteModel,
    system: withFormulaAccuracy(conceptExplainSystem(mode), subject),
    user: userWithSite,
    maxTokens: mode === "concept-extension" ? 4096 : 3072,
  };
}

function mapConceptDone(
  data: Record<string, unknown>,
  meta: { note: string; model: string; provider: string }
) {
  const refused = Boolean(data.refused);
  const replyRaw =
    String(data.reply || "").trim() ||
    (refused
      ? "Sorry — that is unrelated to this concept or to learning, so I will not answer."
      : "No response generated.");
  const finalized = finalizeAiAssistantMath(
    replyRaw,
    data.equations,
    data.formulas
  );
  return {
    refused,
    reply: finalized.prose,
    quizPrompt: String(data.quizPrompt || "").trim(),
    equations: finalized.equations.slice(0, 8),
    formulas: Array.isArray(data.formulas) ? data.formulas.map(String).slice(0, 8) : [],
    aiMayBeWrong:
      String(data.aiMayBeWrong || "").trim() ||
      "AI may be wrong. Verify with your notes or textbook.",
    note: meta.note,
    model: meta.model,
    provider: meta.provider,
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const subject = String(body.subject || "").trim();
    const conceptTitle = String(body.conceptTitle || body.concept || "").trim();
    const conceptSummary = String(body.conceptSummary || "").trim();
    const question = String(body.question || "").trim();

    if (!conceptTitle && !question) {
      return NextResponse.json(
        { error: "Provide a concept name or a question about a concept." },
        { status: 400 }
      );
    }
    if (subject.length > 160 || conceptTitle.length > 200 || conceptSummary.length > 8_000 || question.length > 8_000) {
      return NextResponse.json({ error: "Concept request is too long" }, { status: 400 });
    }

    const built = await buildConceptPayload(body);

    if (body.stream === true) {
      return createCloudAiSseResponse({
        system: built.system,
        user: built.user,
        maxTokens: built.maxTokens,
        userApiKey: built.userApiKey || undefined,
        provider: built.provider,
        siteModel: built.siteModel,
        mapDone: mapConceptDone,
      });
    }

    try {
      const result = await runChatJson({
        system: built.system,
        user: built.user,
        maxTokens: built.maxTokens,
        userApiKey: built.userApiKey || undefined,
        provider: built.provider,
        siteModel: built.siteModel,
      });
      return NextResponse.json(mapConceptDone(result.data, result));
    } catch (error) {
      if (built.userApiKey) {
        const message = error instanceof Error ? error.message : "AI call failed";
        return NextResponse.json({ error: message }, { status: 502 });
      }
      console.error(error);
      const mode = String(body.mode || "explain").trim();
      const seed = conceptTitle || "your base concept/formula";
      if (mode === "concept-extension") {
        return NextResponse.json({
          refused: false,
          reply: `## Base\nMock extension map for “${seed}”.\n\n## Extension scenes\n1) Ideal / fixed setup → add a constraint or moving reference.\n2) Single-object use → system / multi-step FRQ scene.\n\n## Extension concepts\nRelated AP ideas that often appear with this base (configure a live API key for real maps).\n\n## Extension formulas\nExtended relations that reuse the base under extra conditions.\n\n## Extension moves\nChoose axes / combine laws / introduce the new constraint.\n\n## Common AP extension patterns\nSteady → transient; 1D → 2D; ideal → non-ideal.\n\n## Self-check\nName one way an FRQ could stretch “${seed}” without changing the core law.`,
          quizPrompt: `Name one common AP stretch of “${seed}” (scene + extra concept).`,
          formulas: [`Base: ${seed} — extended forms need a live model`],
          aiMayBeWrong: "Mock response — not a real model.",
          note: "Mock mode (no API key yet).",
        });
      }
      return NextResponse.json({
        refused: false,
        reply: conceptTitle
          ? `Mock explain for “${conceptTitle}”: restudy the definition, list 2 key points from your notes, and invent one tiny example (no full solutions). Configure GROQ_API_KEY for live AI.`
          : "Mock mode: name a concept to explain. Configure site API keys for live answers.",
        quizPrompt: conceptTitle
          ? `In one sentence, what must you not confuse “${conceptTitle}” with?`
          : "",
        aiMayBeWrong: "Mock response — not a real model.",
        note: "Mock mode (no API key yet).",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
