import { test, expect } from "@playwright/test";

test("application is reachable", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Software Developer & AI Engineer/i })).toBeVisible();
});

test("portfolio primary sections are present", async ({ page }) => {
  await page.goto("/");

  const navigation = page.getByRole("navigation", { name: "Primary navigation" });
  await expect(navigation.getByRole("link", { name: "About", exact: true })).toBeVisible();
  await expect(navigation.getByRole("link", { name: "Skills", exact: true })).toBeVisible();
  await expect(navigation.getByRole("link", { name: "Work", exact: true })).toBeVisible();
  await expect(navigation.getByRole("link", { name: "Approach", exact: true })).toBeVisible();
  await expect(navigation.getByRole("link", { name: "Credentials", exact: true })).toBeVisible();
  await expect(navigation.getByRole("link", { name: "Contact", exact: true })).toBeVisible();

  await expect(page.getByRole("heading", { name: "FAHIM" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "AIRA" })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Have an idea\?/i })).toBeVisible();
});
