import { test, expect } from '@playwright/test';
import { DashboardService } from "../../src/services/dashboardServices";
import { LoginService } from "../../src/services/loginServices";
import { PayoutService } from "../../src/services/payoutServices";


test.describe("Payout Tests", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginService(page);
        const dashboardPage = new DashboardService(page);

        // Perform action
        await loginPage.performLogin("https://www.saucedemo.com/", "standard_user", "secret_sauce");

        await dashboardPage.selectAddToCart("add-to-cart-sauce-labs-backpack");
        await dashboardPage.verifyShoppingCartCount("1");
    });

    test("[Positive] Checkout Success", async ({ page }) => {
        // Initialize LoginService
        const payoutPage = new PayoutService(page);

        // Perform action
        await payoutPage.clickShoppingCart();
        await payoutPage.verifyProductNameInCart("Sauce Labs Backpack");
        await payoutPage.clickCheckoutButton();
        await payoutPage.fillInformation("RandomFirstName", "RandomLastName", "RandomPostalCode");
        await payoutPage.clickContinueButton();
        await payoutPage.verifyTotalPayment("$29.99");
        await payoutPage.clickFinishButton();

        // Assert result
        await expect(payoutPage.page).toHaveTitle(/Swag Labs/);
        await expect(payoutPage.locators.successMessage).toBeVisible();
        await expect(payoutPage.locators.secondarySuccessMessage).toBeVisible();
    })
});