const { Dashboard } = require("../pages/dashboardPage");

class DashboardService {
    constructor(page) {
        this.page = page;
        this.dashboardPage = new Dashboard(page);
    }

    // Flow: Perform Login
    async verifyTitleDashboard(titleName) {
        await this.dashboardPage.verifyTitleDashboard(titleName);
    }

    // Flow: Verify Description
    async verifyDescription(description) {
        await this.dashboardPage.verifyDescription(description);
    }

    // Flow: Select Add to Chart by Product
    async selectAddToCart(productNameDataTest) {
        await this.dashboardPage.selectAddToCart(productNameDataTest);
    }

    // Flow: Verify Shopping Cart Count
    async verifyShoppingCartCount(value) {
        await this.dashboardPage.verifyShoppingCartCount(value);
    }

    // Flow: Remove to Cart by Product
    async removeToCart(productNameDataTest) {
        await this.dashboardPage.removeToCart(productNameDataTest);
    }

    get locators() {
        return this.dashboardPage.dashboardLocators;
    }
}

module.exports = { DashboardService };
