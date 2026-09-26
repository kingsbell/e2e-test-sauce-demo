import { test, expect } from '@playwright/test';
import { LoginService } from '../../src/services/loginServices';


test.describe("Login Tests", () => {
    test("[Positive] Login Success and See Dashboard - Standard User", async ({ page }) => {
        // Initialize LoginService
        const loginPage = new LoginService(page);

        // Perform action
        await loginPage.performLogin("https://www.saucedemo.com/", "standard_user", "secret_sauce");

        // Assert result
        await expect(loginPage.page).toHaveTitle(/Swag Labs/);
        await expect(loginPage.locators.labelDashboardText).toBeVisible();
        await expect(loginPage.locators.secondaryLabelText).toBeVisible();
        await expect(loginPage.locators.menuIcon).toBeVisible();
        await expect(loginPage.locators.shoppingCartIcon).toBeVisible();
        await expect(loginPage.locators.inventoryListSection).toBeVisible();
    })

    test("[Positive] Login Success and See Dashboard - Problem User", async ({ page }) => {
        // Initialize LoginService
        const loginPage = new LoginService(page);

        // Perform action
        await loginPage.performLogin("https://www.saucedemo.com/", "problem_user", "secret_sauce");

        // Assert result
        await expect(loginPage.page).toHaveTitle(/Swag Labs/);
        await expect(loginPage.locators.labelDashboardText).toBeVisible();
        await expect(loginPage.locators.secondaryLabelText).toBeVisible();
        await expect(loginPage.locators.menuIcon).toBeVisible();
        await expect(loginPage.locators.shoppingCartIcon).toBeVisible();
        await expect(loginPage.locators.inventoryListSection).toBeVisible();
    })
});
