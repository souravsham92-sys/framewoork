import { expect } from "@playwright/test";
export async function selectOptionValue(locator, value) {
    await  locator.selectOption(value);
}

export async function selectOptionByIndex(page,locator, index) {
    await page.locator(locator).selectOption({ index });
}
export async function verifyContainsText(locator, text) {
await expect(locator).toContainText(text);
}
export async function Dropdown(page,locator,value){
await page.locator(locator).selectOption(value);


}


