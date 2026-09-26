const { getPayoutLocators } = require("../locators/payoutLocators");

class Payout {
    constructor(page) {
        this.page = page;
        this.payoutLocators = getPayoutLocators(page);
    }

    // Flow: Click Shopping Cart
    async clickShoppingCart() {
        await this.payoutLocators.shoppingCartLinkButton.waitFor();
        await this.payoutLocators.shoppingCartLinkButton.click();
    }

    // Flow: Verify Product Name in Cart
    async verifyProductNameInCart(productName) {
        await this.payoutLocators.productNameCart(productName).waitFor();
    }

    // Flow: Click Checkout Button
    async clickCheckoutButton() {
        await this.payoutLocators.checkoutButton.waitFor();
        await this.payoutLocators.checkoutButton.click();
    }

    // Flow: Fill Information
    async fillInformation(firstName, lastName, postalCode) {
        await this.payoutLocators.firstNameInput.waitFor();
        await this.payoutLocators.firstNameInput.fill(firstName);
        await this.payoutLocators.lastNameInput.waitFor();
        await this.payoutLocators.lastNameInput.fill(lastName);
        await this.payoutLocators.postalCodeInput.waitFor();
        await this.payoutLocators.postalCodeInput.fill(postalCode);
    }

    // Flow: Click Continue Button
    async clickContinueButton() {
        await this.payoutLocators.continueButton.waitFor();
        await this.payoutLocators.continueButton.click();
    }

    // Flow: Verify Total Payment
    async verifyTotalPayment(value) {
        await this.payoutLocators.totalPayment(value).waitFor();
    }

    // Flow: Click Finish Button
    async clickFinishButton() {
        await this.payoutLocators.finishButton.waitFor();
        await this.payoutLocators.finishButton.click();
    }
}

module.exports = { Payout };
