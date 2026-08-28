import { NextRequest, NextResponse } from "next/server";
import { asStringList, parseAiProvider, parseSiteModelChoice, runChatJson } from "@/lib/ai-client";
import { codingAiSystem } from "@/lib/ai-coding-prompt";
import { appendAiSiteContext, buildServerAiSiteContext } from "@/lib/ai-site-context-server";
import { createCloudAiSseResponse } from "@/lib/ai-route-stream";

function mockCoding(language: string, task: string) {
  return {
    refused: false,
    reply: `Coding AI is in offline demo mode for ${language || "code"}. Break the task into: (1) restate inputs/outputs, (2) write a tiny example by hand, (3) implement one function, (4) test an edge case.`,
    steps: [
      "Clarify inputs, outputs, and one tiny example.",
      "Write a stub function / function signature first.",
      "Add one test case before expanding.",
    ],
    snippet: language.toLowerCase().includes("python")
      ? "def solve(data):\n    # TODO: start with the simplest case\n    return data\n"
      : "",
    aiMayBeWrong: "Demo advice is generic — verify with docs or a teacher.",
    note: "⚠️ Mock demo — no website AI key configured. Switch to Local AI or add an API key.",
  };
}

function mapCodingDone(
  data: Record<string, unknown>,
  meta: { note: string; model: string; provider: string }
) {
  return {
    refused: Boolean(data.refused),
    reply: String(data.reply || data.raw || "").trim(),
    steps: asStringList(data.steps).slice(0, 6),
    snippet: String(data.snippet || "").trim(),
    aiMayBeWrong:
      String(data.aiMayBeWrong || "AI coding advice may be wrong. Test and verify.").trim(),
    note: meta.note,
    model: meta.model,
    provider: meta.provider,
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const language = String(body.language || "Python").trim();
    const task = String(body.task || body.input || "").trim();
    const code = String(body.code || "").trim();
    const focus = String(body.focus || "general").trim();
    const userApiKey = String(body.userApiKey || "").trim();
    const provider = parseAiProvider(body.provider);
    const siteModel = parseSiteModelChoice(body.siteModel);

    if (!task) {
      return NextResponse.json({ error: "Describe what you are trying to code or debug." }, { status: 400 });
    }
    if (task.length > 12_000 || code.length > 20_000 || language.length > 40) {
      return NextResponse.json({ error: "Request is too long." }, { status: 400 });
    }

    const user = `Language / stack: ${language}
Focus: ${focus}
Role: coding tutor — prefer code playgrounds/snippets from site materials if appended; ignore AP formula sheets.
Task / question:
${task}

Student code (may be empty):
${code || "(none)"}

Return Coding AI JSON.`;

    const siteSearch = body.siteSearch !== false;
    const siteContext = await buildServerAiSiteContext(`${language}\n${task}\n${code}`, siteSearch, "code");
    const userWithSite = appendAiSiteContext(user, siteContext);

    if (body.stream === true) {
      return createCloudAiSseResponse({
        system: codingAiSystem(focus),
        user: userWithSite,
        maxTokens: 4096,
        userApiKey: userApiKey || undefined,
        provider,
        siteModel,
        mapDone: mapCodingDone,
      });
    }

    try {
      const result = await runChatJson({
        system: codingAiSystem(focus),
        user: userWithSite,
        maxTokens: 4096,
        userApiKey: userApiKey || undefined,
        provider,
        siteModel,
      });
      return NextResponse.json(mapCodingDone(result.data, result));
    } catch (error) {
      if (userApiKey) {
        return NextResponse.json(
          { error: error instanceof Error ? error.message : "AI call failed" },
          { status: 502 }
        );
      }
      console.error(error);
      return NextResponse.json(mockCoding(language, task));
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
