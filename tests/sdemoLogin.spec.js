import { test, expect } from '@playwright/test';
import {sdemoLoginPage} from '../pages/sdemoLoginPage.js' ;


test('Demo Login for standard_user', async ({ page }) => {
    const loginPage = new sdemoLoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Demo Login for locked_out_user', async ({ page }) => {
    const loginPage = new sdemoLoginPage(page);
    await loginPage.navigate();
    await loginPage.login('locked_out_user', 'secret_sauce');
    await expect(loginPage.loginErrorMessage).toBeVisible();
});
//incomplete.
test('Demo Login for problem_user', async ({ page }) => {
    const loginPage = new sdemoLoginPage(page);
    await loginPage.navigate();
    await loginPage.login('problem_user', 'secret_sauce');

    // await expect(loginPage.backpackImage).toBeVisible();
    const backpackImageUrl = await loginPage.backpackImage.getAttribute('src'); //getting a timeout.

    // await loginPage.bikeLightImage.waitFor({ state: 'visible' });
    const bikeLightImageUrl = await loginPage.bikeLightImage.getAttribute('src');
    // expect(bikeLightImageUrl).toBe(loginPage.bikeLightImageUrl);

    await expect(backpackImageUrl).toContain('https://www.saucedemo.com/assets/sl-404-Cq1a9k9X.jpg');
});

test('Demo Login for locked_out_user', async ({ page }) => {
    const loginPage = new sdemoLoginPage(page);
    await loginPage.navigate();
    await loginPage.login('locked_out_user', 'secret_sauce');
    await expect(loginPage.loginErrorMessage).toBeVisible();