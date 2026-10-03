// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://www.nytimes.com/');
//   await page.getByRole('button', { name: 'open Lifestyle' }).click();
//   await page.getByRole('link', { name: 'Travel' }).click();
//   await page.locator('iframe[title="DataDome CAPTCHA"]').contentFrame().locator('.slider').click();
//   await page.locator('iframe[title="DataDome CAPTCHA"]').contentFrame().locator('.slider').click();
// });

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