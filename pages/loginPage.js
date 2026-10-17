import {Browser, Builder, By} from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

class loginPage {
    constructor() {
        const options = new chrome.Options();
        options.addArguments('--no-sandbox');
        options.addArguments('--disable-dev-shm-usage');
        options.addArguments('--ozone-platform=x11');
        options.addArguments('--disable-gpu');
        this.driver = new Builder()
            .forBrowser(Browser.CHROME)
            .setChromeOptions(options)
            .build();


        // login locators
        this.loginLink = By.xpath("//a[@href='/login']");
        this.loginEmail = By.id("Email");
        this.RememberMe = By.id("Remember-Me");
        this.loginPassword = By.id("Password");
        this.loginButton = By.xpath("//input[@value='Log in']");

    }
    // login button click
    async loginButtonClick() {
        await this.driver.findElement(this.loginLink).click();
    }
    // login email input    
    async inputLoginEmail(email) {
        await this.driver.findElement(this.loginEmail).sendKeys(email);
    }
    // login password input
    async inputLoginPassword(password) {
        await this.driver.findElement(this.loginPassword).sendKeys(password);
    }
    // remember me click
    async clickRememberMe() {
        await this.driver.findElement(this.RememberMe).click();
    }
    // login button click
    async clickLoginButton() {
        await this.driver.findElement(this.loginButton).click();
    }
    // browser close
    async browserClose() {
        console.log('Browser Close');
        await this.driver.quit();
    }

}

export {loginPage};
// await base.browserClose();
