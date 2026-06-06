import { Dropdown } from "../utils/util";
import { expect } from "@playwright/test";
import registration from '../test data/registration.json'
export class BooksPage{
    constructor(page){
        this.page = page;

        this.booksLink = page.locator("(//a[@href= '/books'])[1]")
        this.nextButton = page.locator('//li[@class="next-page"]')
        this.scienceBook = page.locator('//a[text()="Science"]')
        this.addReviewLink = page.locator('//a[text()="Add your review"]')
        this.reviewTitle = page.locator('#AddProductReview_Title')
        this.reviewText = page.locator('#AddProductReview_ReviewText')
        this.rating = page.locator('#addproductrating_4')
        this.submitButton = page.locator('//input[@class="button-1 write-product-review-button"]')
        
        this.productItem = page.locator('.product-item')
        this.reviewResult = page.locator('//div[@class="result"]')
        this.logout= page.locator('//a[@class="ico-logout"]')

    }

    async sortBook(){
        await this.booksLink.click()
        await Dropdown(this.page,'#products-orderby',"Name: A to Z")
        await Dropdown(this.page, '#products-pagesize',"4")
        await expect(this.productItem).toHaveCount(4);
        
await this.nextButton.click()
 await this.scienceBook.click()
    }

    async addReview(){
        await this.addReviewLink.click()
        await this.reviewTitle.fill(registration.reviewtitle)
        await this.reviewText.fill(registration.reviewtext)
        await this.rating.check()
        await this.submitButton.click()
        await expect(this.reviewResult).toContainText('Product review is successfully added')
        await this.logout.click();
    }
}