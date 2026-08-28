import { expect, test } from "@playwright/test";

test("quick search finds calculator", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto("/");
  const quickBtn = page.getByRole("button", { name: /quick search/i });
  await quickBtn.click();
  const dialog = page.getByRole("dialog", { name: /quick search/i });
  await expect(dialog).toBeVisible();
  await page.getByRole("searchbox").fill("calculator");
  await expect(page.getByRole("option").filter({ hasText: /calculator/i }).first()).toBeVisible({
    timeout: 10000,
  });
});

test("search page ranks explore for explore query", async ({ page }) => {
  await page.goto("/search?q=explore");
  await expect(page.getByRole("heading", { name: /site search engine/i })).toBeVisible();
  const exploreHit = page.locator("a.card-hover").filter({ hasText: /Explore/i }).first();
  await expect(exploreHit).toBeVisible({ timeout: 10000 });
});

test("search page surfaces TOEFL english content", async ({ page }) => {
  await page.goto("/search?q=TOEFL%20reading");
  const toeflHit = page.locator("a.card-hover").filter({ hasText: /TOEFL/i }).first();
  await expect(toeflHit).toBeVisible({ timeout: 10000 });
});

test("TOEFL hub shows playable MCQ bank", async ({ page }) => {
  await page.goto("/english/toefl");
  await expect(page.getByRole("heading", { name: /in-site practice questions/i })).toBeVisible();
  await expect(page.getByText(/Original multiple-choice/i)).toBeVisible();
  await page.getByRole("button", { name: /^A\./ }).first().click();
  await expect(page.getByRole("status")).toBeVisible();
});

test("SAT reading section filters MCQs", async ({ page }) => {
  await page.goto("/english/sat/reading");
  await expect(page.getByRole("heading", { name: /Reading · practice questions/i })).toBeVisible();
});
