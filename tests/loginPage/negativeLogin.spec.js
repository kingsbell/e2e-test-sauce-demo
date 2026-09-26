import { test, expect } from '@playwright/test';
import { LoginService } from '../../src/services/loginServices';


test.describe("Login Tests", () => {
    test("[Negative] Login Failure - Locked Out User", async ({ page }) => {
        // Initialize LoginService
        const loginPage = new LoginService(page);

        // Perform action
        await loginPage.performLogin("https://www.saucedemo.com/", "locked_out_user", "secret_sauce");

        // Assert result
        await expect(loginPage.page).toHaveURL("https://www.saucedemo.com/");
        await expect(loginPage.page).toHaveTitle(/Swag Labs/);
        await expect(loginPage.locators.errorMessageText).toBeVisible();
    })
});
