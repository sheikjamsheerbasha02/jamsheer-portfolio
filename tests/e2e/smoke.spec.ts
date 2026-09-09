import { expect, test } from "@playwright/test";

test("application is reachable", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: /Software Developer.*AI Engineer/i })
  ).toBeVisible();
});

test("portfolio primary sections are present", async ({ page }) => {
  await page.goto("/");

  const primaryNavigation = page.getByRole("navigation", {
    name: /primary navigation/i,
  });

  await expect(
    primaryNavigation.getByRole("link", { name: "About", exact: true })
  ).toBeVisible();
  await expect(
    primaryNavigation.getByRole("link", { name: "Skills", exact: true })
  ).toBeVisible();
  await expect(
    primaryNavigation.getByRole("link", { name: "Work", exact: true })
  ).toBeVisible();
  await expect(
    primaryNavigation.getByRole("link", { name: "Approach", exact: true })
  ).toBeVisible();
  await expect(
    primaryNavigation.getByRole("link", { name: "Contact", exact: true })
  ).toBeVisible();

  await expect(page.getByRole("heading", { name: "FAHIM" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "AIRA" })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Engineering approach/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Let’s build/i })).toBeVisible();
});

test("primary navigation links target their sections", async ({ page }) => {
  await page.goto("/");

  const primaryNavigation = page.getByRole("navigation", {
    name: /primary navigation/i,
  });

  await expect(
    primaryNavigation.getByRole("link", { name: "About", exact: true })
  ).toHaveAttribute("href", "#about");
  await expect(
    primaryNavigation.getByRole("link", { name: "Skills", exact: true })
  ).toHaveAttribute("href", "#skills");
  await expect(
    primaryNavigation.getByRole("link", { name: "Work", exact: true })
  ).toHaveAttribute("href", "#work");
  await expect(
    primaryNavigation.getByRole("link", { name: "Approach", exact: true })
  ).toHaveAttribute("href", "#approach");
  await expect(
    primaryNavigation.getByRole("link", { name: "Contact", exact: true })
  ).toHaveAttribute("href", "#contact");
});
