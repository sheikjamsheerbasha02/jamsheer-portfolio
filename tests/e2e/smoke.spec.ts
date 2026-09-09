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

  for (const name of ["About", "Skills", "Work", "Approach", "Contact"]) {
    await expect(
      primaryNavigation.getByRole("link", { name, exact: true })
    ).toBeVisible();
  }

  await expect(page.getByRole("heading", { name: "FAHIM" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "AIRA" })).toBeVisible();
  await expect(page.locator("#approach")).toBeVisible();
  await expect(page.locator("#contact")).toBeVisible();
});

test("primary navigation links target their sections", async ({ page }) => {
  await page.goto("/");

  const primaryNavigation = page.getByRole("navigation", {
    name: /primary navigation/i,
  });

  const expectedLinks = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Work", "#work"],
    ["Approach", "#approach"],
    ["Contact", "#contact"],
  ];

  for (const [name, href] of expectedLinks) {
    await expect(
      primaryNavigation.getByRole("link", { name, exact: true })
    ).toHaveAttribute("href", href);
  }
});
