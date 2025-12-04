import { test, expect } from "@playwright/test";

test("Sample Automation Test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await expect(page.locator("#userEmail")).toBeEnabled();
  await page.locator("#userEmail").fill("test@mail.com");
  await expect(page.locator("#userEmail")).toBeEnabled();
  await page.locator("#userPassword").fill("abcdE@123");
  await expect(page.locator("#login")).toBeVisible();
  await page.locator("#login").click();
  await expect(page.getByText("Incorrect email or password.")).toBeVisible();
});
