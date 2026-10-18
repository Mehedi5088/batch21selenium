import {Browser, Builder, By} from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

class Base {
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
    }
    // browser open
    async browserOpen(url) {
        await this.driver.get(url);
        await this.driver.manage().window().maximize();
    }
    // browser close
    async browserClose() {
        console.log('Browser Close');
        await this.driver.quit();
    }
}

export {Base};
