import {test, expect} from '@playwright/test';
import { sdemoLoginPage } from '../pages/sdemoLoginPage';
import { expectUrl, expectErrorMessage } from '../utils/assertions';

const path = require('path');
const xlsx = require('xlsx');

const excelFile = path.join(__dirname, '../data/testData_MultiLogin.xlsx');
const workbook = xlsx.readFile(excelFile);
const workSheet= workbook.Sheets[workbook.SheetNames[0]];
const testData = xlsx.utils.sheet_to_json(workSheet);

test.describe("DataDriven Login Tests", () => {
for (const data of testData) {
    test(`Demo Login for ${data.userName}`, async ({ page }) => {
        const loginPage = new sdemoLoginPage(page);
        await loginPage.navigate();
        await loginPage.login(data.userName, data.password);
        if (data.testStatus === 'pass') {
            await expectUrl(page, loginPage.homeUrl);
        } else if (data.testStatus === 'fail') {
            await expectErrorMessage(loginPage.errorMessage, data.expectedErrorMessage);
        }
    })
}
})
