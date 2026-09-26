const { getDashboardLocators } = require("../locators/dashboardLocators");

class Dashboard {
    constructor(page) {
        this.page = page;
        this.dashboardLocators = getDashboardLocators(page);
    }

    // Flow: Verify Title Dashboard
    async verifyTitleDashboard(titleName) {
        await this.dashboardLocators.titleNameText(titleName).waitFor();
    }

    // Flow: Verify Description
    async verifyDescription(description) {
        await this.dashboardLocators.descriptionText(description).waitFor();
    }

    // Flow: Select Add to Chart by Product
    async selectAddToCart(productNameDataTest) {
        await this.dashboardLocators.selectAddToCartButton(productNameDataTest).waitFor();
        await this.dashboardLocators.selectAddToCartButton(productNameDataTest).click();
    }

    // Flow: Verify Shopping Cart Count
    async verifyShoppingCartCount(value) {
        await this.dashboardLocators.shopingCartCount(value).waitFor();
    }

    // Flow: Remove to Cart by Product
    async removeToCart(productNameDataTest) {
        await this.dashboardLocators.selectRemoveAddToCartButton(productNameDataTest).waitFor();
        await this.dashboardLocators.selectRemoveAddToCartButton(productNameDataTest).click();
    }
}

module.exports = { Dashboard };
