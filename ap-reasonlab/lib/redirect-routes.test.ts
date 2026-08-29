import { describe, expect, it } from "vitest";
import { KNOWN_REDIRECTS } from "@/lib/known-redirects";

describe("known redirect routes", () => {
  it("lists bookmark-safe redirects with distinct sources", () => {
    const sources = KNOWN_REDIRECTS.map((row) => row.from);
    expect(sources.length).toBe(new Set(sources).size);
    expect(sources.length).toBeGreaterThanOrEqual(8);
  });

  it("points AI for AP and toolbox tools into hints", () => {
    const aiForAp = KNOWN_REDIRECTS.find((row) => row.from === "/ai-for-ap");
    expect(aiForAp?.to).toBe("/hints?section=ai-for-ap");

    const calculator = KNOWN_REDIRECTS.find((row) => row.from === "/tools/calculator");
    expect(calculator?.to).toBe("/hints?tool=calculator");

    const grapher = KNOWN_REDIRECTS.find((row) => row.from === "/tools/grapher");
    expect(grapher?.to).toBe("/hints?tool=grapher");

    const pdfCompress = KNOWN_REDIRECTS.find((row) => row.from === "/tools/pdf-compress");
    expect(pdfCompress?.to).toBe("/tools/pdf-tools?mode=compress");

    const imageCrop = KNOWN_REDIRECTS.find((row) => row.from === "/tools/image-crop");
    expect(imageCrop?.to).toBe("/tools/image-compress?mode=crop");
  });

  it("folds legacy academic routes into Forum", () => {
    const academic = KNOWN_REDIRECTS.find((row) => row.from === "/academic");
    expect(academic?.to).toBe("/forum");

    const materials = KNOWN_REDIRECTS.find((row) => row.from === "/academic/materials");
    expect(materials?.to).toBe("/forum?tab=shared");
  });
});
