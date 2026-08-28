import { describe, expect, it } from "vitest";
import { GET } from "@/app/api/ai/status/route";

describe("/api/ai/status", () => {
  it("returns provider flags without secrets", async () => {
    const res = await GET();
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data).toHaveProperty("configured");
    expect(data).toHaveProperty("providers");
    expect(data.providers).toHaveProperty("groq");
    expect(JSON.stringify(data)).not.toMatch(/sk-/);
  });
});
