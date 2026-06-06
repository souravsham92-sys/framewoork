// import { expect } from '@playwright/test';
// import tc05 from "../test data/tc05.json"

// export class SocialMediaPage {

//     constructor(page, context) {
//         this.page = page;
//         this.context = context;

//         this.loginLink = page.locator('//a[text()="Log in"]');
//         this.email = page.locator('#Email');
//         this.password = page.locator('#Password');
//         this.loginButton = page.locator('//input[@class="button-1 login-button"]');
//         this.facebookLink =page.locator('//a[text()="Facebook"]')
//     }
//     async socialMediaPage(){
//         await this.loginLink.click()
//         await this.email.fill(tc05.email)
//         await this.password.fill(tc05.password)
//         await this.loginButton.click()
//         await this.facebookLink.click()
//     }
// }