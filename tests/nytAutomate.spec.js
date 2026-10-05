import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    console.log('ahaNytfailedsosuccessfullythatihadtousethisdummysitebecauseijustneededadummyustillheregetalifedudedosomethingelsewithyourpoorsoul');
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('[data-test="login-credentials"]')).toBeVisible();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('error_user');
  await page.locator('.error-message-container').click();
  await page.locator('.error-message-container').click();
  await page.locator('.error-message-container').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="inventory-list"]')).toBeVisible();
});