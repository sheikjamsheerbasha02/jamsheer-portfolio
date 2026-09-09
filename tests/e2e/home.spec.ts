import { expect, test } from "@playwright/test";

test("portfolio homepage exposes the primary content and navigation", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Sheik Jamsheer/i);
  await expect(page.getByRole("heading", { name: /Software Developer & AI Engineer/i })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();

  for (const section of ["About", "Skills", "Work", "Approach", "Credentials", "Contact"]) {
    await expect(page.getByRole("link", { name: section, exact: true })).toHaveAttribute("href", `#${section.toLowerCase()}`);
  }

  await expect(page.getByRole("heading", { name: "FAHIM", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "AIRA", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Have an idea\?/i })).toBeVisible();
});
