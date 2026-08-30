// @ts-check
import { test, expect } from '@playwright/test';
//operations will be visible. By default it's unvisible by code headless:true.
test.use({ headless: false });
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
