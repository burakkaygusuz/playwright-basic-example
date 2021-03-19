import { LoginPage } from "../_pageobjects_/loginpage";

const loginPage = new LoginPage();

beforeEach(async () => {
    await page.goto('https://www.saucedemo.com');
})

describe('The customer must be able to ', () => {
    test('login with correct username & password', async () => {
        await loginPage.setCredentials('standard_user', 'secret_sauce');
        expect(page.url().endsWith('inventory.html')).toBeTruthy();
    });
});