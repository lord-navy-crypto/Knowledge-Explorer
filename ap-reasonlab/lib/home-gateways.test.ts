import { describe, expect, it } from "vitest";
import { HOME_GATEWAYS } from "@/data/home-gateways";

describe("home gateways", () => {
  it("lists Simulation first and Sentinel Mac as box four", () => {
    expect(HOME_GATEWAYS[0]?.id).toBe("workshops");
    expect(HOME_GATEWAYS[3]?.id).toBe("sentinel");
    expect(HOME_GATEWAYS.some((g) => g.id === "forum")).toBe(false);
  });
});
