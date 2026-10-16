import {test, expect} from '@playwright/test'


test('Signing up new user', async ({ page }) => {
    
    await page.goto('https://qa.taltektc.com/index.html');
    
    await page.getByRole('link', { name: 'Create New Account' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill('delete');   
    await page.getByRole('textbox', { name: 'Last Name' }).fill('this');
    await page.getByRole('textbox', { name: 'Your Email' }).fill('deletethis1@gmail.com');
    await page.getByPlaceholder('Password', { exact: true }).fill('Password123');   //password and confirm password is having a conflict
    await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Password123');  
    await page.locator('select[name="month"]').selectOption('Dec');
    await page.locator('select[name="day"]').selectOption('25');
    await page.locator('select[name="year"]').selectOption('1945');
    await page.getByText('Male', { exact: true }).click();  // Male and Female radio buttons are having a conflict
    await page.getByRole('checkbox', { name: 'By clicking Create my account, you agree to our Terms and that you have read our Data Use Policy, including our Cookie Use.' }).click();
    await page.getByRole('button', { name: 'Create my account' }).click();
    await expect(page.getByText('Success!')).toBeVisible();
    await page.getByRole('button', { name: 'OK' }).click();


});