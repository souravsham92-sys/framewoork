// import{expect, test}from '@playwright/test'
// import tc05 from "../test data/tc05.json"

// test('tc05',async ({page,context}) => {
//     await page.goto(tc05.url)
//     await page.locator('//a[text()="Log in"]').click()
//         await page.locator('#Email').fill(tc05.email)
//         await page.locator('#Password').fill(tc05.password),
//         await page.locator('//input[@class="button-1 login-button"]').click()
//         const [child] =await Promise.all([context.waitForEvent('page'),
//          page.locator('//a[text()="Facebook"]').click()])
        
//         console.log(context.pages().length);
//         expect(context.pages().length).toBe(2)
//         console.log(child.url())
//         expect(child.url()).toContain('facebook');
//         expect(await child.title()).toContain('NopCommerce');
//         console.log(await child.title())
//         await child.close();
//         await page.bringToFront();


     


    
// })