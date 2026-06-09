import {test} from '@playwright/test'
import registration from '../test data/registration.json'
import { Registerpage } from '../pageObjectmodel/register';
import { Loginpage } from '../pageObjectmodel/login';
import {Addadress } from '../pageObjectmodel/add_address.js';
import { BooksPage } from '../pageObjectmodel/books.js';
import { Emailfriend } from '../pageObjectmodel/guest.js';
import tc03 from '../test data/tc03.json'
import { SocialMediaPage } from '../pageObjectmodel/facebook.js';
import {tc05 }from "../test data/tc05.json"
test('registration', async ({page,context}) => {
    await page.goto(registration.url)

//     await page.locator('//a[@class="ico-register"]').click()
//     await page.locator('#gender-male').check();
//     await page.locator('#FirstName').fill(registration.first_name)
//     await page.locator('#LastName').fill(registration.lastname)
//     await page.locator('#Email').fill(registration.email)
//     await page.locator('#Password').fill(registration.password)
//     await page.locator('#ConfirmPassword').fill(registration.confirmpassword)
//     await page.locator('#register-button').click()
//     await page.locator('#newsletter-email').fill(registration.email)
//     await page.locator('//input[@id="newsletter-subscribe-button"]').click()
//      await expect(
//     page.getByText(
// "Thank you for signing up!")
//   ).toBeVisible();
//   await page.locator('//a[text()="My account"]').click()
//   await page.locator('#Email').fill(registration.email)
//   await page.locator('#Password').fill(registration.password)
//   await page.locator('//input[@class="button-1 login-button"]').click()
//   await page.locator('(//a[text()="Addresses"])[1]').click()

//   await page.locator('//input[@class="button-1 add-address-button"]').click()
//   await selectOptionValue(page.getByLabel('Country'), 'India');
//   //tc02
//   await page.locator("(//a[@href= '/books'])[1]").click();
//   const sort= page.locator('#products-orderby')
//   await selectOptionByIndex(sort, 1);
//   const display=page.locator('#products-pagesize');
//   await selectOptionByIndex(display, 0);
//   const fitstpageproducts=page.locator('.product-item')
//   await expect(fitstpageproducts).toHaveCount(4);
  
//   await page.locator('//a[text()="Next"]').click();
//   await page.locator('//a[text()="Science"]').click()
//   await page.locator('//a[text()="Add your review"]').click()
//   await page.locator('#AddProductReview_Title').fill(registration.reviewtitle)
//   await page.locator('#AddProductReview_ReviewText').fill(registration.reviewtext)
//   await page.locator('#addproductrating_4').check()
// await page.locator('//input[@class="button-1 write-product-review-button"]').click() 
//  const result= page.locator('//div[@class="result"]')
//   await expect(result).toContainText('Product review is successfully added')
//    page.locator('//a[@class="ico-logout"]').click
const registerpage= new Registerpage(page)
const email_friend=new Emailfriend(page)
const loginpage= new Loginpage(page);
const bookspage=new BooksPage(page)
await registerpage.registeruser()
await loginpage.loginpage()
const addaddress=new Addadress(page)
await addaddress.addaddress()
await bookspage.sortBook()
  await bookspage.addReview()
  await email_friend.emailfriend()
  const socialmediaPage=new SocialMediaPage(page,context)
  await socialmediaPage.socialMediaPage()
  
})



  




  
  



  