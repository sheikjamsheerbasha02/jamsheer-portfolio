import { test, expect } from "@playwright/test";

test("application is reachable", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Project foundation" })).toBeVisible();
});
