import { expect } from "@playwright/test";
import registration from "../test data/registration.json"
export class Registerpage{
    constructor(page){
this.page= page;
this.registerlink=page.locator('//a[@class="ico-register"]')
this.gendermale=page.locator('#gender-male')
this.firstname=page.locator('#FirstName')
this.lastname=page.locator('#LastName')
this.email=page.locator('#Email')
this.password=page.locator('#Password')
this.confirmpassword=page.locator('#ConfirmPassword')
this.registerbutton=page.locator('#register-button')

this.newsletteremail=page.locator('#newsletter-email')
this.newsletterbutton=page.locator('//input[@id="newsletter-subscribe-button"]')
this.textmsg=page.getByText(
"Thank you for signing up!")
    }
    async registeruser(){
        await this.registerlink.click()
        await this.gendermale.check()
        await this.firstname.fill(registration.first_name)
        await this.lastname.fill(registration.lastname)
        await this.email.fill(registration.email)
        await this.password.fill(registration.password)
        await this.confirmpassword.fill(registration.confirmpassword)
        await this.registerbutton.click()
        await this.newsletteremail.fill(registration.email)
        await this.newsletterbutton.click()
    }

}