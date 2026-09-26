const { Login } = require("../pages/loginPages");

class LoginService {
    constructor(page) {
        this.page = page;
        this.loginPage = new Login(page);
    }

    // Flow: Perform Login
    async performLogin(url, username, password) {
        await this.loginPage.navigateTo(url);
        await this.loginPage.fillUsername(username);
        await this.loginPage.fillPassword(password);
        await this.loginPage.clickLoginButton();
    }

    get locators() {
        return this.loginPage.loginLocators;
    }
}

module.exports = { LoginService };
