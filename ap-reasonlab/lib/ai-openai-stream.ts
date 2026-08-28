import { stripReasoningTrace } from "@/lib/ai-reasoning-strip";
import type { AiProvider, ChatJsonResult } from "@/lib/ai-client";

export type StreamTokenCallback = (delta: string, fullText: string) => void;

/** Parse OpenAI-compatible SSE lines from a chunk buffer. */
export function parseOpenAiSseChunk(
  buffer: string,
  onDelta: (delta: string) => void
): string {
  let remainder = buffer;
  const lines = remainder.split("\n");
  remainder = lines.pop() || "";
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("data:")) continue;
    const payload = trimmed.slice(5).trim();
    if (!payload || payload === "[DONE]") continue;
    try {
      const json = JSON.parse(payload) as {
        choices?: Array<{ delta?: { content?: string } }>;
      };
      const delta = json.choices?.[0]?.delta?.content;
      if (delta) onDelta(delta);
    } catch {
      // ignore malformed SSE frames
    }
  }
  return remainder;
}

export async function callOpenAiCompatibleStream(options: {
  url: string;
  apiKey: string;
  model: string;
  system: string;
  user: string;
  maxTokens: number;
  provider: AiProvider;
  extraHeaders?: Record<string, string>;
  includeResponseFormat?: boolean;
  onToken: StreamTokenCallback;
  signal?: AbortSignal;
}): Promise<ChatJsonResult> {
  const body: Record<string, unknown> = {
    model: options.model,
    messages: [
      { role: "system", content: options.system },
      { role: "user", content: options.user },
    ],
    temperature: 0.35,
    max_tokens: options.maxTokens,
    stream: true,
  };
  if (options.includeResponseFormat !== false) {
    body.response_format = { type: "json_object" };
  }

  const res = await fetch(options.url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${options.apiKey}`,
      ...options.extraHeaders,
    },
    body: JSON.stringify(body),
    signal: options.signal,
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`${options.provider} API error ${res.status}: ${errText}`);
  }

  if (!res.body) {
    throw new Error(`${options.provider} stream: empty body`);
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let sseBuffer = "";
  let fullText = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    sseBuffer += decoder.decode(value, { stream: true });
    sseBuffer = parseOpenAiSseChunk(sseBuffer, (delta) => {
      fullText += delta;
      options.onToken(delta, fullText);
    });
  }

  const text = stripReasoningTrace(fullText);
  let data: Record<string, unknown>;
  try {
    data = JSON.parse(text);
  } catch {
    const jsonMatch = String(text).match(/\{[\s\S]*\}/);
    try {
      data = JSON.parse(jsonMatch ? jsonMatch[0] : text);
    } catch {
      data = { raw: text };
    }
  }

  return {
    data,
    provider: options.provider,
    model: options.model,
    note: `Stream · ${options.provider} (${options.model}).`,
  };
}
