import { NextRequest, NextResponse } from "next/server";
import { parseAiProvider, parseSiteModelChoice, runChatJson } from "@/lib/ai-client";
import { HINT_PROCESS_SYSTEM } from "@/lib/ai-prompts";
import { appendAiSiteContext, buildServerAiSiteContext } from "@/lib/ai-site-context-server";
import { withFormulaAccuracy } from "@/lib/ai-latex-accuracy";
import { createCloudAiSseResponse } from "@/lib/ai-route-stream";
import { mapHintsResponse } from "@/lib/hints-map";

function mockHints(question: string, subject: string) {
  return {
    hints: [
      `Identify what ${subject} concept this question is testing and write the main linking equation before substituting numbers.`,
      "List knowns, unknowns, and units. Sketch a diagram if the setup is physical.",
      "Compute one intermediate quantity with units, then finish the last step yourself.",
    ],
    keyFormulas: ["Write the main equation symbols for this topic (from your sheet)."],
    knownsUnknowns: ["known: list given quantities with units", "unknown: name the target quantity"],
    checkpoints: [
      "Check units of any intermediate quantity before substituting.",
      "Confirm sign convention matches your diagram.",
      "Your intermediate should relate knowns to the unknown — not skip to the final number.",
    ],
    processOutline: [
      "Clarify the physical/math situation",
      "Select relevant formula(s)",
      "Compute/check an intermediate",
      "Finish the last algebra yourself",
    ],
    workedPartial: ["Intermediate: leave a symbolic or partially substituted expression with units."],
    aiMayBeWrong:
      "AI may make formula or reasoning errors. Verify every step with your textbook or teacher.",
    note: `Mock mode (no API key yet). Question received: "${question.slice(0, 80)}${question.length > 80 ? "..." : ""}"`,
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const question = String(body.question || "").trim();
    const subject = String(body.subject || "AP Physics 1");
    const notes = String(body.notes || "").trim();
    const userApiKey = String(body.userApiKey || "").trim();
    const provider = parseAiProvider(body.provider);
    const siteModel = parseSiteModelChoice(body.siteModel);

    if (!question) {
      return NextResponse.json({ error: "Question is required" }, { status: 400 });
    }
    if (question.length > 12_000) {
      return NextResponse.json({ error: "Question is too long (max 12,000 characters)." }, { status: 400 });
    }
    if (subject.length > 120 || notes.length > 12_000) {
      return NextResponse.json({ error: "Subject or notes are too long" }, { status: 400 });
    }

    const user = `Subject: ${subject}

Question:
${question}

${notes ? `Student notes / attempt (optional):\n${notes}` : ""}

Return JSON with hints, equations, keyFormulas, knownsUnknowns, checkpoints, processOutline, workedPartial, aiMayBeWrong.`;

    const siteSearch = body.siteSearch !== false;
    const siteContext = await buildServerAiSiteContext(
      `${subject}\n${question}\n${notes}`,
      siteSearch,
      "formulas"
    );
    const userWithSite = appendAiSiteContext(user, siteContext);
    const system = withFormulaAccuracy(HINT_PROCESS_SYSTEM, subject);

    if (body.stream === true) {
      return createCloudAiSseResponse({
        system,
        user: userWithSite,
        maxTokens: 3072,
        userApiKey: userApiKey || undefined,
        provider,
        siteModel,
        mapDone: (data, meta) => mapHintsResponse(data, meta),
      });
    }

    try {
      const result = await runChatJson({
        system,
        user: userWithSite,
        maxTokens: 3072,
        userApiKey: userApiKey || undefined,
        provider,
        siteModel,
      });
      return NextResponse.json(mapHintsResponse(result.data, result));
    } catch (error) {
      if (userApiKey) {
        const message = error instanceof Error ? error.message : "AI call failed";
        return NextResponse.json({ error: message }, { status: 502 });
      }
      console.error(error);
      return NextResponse.json(mockHints(question, subject));
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
