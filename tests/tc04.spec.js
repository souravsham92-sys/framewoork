import{test, expect}from '@playwright/test'
import tc04 from "../test data/tc04.json"
import { verifyContainsText } from  '../utils/util'
test('tc04',async ({page, context}) => {
    await page.goto(tc04.url)
    await page.locator('//a[text()="Log in"]').click()
    await page.locator('#Email').fill(tc04.email)
    await page.locator('#Password').fill(tc04.password)
    await page.locator('//input[@class="button-1 login-button"]').click()
        await page.locator('//input[@class="search-box-text ui-autocomplete-input"]').fill(tc04.search)
        await page.keyboard.press('Enter')
        const count= await page.locator('.product-item').count();
        // expect(count).toBeGreaterThan(0);
        const firstproduct= page.locator('.product-item').first()
        const [newPage]= await Promise.all([context.waitForEvent('page'),
        firstproduct.locator('.product-title a').click({button:"middle"}),
        
        ])
        await newPage.waitForLoadState(),
        await newPage.bringToFront()
        // await expect(newPage.locator('.product-name h1')).toBeVisible();
        // await expect(newPage.locator('[class*="price-value"]')).toBeVisible();
        // const stock=newPage.locator('//span[@class="value"]');
// await verifyContainsText(stock, /In stock/);
        await page.locator('//input[@class="button-2 add-to-compare-list-button"]').click();
        const compare=page.locator('//table[@class="compare-products-table"]');
        await verifyContainsText(compare, "14.1-inch Laptop");
await verifyContainsText(compare, '1590.00');
await verifyContainsText(compare, '14.1"');
await verifyContainsText(compare, 'Intel');
await verifyContainsText(compare, '3 GB');
await verifyContainsText(compare, '250 GB');
        page.locator('//a[@class="clear-list"]').click();
        const clear_list=page.locator('//div[@class="page-body"]')
        await verifyContainsText(
    clear_list,
    'You have no items to compare.'
);


        



    
})