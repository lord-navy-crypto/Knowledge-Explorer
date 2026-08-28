import { describe, expect, it, beforeEach } from "vitest";
import { searchSiteEngine } from "@/lib/site-search-engine";
import {
  getStaticSearchCorpus,
  resetStaticSearchCorpusCache,
} from "@/lib/site-search-static-corpus";

describe("static search corpus", () => {
  beforeEach(() => {
    resetStaticSearchCorpusCache();
  });

  it("indexes study tools and user guide sections", () => {
    const corpus = getStaticSearchCorpus();
    expect(corpus.some((row) => row.id === "tool-flashcards")).toBe(true);
    expect(corpus.some((row) => row.id.startsWith("user-guide-"))).toBe(true);
    expect(corpus.some((row) => row.href === "/key-concepts")).toBe(true);
    expect(corpus.some((row) => row.href === "/disclaimer")).toBe(true);
  });

  it("does not index admin routes in public corpus", () => {
    const corpus = getStaticSearchCorpus();
    const hrefs = corpus.map((row) => row.href);
    expect(hrefs).not.toContain("/manage");
    expect(hrefs).not.toContain("/admin");
    expect(hrefs).not.toContain("/manage-guide");
  });
});

describe("searchSiteEngine", () => {
  it("finds flashcards and TOEFL guide content", () => {
    const flashcards = searchSiteEngine("flashcards", null, { limit: 20 });
    expect(flashcards.some((hit) => hit.href.includes("flashcards"))).toBe(true);

    const toefl = searchSiteEngine("TOEFL reading", null, { type: "guide", limit: 20 });
    expect(toefl.length).toBeGreaterThan(0);
  });

  it("does not surface manage pages for manage query", () => {
    const hits = searchSiteEngine("manage content", null, { limit: 30 });
    expect(hits.every((hit) => !hit.href.startsWith("/manage"))).toBe(true);
  });
});
