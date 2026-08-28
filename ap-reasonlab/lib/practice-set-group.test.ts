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

  it("parses Set E from CED title", () => {
    expect(practiceSetLabel("AP Chemistry — CED Depth Set E")).toBe("Set E");
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

  it("orders Set E after Set D", () => {
    const groups = groupPracticeSets([
      miniSet("AP Chemistry — CED Depth Set E"),
      miniSet("AP Chemistry — CED Depth Set A"),
    ]);
    expect(groups[0]!.sets.map((s) => practiceSetLabel(s.title))).toEqual(["Set A", "Set E"]);
  });
});
