const { Payout } = require("../pages/payoutPage");

class PayoutService {
    constructor(page) {
        this.page = page;
        this.payoutPage = new Payout(page);
    }

    // Flow: Click Shopping Cart
    async clickShoppingCart() {
        await this.payoutPage.clickShoppingCart();
    }

    // Flow: Verify Product Name in Cart
    async verifyProductNameInCart(productName) {
        await this.payoutPage.verifyProductNameInCart(productName);
    }

    // Flow: Click Checkout Button
    async clickCheckoutButton() {
        await this.payoutPage.clickCheckoutButton();
    }

    // Flow: Fill Information
    async fillInformation(firstName, lastName, postalCode) {
        await this.payoutPage.fillInformation(firstName, lastName, postalCode);
    }

    // Flow: Click Continue Button
    async clickContinueButton() {
        await this.payoutPage.clickContinueButton();
    }

    // Flow: Verify Total Payment
    async verifyTotalPayment(value) {
        await this.payoutPage.verifyTotalPayment(value);
    }

    // Flow: Click Finish Button
    async clickFinishButton() {
        await this.payoutPage.clickFinishButton();
    }

    get locators() {
        return this.payoutPage.payoutLocators;
    }
}

module.exports = { PayoutService };
