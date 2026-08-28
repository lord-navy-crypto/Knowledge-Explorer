import { expect, test } from "@playwright/test";

test("home → explore → AP hub", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: /AP & English/i }).first().click();
  await expect(page).toHaveURL(/\/explore\/ap-english/);
  await page.getByRole("link", { name: /Open AP/i }).click();
  await expect(page).toHaveURL(/\/ap$/);
  await expect(page.getByRole("heading", { name: /Choose your AP subject/i })).toBeVisible();
});

test("calculator redirect lands in AI Toolbox", async ({ page }) => {
  await page.goto("/tools/calculator");
  await expect(page).toHaveURL(/\/hints\?tool=calculator/);
  await expect(page.getByRole("heading", { name: /AI Toolbox/i })).toBeVisible();
});

test("forum post validation rejects short display name", async ({ request }) => {
  const res = await request.post("/api/edit", {
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": `playwright-${Date.now()}`,
    },
    data: {
      action: "add_forum_post",
      item: { author: "a", title: "Smoke test", body: "Hello from Playwright smoke test." },
    },
  });
  expect(res.status()).toBe(400);
  const data = await res.json();
  expect(data.error).toMatch(/2–40 characters/i);
});

test("writing frameworks page is reachable", async ({ page }) => {
  await page.goto("/ap/writing-frameworks");
  await expect(page.getByRole("heading", { name: /AP writing frameworks/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Concepts/i }).first()).toBeVisible();
});
