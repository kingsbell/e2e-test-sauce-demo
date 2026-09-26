import { test, expect } from '@playwright/test';
import { DashboardService } from "../../src/services/dashboardServices";
import { LoginService } from "../../src/services/loginServices";


test.describe("Dashboard Tests", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginService(page);

        // Perform action
        await loginPage.performLogin("https://www.saucedemo.com/", "visual_user", "secret_sauce");
    });

    test("[Positive] Verify Title Product - Dashboard", async ({ page }) => {
        // Initialize LoginService
        const dashboardPage = new DashboardService(page);

        // Assert result
        await expect(dashboardPage.page).toHaveTitle(/Swag Labs/);
        await expect(dashboardPage.locators.titleNameText("Sauce Labs Backpack")).toBeVisible();
        await expect(dashboardPage.locators.titleNameText("Sauce Labs Bike Light")).toBeVisible();
        await expect(dashboardPage.locators.titleNameText("Sauce Labs Bolt T-Shirt")).toBeVisible();
        await expect(dashboardPage.locators.titleNameText("Sauce Labs Fleece Jacket")).toBeVisible();
        await expect(dashboardPage.locators.titleNameText("Sauce Labs Onesie")).toBeVisible();
        await expect(dashboardPage.locators.titleNameText("Test.allTheThings() T-Shirt (Red)")).toBeVisible();
    })

    test("[Positive] Verify Description Product - Dashboard", async ({ page }) => {
        // Initialize LoginService
        const dashboardPage = new DashboardService(page);

        // Assert result
        await expect(dashboardPage.page).toHaveTitle(/Swag Labs/);
        await expect(dashboardPage.locators.descriptionText("carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.")).toBeVisible();
        await expect(dashboardPage.locators.descriptionText("A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.")).toBeVisible();
        await expect(dashboardPage.locators.descriptionText("Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.")).toBeVisible();
        await expect(dashboardPage.locators.descriptionText("It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.")).toBeVisible();
        await expect(dashboardPage.locators.descriptionText("Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.")).toBeVisible();
        await expect(dashboardPage.locators.descriptionText("This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.")).toBeVisible();
    })
});

test.describe("Add To Cart Tests", () => {
    test.afterEach(async ({ page }) => {
        const dashboardPage = new DashboardService(page);
        await dashboardPage.removeToCart("remove-sauce-labs-backpack");
    });

    test("[Positive] Add To Cart by Product Name - Dashboard", async ({ page }) => {
        // Initialize LoginService
        const loginPage = new LoginService(page);
        const dashboardPage = new DashboardService(page);

        // Perform action
        await loginPage.performLogin("https://www.saucedemo.com/", "standard_user", "secret_sauce");
        await dashboardPage.selectAddToCart("add-to-cart-sauce-labs-backpack");

        // Assert result
        await expect(dashboardPage.page).toHaveTitle(/Swag Labs/);
        await expect(dashboardPage.locators.shopingCartCount("1")).toBeVisible();
    })
});