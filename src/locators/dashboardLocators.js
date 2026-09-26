const getDashboardLocators = (page) => ({
    titleNameText: (text) => page.getByText(text, { exact: true }),
    descriptionText: (text) => page.getByText(text, { exact: true }),

    // Select Add to Chart by Product
    selectAddToCartButton: (productNameDataTest) => page.getByTestId(productNameDataTest).filter({ hasText: "Add to cart" }),
    selectRemoveAddToCartButton: (productNameDataTest) => page.getByTestId(productNameDataTest).filter({ hasText: "Remove" }),

    // Shoping Cart Count
    shopingCartCount: (value) => page.getByTestId("shopping-cart-badge").filter({ hasText: value }),
});

module.exports = { getDashboardLocators };