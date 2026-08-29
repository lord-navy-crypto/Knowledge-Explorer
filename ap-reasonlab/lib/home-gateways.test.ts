import { describe, expect, it } from "vitest";
import { HOME_GATEWAYS } from "@/data/home-gateways";

describe("home gateways", () => {
  it("lists AP & English first and Sentinel Mac as box four", () => {
    expect(HOME_GATEWAYS[0]?.id).toBe("ap-english");
    expect(HOME_GATEWAYS[3]?.id).toBe("sentinel");
    expect(HOME_GATEWAYS.some((g) => g.id === "forum")).toBe(false);
    const tools = HOME_GATEWAYS.find((g) => g.id === "tools-code");
    expect(tools?.links?.some((l) => l.href === "/forum")).toBe(true);
    expect(tools?.links?.some((l) => l.href.includes("calculator"))).toBe(true);
    expect(tools?.links?.some((l) => l.href === "/code/python")).toBe(false);
  });
});
