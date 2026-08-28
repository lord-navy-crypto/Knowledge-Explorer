import { test, expect } from "@playwright/test";

test("Chem CED Set E practice is reachable", async ({ page }) => {
  await page.goto("/practice?subject=AP%20Chemistry");
  await expect(page.getByRole("heading", { name: /Practice · AP Chemistry/i })).toBeVisible();
  const setLink = page.getByRole("link", { name: /CED Depth Set E/i }).first();
  await expect(setLink).toBeVisible();
  await setLink.click();
  await expect(page.getByRole("heading", { name: /CED Depth Set E/i })).toBeVisible();
});

test("USH humanities Set E practice is reachable", async ({ page }) => {
  await page.goto("/practice?subject=AP%20US%20History");
  await expect(page.getByRole("link", { name: /CED Depth Set E/i }).first()).toBeVisible();
});

test("mobile nav shows Practice quick link", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const practiceLink = page.getByRole("link", { name: "Practice", exact: true });
  await expect(practiceLink).toBeVisible();
  await practiceLink.click();
  await expect(page).toHaveURL(/\/practice/);
});
