import { expect, test } from "@playwright/test";

test("writing frameworks and humanities practice reachable", async ({ page }) => {
  await page.goto("/ap/writing-frameworks");
  await expect(page.getByRole("heading", { name: /AP writing frameworks/i })).toBeVisible();
  await page.goto("/practice?subject=AP%20US%20History");
  await expect(page.getByRole("heading", { name: /Practice · AP US History/i })).toBeVisible();
});
