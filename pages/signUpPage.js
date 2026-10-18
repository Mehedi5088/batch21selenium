import {Browser, Builder, By} from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import {Base} from './base.js';

class signUpPage extends Base {
    constructor() {
        super();
        // this.regisrerLink = By.css(".ico-register");
        this.regisrerLink = By.xpath("//a[@href='/register']");
        this.genderMale = By.id("gender-male");
        this.firstName = By.id("FirstName");
        this.LastName = By.id("LastName");
        this.Email = By.name("Email");
        this.Password = By.id("Password");
        this.ConfirmPassword = By.id("ConfirmPassword");
        this.registerButton = By.id("register-button");
        this.logOutButton = By.xpath("//a[@href='/logout']");

    }
    // register button click
    async registerButtonClick() {
        await this.driver.findElement(this.regisrerLink).click();
    }
    // gender male click
    async genderMaleClick() {
        await this.driver.findElement(this.genderMale).click();
    }
    // first name input
    async inputFirstName(firstName) {
        await this.driver.findElement(this.firstName).sendKeys(firstName);
    }
    // last name input
    async inputLastName(lastName) {
        await this.driver.findElement(this.LastName).sendKeys(lastName);
    }
    // email input
    async inputEmail(email) {
        await this.driver.findElement(this.Email).sendKeys(email);
    }
    // password input
    async inputPassword(password) {
        await this.driver.findElement(this.Password).sendKeys(password);
    }
    // confirm password input
    async inputConfirmPassword(confirmPassword) {
        await this.driver.findElement(this.ConfirmPassword).sendKeys(confirmPassword);
    }
    // register button click
    async submitButton() {
        await this.driver.findElement(this.registerButton).click();
    }
    // logout button click
    async logOutButtonClick() {
        await this.driver.findElement(this.logOutButton).click();
    }
}

export {signUpPage};
