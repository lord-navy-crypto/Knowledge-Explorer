import { defineConfig, devices } from "@playwright/test";

const PORT = process.env.PLAYWRIGHT_PORT || "3099";
const baseURL = `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: "e2e",
  timeout: 60_000,
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  webServer: {
    command: `npm run build && npx next start -p ${PORT}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    cwd: ".",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
