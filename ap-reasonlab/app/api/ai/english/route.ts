import { NextRequest, NextResponse } from "next/server";
import { asStringList, parseAiProvider, parseSiteModelChoice, runChatJson } from "@/lib/ai-client";
import { englishTutorSystem } from "@/lib/ai-prompts";
import { appendAiSiteContext, buildServerAiSiteContext } from "@/lib/ai-site-context-server";
import { migrateEnglishTask } from "@/lib/ai-toolbox-url";
import { createCloudAiSseResponse } from "@/lib/ai-route-stream";

function isClearlyOutsideEnglishScope(input: string, mode: string): boolean {
  if (
    mode === "writing-feedback" ||
    mode === "grammar-explanation" ||
    mode === "translator"
  ) {
    return false;
  }
  const asksEnglish = /english|grammar|sentence|writing|vocab|word|reading|speaking|listening|toefl|sat|rewrite|revise|proofread|translate/i.test(input);
  const asksAnotherSubject = /\b(AP\s+)?(physics|chemistry|biology|calculus|statistics|macroeconomics|microeconomics|computer science)\b|calculate|solve the equation|find the force/i.test(input);
  return asksAnotherSubject && !asksEnglish;
}

function scopeRefusal() {
  return {
    refused: true,
    feedback: "This tutor is limited to English learning, writing, grammar, translation, TOEFL, and SAT Reading & Writing. Please use AI Toolbox for AP subject questions.",
    strengths: [], priorities: [], revisionExample: "", practicePrompt: "",
    aiMayBeWrong: "If your goal was to improve the English wording of subject text, choose Writing feedback and paste the passage again.",
    note: "English-only scope check.",
  };
}

function mockEnglishTutor(input: string, mode: string) {
  if (mode === "translator") {
    const snippet = input.slice(0, 120);
    return {
      refused: false,
      feedback: "Demo · Chinese ↔ English (configure a live API key for a real translation)",
      strengths: [],
      priorities: [],
      revisionExample: `[Demo translation of]: ${snippet}${input.length > 120 ? "…" : ""}`,
      practicePrompt: "",
      aiMayBeWrong: "Demo translation is not a real model output.",
      note: "⚠️ Mock demo — no website AI key configured. Switch to Local AI or add an API key.",
    };
  }
  return {
    refused: false,
    feedback: `⚠️ Demo mode (no website AI key). Your ${mode} request was received, but this is generic placeholder feedback — not a live model. Focus first on a clear main idea, then check whether each sentence supports it.`,
    strengths: ["You provided text or a clear learning request for review."],
    priorities: ["Check sentence boundaries.", "Replace vague wording with one specific example.", "Review transitions between ideas."],
    revisionExample: input.split(/[.!?]/)[0]?.trim() ? `Try revising one sentence for precision: “${input.split(/[.!?]/)[0].trim().slice(0, 90)}…”` : "Write one claim followed by a specific reason.",
    practicePrompt: "Rewrite one sentence using a clear claim → reason structure.",
    aiMayBeWrong: "Demo feedback is generic; verify language advice with a teacher or trusted reference.",
    note: "⚠️ Mock demo — no website AI key configured. Switch to Local AI or add an API key.",
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const input = String(body.input || "").trim();
    const mode =
      migrateEnglishTask(String(body.mode || "writing-feedback").trim()) ||
      "writing-feedback";
    const target = String(body.target || "General academic English").trim();
    const userApiKey = String(body.userApiKey || "").trim();
    const provider = parseAiProvider(body.provider);
    const siteModel = parseSiteModelChoice(body.siteModel);

    if (!input) {
      return NextResponse.json(
        {
          error:
            mode === "practice-generator"
              ? "Paste a topic first — any text. We copy it and generate a new topic from it."
              : mode === "translator"
                ? "Paste text to translate."
                : "Enter English text or a learning question.",
        },
        { status: 400 }
      );
    }
    if (input.length > 16_000) return NextResponse.json({ error: "Input is too long (maximum 16,000 characters)." }, { status: 400 });
    if (mode.length > 60 || target.length > 100) return NextResponse.json({ error: "Invalid mode or target." }, { status: 400 });
    if (isClearlyOutsideEnglishScope(input, mode)) return NextResponse.json(scopeRefusal());

    const controlBlock =
      mode === "practice-generator"
        ? `Exam/track target (tone only): ${target}
Rule: COPY whatever the student pasted as the topic (do not judge if it is a “real topic”). Then GENERATE a NEW practice topic from that copy.
`
        : mode === "language-materials"
          ? `Exam/track target: ${target}
Role: language-materials collector on large pastes; language-materials generator on short commands/sentences (语言资料, not generic data).
`
          : mode === "translator"
            ? `Exam/track target (ignore for translation): ${target}
Rule: JUST TRANSLATE. Chinese ↔ English by default (auto-detect). If the student names a direction, follow it. Put the full translation in revisionExample.
`
            : `Exam/track target: ${target}
`;

    const user = `Mode: ${mode}
${controlBlock}
Student paste / input:
${input}

Return the required English Tutor JSON.`;
    const siteSearch = body.siteSearch !== false;
    const siteContext = await buildServerAiSiteContext(`${mode}\n${target}\n${input}`, siteSearch, "language");
    const userWithSite = appendAiSiteContext(user, siteContext);
    const maxTokens = mode === "language-materials" || mode === "practice-generator" ? 6144 : 4096;

    if (body.stream === true) {
      return createCloudAiSseResponse({
        system: englishTutorSystem(mode),
        user: userWithSite,
        maxTokens,
        userApiKey: userApiKey || undefined,
        provider,
        siteModel,
        mapDone: (data, meta) => ({
          refused: Boolean(data.refused),
          feedback: String(data.feedback || data.raw || "").trim(),
          strengths: asStringList(data.strengths).slice(0, 3),
          priorities: asStringList(data.priorities).slice(0, 4),
          revisionExample: String(data.revisionExample || "").trim(),
          practicePrompt: String(data.practicePrompt || "").trim(),
          aiMayBeWrong: String(data.aiMayBeWrong || "AI language feedback may be wrong. Verify important advice.").trim(),
          note: meta.note,
          model: meta.model,
          provider: meta.provider,
        }),
      });
    }

    try {
      const result = await runChatJson({
        system: englishTutorSystem(mode),
        user: userWithSite,
        maxTokens,
        userApiKey: userApiKey || undefined,
        provider,
        siteModel,
      });
      const data = result.data;
      return NextResponse.json({
        refused: Boolean(data.refused),
        feedback: String(data.feedback || data.raw || "").trim(),
        strengths: asStringList(data.strengths).slice(0, 3),
        priorities: asStringList(data.priorities).slice(0, 4),
        revisionExample: String(data.revisionExample || "").trim(),
        practicePrompt: String(data.practicePrompt || "").trim(),
        aiMayBeWrong: String(data.aiMayBeWrong || "AI language feedback may be wrong. Verify important advice.").trim(),
        note: result.note,
        model: result.model,
        provider: result.provider,
      });
    } catch (error) {
      if (userApiKey) return NextResponse.json({ error: error instanceof Error ? error.message : "AI call failed" }, { status: 502 });
      console.error(error);
      return NextResponse.json(mockEnglishTutor(input, mode));
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
