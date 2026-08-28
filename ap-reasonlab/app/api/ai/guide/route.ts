import { NextRequest, NextResponse } from "next/server";
import { parseAiProvider, parseSiteModelChoice, runChatJson } from "@/lib/ai-client";
import { SITE_GUIDE_FACTS, SITE_GUIDE_SYSTEM } from "@/lib/ai-prompts";
import { appendAiSiteContext, buildServerAiSiteContext } from "@/lib/ai-site-context-server";
import { createCloudAiSseResponse } from "@/lib/ai-route-stream";

function mapGuideDone(
  data: Record<string, unknown>,
  meta: { note: string; model: string; provider: string }
) {
  const refused = Boolean(data.refused);
  return {
    refused,
    reply:
      String(data.reply || "").trim() ||
      (refused
        ? "I only help with how to use this website. For study help, open Hint & Process or Concept Explainer."
        : "No response generated."),
    aiMayBeWrong:
      String(data.aiMayBeWrong || "").trim() ||
      "Guide answers can be incomplete — check About / Manage pages too.",
    note: meta.note,
    model: meta.model,
    provider: meta.provider,
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const question = String(body.question || "").trim();
    const userApiKey = String(body.userApiKey || "").trim();
    const provider = parseAiProvider(body.provider);
    const siteModel = parseSiteModelChoice(body.siteModel);

    if (!question) {
      return NextResponse.json({ error: "Question is required" }, { status: 400 });
    }
    if (question.length > 4_000) {
      return NextResponse.json({ error: "Question is too long (max 4,000 characters)" }, { status: 400 });
    }

    const user = `SITE FACTS:
${SITE_GUIDE_FACTS}

User question:
${question}

Return JSON with refused, reply, aiMayBeWrong.`;

    const siteContext = await buildServerAiSiteContext(question, true, "nav");
    const userWithSite = appendAiSiteContext(user, siteContext);

    if (body.stream === true) {
      return createCloudAiSseResponse({
        system: SITE_GUIDE_SYSTEM,
        user: userWithSite,
        maxTokens: 2048,
        userApiKey: userApiKey || undefined,
        provider,
        siteModel,
        mapDone: mapGuideDone,
      });
    }

    try {
      const result = await runChatJson({
        system: SITE_GUIDE_SYSTEM,
        user: userWithSite,
        maxTokens: 2048,
        userApiKey: userApiKey || undefined,
        provider,
        siteModel,
      });
      return NextResponse.json(mapGuideDone(result.data, result));
    } catch (error) {
      if (userApiKey) {
        const message = error instanceof Error ? error.message : "AI call failed";
        return NextResponse.json({ error: message }, { status: 502 });
      }
      console.error(error);
      const lower = question.toLowerCase();
      const studyLike = /(solve|formula|homework|physics|calculus|integral|force)/i.test(lower);
      if (studyLike) {
        return NextResponse.json({
          refused: true,
          reply:
            "I only help with how to use this website. For study help, open Hint & Process or Concept Explainer.",
          aiMayBeWrong: "Mock guide mode.",
          note: "Mock mode (no API key yet).",
        });
      }
      return NextResponse.json({
        refused: false,
        reply:
          "Knowledge Explorer is an academic box & platform. Start at /ap for subjects, use Manage with a change code to edit, and open AI Toolbox (/hints) for Hint & Process, Concept Explainer, or this Site Guide. Configure GROQ_API_KEY for live answers.",
        aiMayBeWrong: "Mock guide mode.",
        note: "Mock mode (no API key yet).",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
