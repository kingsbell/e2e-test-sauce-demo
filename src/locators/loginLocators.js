const getLoginLocators = (page) => ({
    loginLogoText: page.getByText('Swag Labs', { exact: true }),
    userNameInput: page.getByPlaceholder('Username'),
    passwordInput: page.getByPlaceholder('Password'),
    loginButton: page.getByTestId('login-button'),

    // Dashboard Locators
    labelDashboardText: page.locator('div.header_label').filter({ hasText: "Swag Labs" }),
    secondaryLabelText: page.getByTestId('title').filter({ hasText: "Products" }),
    menuIcon: page.getByTestId('open-menu'),
    shoppingCartIcon: page.getByTestId('shopping-cart-link'),
    inventoryListSection: page.getByTestId('inventory-list'),

    // Error Message
    errorMessageText: page.getByTestId('error').filter({ hasText: "Epic sadface: Sorry, this user has been locked out." })
});

module.exports = { getLoginLocators };