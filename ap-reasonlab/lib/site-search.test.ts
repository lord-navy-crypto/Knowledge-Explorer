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

  it("indexes explore hub and writing frameworks", () => {
    const corpus = getStaticSearchCorpus();
    expect(corpus.some((r) => r.href === "/explore")).toBe(true);
    expect(corpus.some((r) => r.href === "/ap/writing-frameworks")).toBe(true);
    expect(corpus.some((r) => r.id.startsWith("writing-framework-"))).toBe(true);
  });

  it("finds calculator tool for calculator query", () => {
    const hits = searchSiteEngine("calculator", null, { limit: 10 });
    expect(hits.some((h) => h.href.includes("calculator"))).toBe(true);
  });

  it("finds DBQ writing framework", () => {
    const hits = searchSiteEngine("DBQ essay", null, { limit: 10 });
    expect(
      hits.some(
        (h) => h.href.includes("writing-frameworks") || h.title.toLowerCase().includes("dbq")
      )
    ).toBe(true);
  });

  it("finds explore page for explore query", () => {
    const hits = searchSiteEngine("explore", null, { limit: 10 });
    expect(hits.some((h) => h.href === "/explore" || h.href.startsWith("/explore/"))).toBe(true);
  });

  it("never returns admin or manage URLs", () => {
    for (const q of ["manage", "manage content", "admin", "login"]) {
      const hits = searchSiteEngine(q, null, { limit: 40 });
      expect(hits.every((h) => !h.href.startsWith("/manage") && !h.href.startsWith("/admin"))).toBe(
        true
      );
    }
  });

  it("ranks TOEFL english content for TOEFL query", () => {
    const hits = searchSiteEngine("TOEFL reading", null, { limit: 15 });
    expect(hits.some((h) => h.type === "english" || h.href.includes("/english/toefl"))).toBe(true);
  });
});
