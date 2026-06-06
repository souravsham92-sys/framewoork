import{expect, test}from '@playwright/test'
import tc03 from "../test data/tc03.json"

export class Emailfriend{
    constructor(page){
        this.page=page
        this.login=page.locator('//a[@class="ico-login"]')
        this.loginemail=page.locator('//input[@id="Email"]')
        this.password=page.locator('#Password')
        this.loginbutton=page.locator('//input[@class="button-1 login-button"]')
        this.searchbox=page.locator('//input[@class="search-box-text ui-autocomplete-input"]')
        this.page.keyboard.press('Enter')
        this.producdetail=page.locator('//a[@title="Show details for Blue Jeans"]')
        this.emailFriendbutton=page.locator('//input[@class="button-2 email-a-friend-button"]')
        this.friendemail=page.locator('#FriendEmail')
        this.personalmsg=page.locator('#PersonalMessage')
        this.sendemailbutton=page.locator('//input[@name="send-email"]')
        this.result=page.locator('//div[@class="result"]')
        this.logout=page.locator('//a[@href="/logout"]')
        this.giftcardproduct=page.locator('//a[text()="$25 Virtual Gift Card"]')
        this.emailafriendbutton=page.locator('//div[@class="email-a-friend"]')
        this.friendemail=page.locator('//input[@class="friend-email"]')
        this.email=page.locator('//input[@class="your-email"]')
        this.sendemailbutton=page.locator('//input[@class="button-1 send-email-a-friend-button"]')
        this.result2=page.locator('//li[text()= "Only registered customers can use email a friend feature"]' )

    }
    
    async emailfriend(){
        await this.login.click();
        console.log('tc03:', tc03);
console.log('loginemail:', this.loginemail);
        await this.loginemail.fill(tc03.email)
        await this.password.fill(tc03.password)
        await this.loginbutton.click()
        await this.searchbox.fill(tc03.search)
        await this.page.keyboard.press('Enter')
        await this.producdetail.click()
        await this.emailafriendbutton.click()
        await this.friendemail.fill(tc03.friends_email)
        await this.personalmsg.fill(tc03.prsnl_msg)
        await this.email.fill(tc03.email)
await this.sendemailbutton.click()
await expect(this.result).toContainText("Your message has been sent")
await this.logout.click()
await this.giftcardproduct.click()
await this.emailafriendbutton.click()
await this.friendemail.fill(tc03.friends_email)
await this.email.fill(tc03.email)
await this.sendemailbutton.click()
await expect(this.result2).toContainText("Only registered customers can use email a friend feature")

    }


    
    
}
    

