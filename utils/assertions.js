import { expect } from "@playwright/test";

export async function expectErrorMessage(locator, expectedText) {
    await expect(locator).toBeVisible();
    await expect(locator).toHaveText(expectedText)
}

export async function expectUrl(locator, expectedUrl) {
    await expect(locator).toHaveURL(expectedUrl);
}