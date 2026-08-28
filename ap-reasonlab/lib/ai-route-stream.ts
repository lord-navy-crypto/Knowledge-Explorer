import { runChatJsonStream, type StreamTokenCallback } from "@/lib/ai-client";
import { encodeAiSseEvent, AI_SSE_HEADERS } from "@/lib/ai-sse";

export type StreamJsonRouteOptions = {
  system: string;
  user: string;
  maxTokens?: number;
  userApiKey?: string;
  provider?: Parameters<typeof runChatJsonStream>[0]["provider"];
  siteModel?: Parameters<typeof runChatJsonStream>[0]["siteModel"];
  mapDone: (data: Record<string, unknown>, meta: { note: string; model: string; provider: string }) => Record<string, unknown>;
};

/** Run cloud AI with SSE token events + final JSON payload. */
export function createCloudAiSseResponse(options: StreamJsonRouteOptions): Response {
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const enqueue = (event: Parameters<typeof encodeAiSseEvent>[0]) => {
        controller.enqueue(encodeAiSseEvent(event));
      };
      try {
        const result = await runChatJsonStream({
          system: options.system,
          user: options.user,
          maxTokens: options.maxTokens,
          userApiKey: options.userApiKey,
          provider: options.provider,
          siteModel: options.siteModel,
          onToken: ((_delta, full) => {
            enqueue({ type: "token", text: _delta, full });
          }) satisfies StreamTokenCallback,
        });
        enqueue({
          type: "done",
          data: options.mapDone(result.data, {
            note: result.note,
            model: result.model,
            provider: result.provider,
          }),
        });
      } catch (error) {
        enqueue({
          type: "error",
          error: error instanceof Error ? error.message : "AI stream failed",
        });
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, { headers: AI_SSE_HEADERS });
}
