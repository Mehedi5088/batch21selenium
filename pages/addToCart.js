import { By } from 'selenium-webdriver';
import {Base} from './base.js';

class addToCartPage extends Base {
    constructor() {
        super();
        // addToCart locators
        this.books = By.xpath("//a[@href='/books']");
        this.dropdown = By.id("products-orderby");

    }
    async SelectFromTheMenu(){
        await this.driver.findElement(this.books).click();

    }

    async AddToTheCartProduct (){
        await this.driver.findElement(this.dropdown).click();

    }
}

export {addToCartPage};

