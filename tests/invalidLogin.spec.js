import {test, expect} from '@playwright/test'


test('InvalidUser email login with playwright locators', async ({ page }) => {
    
    await page.goto('https://qa.taltektc.com/index.html');
    
    await page.getByRole('textbox', { name: 'Email address or Student ID' }).fill('incorrectemail@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('incorrectPassword');
    await page.getByRole('button', { name: 'Log In' }).click();

    
    const errorMessage = page.locator('#error-msg');

    
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Invalid email address'); 
});