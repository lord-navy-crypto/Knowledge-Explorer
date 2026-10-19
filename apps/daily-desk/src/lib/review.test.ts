import { describe, expect, it } from "vitest";
import { isCardDue, scheduleReview } from "./review";
import type { DeskCard } from "./workspace";

const card: DeskCard = { id: "a", front: "Capital of France?", back: "Paris", deck: "Geography" };

describe("local flashcard review", () => {
  it("treats imported cards without a schedule as due", () => {
    expect(isCardDue(card, "2026-10-19")).toBe(true);
  });

  it("schedules easy and good reviews into the future", () => {
    const easy = scheduleReview(card, "easy", "2026-10-19");
    const good = scheduleReview(card, "good", "2026-10-19");
    expect(easy.due).toBe("2026-10-22");
    expect(good.due).toBe("2026-10-20");
    expect(easy.deck).toBe("Geography");
    expect(easy.reviews).toBe(1);
  });

  it("returns forgotten cards to today's queue", () => {
    const after = scheduleReview({ ...card, interval: 14, reviews: 4 }, "again", "2026-10-19");
    expect(after.due).toBe("2026-10-19");
    expect(after.interval).toBe(0);
    expect(after.reviews).toBe(5);
  });
});
