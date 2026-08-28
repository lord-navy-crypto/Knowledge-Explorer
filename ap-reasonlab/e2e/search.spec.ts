import { expect, test } from "@playwright/test";

test("quick search finds calculator", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Control+K");
  const dialog = page.getByRole("dialog", { name: /quick search/i });
  await expect(dialog).toBeVisible();
  await page.getByRole("searchbox").fill("calculator");
  await expect(page.getByRole("option").first()).toBeVisible({ timeout: 10000 });
  await expect(page.getByRole("option").filter({ hasText: /calculator/i }).first()).toBeVisible();
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

test("writing frameworks and humanities practice reachable", async ({ page }) => {
  await page.goto("/ap/writing-frameworks");
  await expect(page.getByRole("heading", { name: /AP writing frameworks/i })).toBeVisible();
  await page.goto("/practice?subject=AP%20US%20History");
  await expect(page.getByRole("heading", { name: /Practice · AP US History/i })).toBeVisible();
});
