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

  it("ranks JSON formatter for json pretty", () => {
    const hits = searchSiteEngine("json pretty", null, { limit: 8 });
    expect(hits[0]?.href).toContain("/tools/json-formatter");
    expect(hits.some((h) => h.type === "tool")).toBe(true);
  });

  it("ranks Base64 encoder for base64", () => {
    const hits = searchSiteEngine("base64", null, { limit: 8 });
    expect(hits.some((h) => h.href.includes("/tools/encode-decode"))).toBe(true);
    expect(hits[0]?.href).toContain("/tools/encode-decode");
  });

  it("ranks Python playground for python playground", () => {
    const hits = searchSiteEngine("python playground", null, { limit: 8 });
    expect(hits.some((h) => h.href === "/code/python")).toBe(true);
    expect(hits[0]?.href).toBe("/code/python");
  });

  it("indexes rust playground without stealing python rank", () => {
    const rust = searchSiteEngine("rust playground", null, { limit: 8 });
    expect(rust.some((h) => h.href === "/code/rust")).toBe(true);
    expect(rust[0]?.href).toBe("/code/rust");
    const py = searchSiteEngine("python playground", null, { limit: 8 });
    expect(py[0]?.href).toBe("/code/python");
  });

  it("ranks Forum My box for my box", () => {
    const hits = searchSiteEngine("my box", null, { limit: 8 });
    expect(hits.some((h) => h.href === "/forum?tab=box")).toBe(true);
    expect(hits[0]?.href).toBe("/forum?tab=box");
  });

  it("links managed forum posts to thread permalinks and searches attachments", () => {
    const hits = searchSiteEngine(
      "notes.pdf",
      {
        forumPosts: [
          {
            id: "thread-abc",
            title: "Study packet",
            body: "See the attached file.",
            author: "Ada",
            createdAt: 1,
            replies: [
              {
                id: "r1",
                author: "Bob",
                body: "Opening it now",
                createdAt: 2,
              },
            ],
            attachments: [
              {
                id: "a1",
                name: "notes.pdf",
                mime: "application/pdf",
                fileId: "f1",
                size: 12,
              },
            ],
          },
        ],
      },
      { limit: 10 }
    );
    expect(hits.some((h) => h.href.includes("thread=thread-abc"))).toBe(true);
  });
});

describe("toolbox search lanes", () => {
  it("detects tools, code, and forum lanes", async () => {
    const { detectSearchLane } = await import("@/lib/toolbox-search");
    expect(detectSearchLane(["json", "pretty"])).toBe("tools");
    expect(detectSearchLane(["python", "playground"])).toBe("code");
    expect(detectSearchLane(["my", "box"])).toBe("forum");
  });

  it("indexes json formatter, encode-decode, playgrounds, and forum lanes", () => {
    const corpus = getStaticSearchCorpus();
    expect(corpus.some((row) => row.href === "/tools/json-formatter")).toBe(true);
    expect(corpus.some((row) => row.href === "/tools/encode-decode")).toBe(true);
    expect(corpus.some((row) => row.href === "/code/python" && row.type === "code")).toBe(true);
    expect(corpus.some((row) => row.href === "/forum?tab=box" && row.type === "forum")).toBe(true);
  });
});
