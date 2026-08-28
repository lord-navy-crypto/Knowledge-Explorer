import { describe, expect, it } from "vitest";
import { NextRequest } from "next/server";
import { POST as englishPost } from "@/app/api/ai/english/route";
import { POST as codingPost } from "@/app/api/ai/coding/route";
import { POST as conceptPost } from "@/app/api/ai/concept/route";

function jsonPost(url: string, body: unknown) {
  return new NextRequest(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("AI route smoke tests", () => {
  it("rejects empty English tutor input", async () => {
    const res = await englishPost(
      jsonPost("http://localhost/api/ai/english", { input: "", mode: "grammar-explanation" })
    );
    expect(res.status).toBe(400);
  });

  it("returns demo English feedback without an API key", async () => {
    const res = await englishPost(
      jsonPost("http://localhost/api/ai/english", {
        input: "Please check my thesis sentence for clarity.",
        mode: "writing-feedback",
      })
    );
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(typeof data.feedback).toBe("string");
    expect(data.feedback.length).toBeGreaterThan(0);
  });

  it("refuses clearly off-scope English requests before calling the model", async () => {
    const res = await englishPost(
      jsonPost("http://localhost/api/ai/english", {
        input: "Solve this AP Physics force problem: F = ma with m = 2 kg.",
        mode: "speaking-practice",
      })
    );
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.refused).toBe(true);
    expect(data.feedback).toMatch(/English learning/i);
  });

  it("rejects empty coding tutor input", async () => {
    const res = await codingPost(
      jsonPost("http://localhost/api/ai/coding", { input: "", mode: "debug", language: "Python" })
    );
    expect(res.status).toBe(400);
  });

  it("rejects concept tutor requests with no concept or question", async () => {
    const res = await conceptPost(
      jsonPost("http://localhost/api/ai/concept", {
        input: "",
        subject: "AP Calculus AB/BC",
        conceptTitle: "",
        question: "",
      })
    );
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toMatch(/concept name or a question/i);
  });
});
