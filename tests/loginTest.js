import {loginPage} from '../pages/loginPage.js';

const base = new loginPage();
await base.browserOpen('https://demowebshop.tricentis.com/');
await base.loginButtonClick();
await base.inputLoginEmail('hasan@example.com');
await base.inputLoginPassword('Password123');
await base.clickRememberMe();
await base.clickLoginButton();