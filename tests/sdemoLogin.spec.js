import { test, expect } from '@playwright/test';
import {sdemoLoginPage} from '../pages/sdemoLoginPage.js' ;
import { LOGIN_MESSAGE } from '../constants/messages.js';
import { expectErrorMessage } from '../utils/assertions.js';
import { expectUrl } from '../utils/assertions.js';

test.describe('SauceDemo Login Tests', () => {
    let loginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new sdemoLoginPage(page);
});

test('Demo Login for standard_user', async ({ page }) => {
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await expectUrl(page, loginPage.homeUrl);
});

test('Demo Login for locked_out_user', async ({ page }) => {
    await loginPage.navigate();
    await loginPage.login('locked_out_user', 'secret_sauce');
    await expectErrorMessage(loginPage.errorMessage,LOGIN_MESSAGE.LOCKED_OUT)
});
//incomplete.
test('Demo Login for problem_user', async ({ page }) => {
    await loginPage.navigate();
    await loginPage.login('problem_user', 'secret_sauce');
    await expectUrl(page, loginPage.homeUrl);
});

test('Demo Login for performance_glitch_user', async ({ page }) => {
    await loginPage.navigate();
    await loginPage.login('performance_glitch_user', 'secret_sauce');
    await expectUrl(page, loginPage.homeUrl);
});

test('Demo Login for error_user', async ({ page }) => {
    await loginPage.navigate();
    await loginPage.login('error_user', 'secret_sauce');
    await expectUrl(page, loginPage.homeUrl);
});

test('Demo Login for visual_user', async ({ page }) => {
    await loginPage.navigate();
    await loginPage.login('visual_user', 'secret_sauce');
    await expectUrl(page, loginPage.homeUrl);
});
});