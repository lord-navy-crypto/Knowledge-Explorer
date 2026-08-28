import { describe, expect, it } from "vitest";
import { HOME_GATEWAYS } from "@/data/home-gateways";

describe("home gateways", () => {
  it("lists Forum first and Sentinel Mac as box four", () => {
    expect(HOME_GATEWAYS[0]?.id).toBe("forum");
    expect(HOME_GATEWAYS[3]?.id).toBe("sentinel");
    expect(HOME_GATEWAYS[3]?.href).toBe("/explore/sentinel");
  });
});
