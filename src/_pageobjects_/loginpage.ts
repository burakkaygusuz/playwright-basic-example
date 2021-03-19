export class LoginPage {

    private usernameSelector: string = '[data-test=username]';
    private passwordSelector: string = '[data-test=password]';
    private loginButtonSelector: string = '[id=login-button]';

    public setCredentials = async (username: string, password: string) => {
        await page.fill(this.usernameSelector, username);
        await page.fill(this.passwordSelector, password);
        await page.click(this.loginButtonSelector);
    };
}