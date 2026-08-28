import { describe, expect, it } from "vitest";
import { groupPracticeSets, practiceSetLabel } from "@/lib/practice-set-group";
import type { Questionnaire } from "@/lib/types";

function miniSet(title: string): Questionnaire {
  return {
    id: title.replace(/\s/g, "-").toLowerCase(),
    title,
    subject: "AP Physics 1",
    kind: "generated",
    description: "test",
    items: [],
  };
}

describe("practiceSetLabel", () => {
  it("parses Set B from title", () => {
    expect(practiceSetLabel("Physics 1 — Energy & Work Set B")).toBe("Set B");
  });
});

describe("groupPracticeSets", () => {
  it("groups A and B under same base", () => {
    const groups = groupPracticeSets([
      miniSet("Physics 1 — Energy & Work Set B"),
      miniSet("Physics 1 — Energy & Work Set A"),
    ]);
    expect(groups).toHaveLength(1);
    expect(groups[0]!.sets.map((s) => practiceSetLabel(s.title))).toEqual(["Set A", "Set B"]);
  });
});
