exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.usernaetxt = page.getByRole('textbox', { name: 'Username' });
        this.passwordtxt = page.getByRole('textbox', { name: 'Password' });
        this.page.pause();
        this.loginbtn = page.getByRole('link', { name: 'Sign in' });
    }

    async gotoLoginPage(url) {
        await this.page.goto('https://demo.applitools.com/');
    }

    async login(username, password) {
        await this.usernaetxt.fill(username);
        await this.passwordtxt.fill(password);
        await this.loginbtn.click();
    }
}