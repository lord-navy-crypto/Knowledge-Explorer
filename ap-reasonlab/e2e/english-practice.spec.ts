import { test, expect } from "@playwright/test";

test("SAT reading section shows timer and resume banner after answer", async ({ page }) => {
  await page.goto("/english/sat/reading");
  await expect(page.getByRole("heading", { name: /Reading · practice questions/i })).toBeVisible();
  await expect(page.getByRole("button", { name: "Start timer" })).toBeVisible();

  const firstChoice = page.getByRole("button", { name: /^A\./ }).first();
  await firstChoice.click();
  await expect(page.getByText("Progress saved — resume anytime on this device.")).toBeVisible();
});

test("Physics 1 Set B practice set is reachable", async ({ page }) => {
  await page.goto("/practice?subject=AP%20Physics%201");
  await page.getByRole("button", { name: /Generated Sets/i }).click();
  await expect(page.getByRole("heading", { name: "Physics 1 — Energy & Work", exact: true })).toBeVisible();
  await expect(page.getByText("Set B").first()).toBeVisible();
  const setB = page.getByRole("link", { name: /Energy & Work Set B/i });
  await expect(setB).toBeVisible();
  await setB.click();
  await expect(page).toHaveURL(/questionnaires\/phys1-gen-energy-b/);
});

test("MCQ score and review-wrong mode", async ({ page }) => {
  await page.goto("/english/sat/reading");
  await page.getByRole("button", { name: /^D\./ }).first().click();
  await expect(page.getByText(/Score:/)).toBeVisible();
  const reviewBtn = page.getByRole("button", { name: /Review \d+ wrong/ });
  if (await reviewBtn.count()) {
    await reviewBtn.first().click();
    await expect(page.getByText(/Review mode/)).toBeVisible();
    await page.getByRole("button", { name: "Show all questions" }).click();
  }
});

test("beta feedback form prefill and forum tag filter", async ({ page }) => {
  await page.goto("/about");
  await page.evaluate(() => localStorage.setItem("results-forum-display-name", "Test Beta User"));
  await page.reload();
  const nameInput = page.getByPlaceholder(/Your name/i);
  await expect(nameInput).toHaveValue("Test Beta User");

  await page.goto("/forum?tag=beta-feedback");
  await expect(page.getByRole("tab", { name: "Beta feedback", selected: true })).toBeVisible();
});
