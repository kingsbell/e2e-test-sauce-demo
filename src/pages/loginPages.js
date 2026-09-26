const { getLoginLocators } = require("../locators/loginLocators");

class Login {
    constructor(page) {
        this.page = page;
        this.loginLocators = getLoginLocators(page);
    }

    // Navigate to login page
    async navigateTo(url) {
        await this.page.goto(url);
        await this.page.waitForURL(url);
    }

    // Fill Username input
    async fillUsername(username) {
        if (username !== undefined && username !== null) {
            await this.loginLocators.userNameInput.pressSequentially(username);
        }
    }

    // Fill Password input
    async fillPassword(password) {
        if (password !== undefined && password !== null) {
            await this.loginLocators.passwordInput.pressSequentially(password);
        }
    }

    // Click login button
    async clickLoginButton() {
        await this.loginLocators.loginButton.click();
    }
}

module.exports = { Login };
