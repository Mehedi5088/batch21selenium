import { signUpPage } from '../pages/signUpPage.js';

describe("allure report generate", function() {

    it("it shoud be the first test", async function() {
        const base = new signUpPage();
    await base.browserOpen('https://demowebshop.trictis.com/');
    await base.registerButtonClick();
    await base.genderMaleClick();
    await base.inputFirstName('Mehedi');
    await base.inputLastName('Hasan');
    await base.inputEmail('mehedi.hasan.qa@example.com');
    await base.inputPassword('Password123!');
    await base.inputConfirmPassword('Password123!');
    await base.submitButton();

    });

});



