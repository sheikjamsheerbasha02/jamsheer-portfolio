import { test, expect } from "@playwright/test";

test("application is reachable", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Software Developer & AI Engineer/i })).toBeVisible();
});

test("portfolio primary sections are present", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("link", { name: "About" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Skills" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Work" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Approach" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Credentials" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Contact" })).toBeVisible();

  await expect(page.getByRole("heading", { name: "FAHIM" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "AIRA" })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Have an idea\?/i })).toBeVisible();
});
