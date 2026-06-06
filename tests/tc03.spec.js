import{expect, test}from '@playwright/test'
import tc03 from "../test data/tc03.json"
import { log } from 'node:console'
test('tc03',async ({page}) => {
    await page.goto(tc03.url)
    await page.locator('//a[@class="ico-login"]').click()
    await page.locator('#Email').fill(tc03.email)
    await page.locator('#Password').fill(tc03.password)
    await page.locator('//input[@class="button-1 login-button"]').click()
    await page.locator('//input[@class="search-box-text ui-autocomplete-input"]').fill(tc03.search)
    await page.keyboard.press('Enter')
    await page.locator('//a[@title="Show details for Blue Jeans"]').click()
    await page.locator('//input[@class="button-2 email-a-friend-button"]').click()
    await page.locator('#FriendEmail').fill(tc03.friends_email)
     await page.locator('#PersonalMessage').fill(tc03.prsnl_msg)
    await page.locator('//input[@name="send-email"]').click()
    const result=page.locator('//div[@class="result"]')
    await expect(result).toContainText("Your message has been sent")
    const logout= page.locator('//a[@href="/logout"]')
    await logout.waitFor({state:'visible'})
        await logout.click()
    await page.locator('//a[text()="$25 Virtual Gift Card"]').click()
    await page.locator('//div[@class="email-a-friend"]').click()
    await page.locator('//input[@class="friend-email"]').fill(tc03.friends_email)
    await page.locator('//input[@class="your-email"]').fill(tc03.email)
    await page.locator('//input[@class="button-1 send-email-a-friend-button"]').click()
    let res= page.locator('//li[text()= "Only registered customers can use email a friend feature"]')
    await expect(res).toContainText('"Only registered customers can use email a friend feature"')





    
})