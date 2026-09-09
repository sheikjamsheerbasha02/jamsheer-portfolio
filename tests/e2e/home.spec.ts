import { expect, test } from "@playwright/test";

test("portfolio homepage exposes the primary content and navigation", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Sheik Jamsheer/i);
  await expect(page.getByRole("heading", { name: /Software Developer & AI Engineer/i })).toBeVisible();

  const primaryNavigation = page.getByRole("navigation", { name: "Primary navigation" });
  await expect(primaryNavigation).toBeVisible();

  for (const [section, href] of [
    ["Home", "#top"],
    ["About", "#about"],
    ["Projects", "#work"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ]) {
    await expect(primaryNavigation.getByRole("link", { name: section, exact: true })).toHaveAttribute("href", href);
  }

  await expect(page.getByRole("heading", { name: "FAHIM", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "AIRA", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Let.s Build Something/i })).toBeVisible();
});
