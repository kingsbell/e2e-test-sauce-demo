const getPayoutLocators = (page) => ({
    shoppingCartLinkButton: page.getByTestId('shopping-cart-link'),
    productNameCart: (productNameDataTest) => page.getByText(productNameDataTest),
    checkoutButton: page.getByTestId('checkout'),

    // Fill Information
    firstNameInput: page.getByPlaceholder('First Name'),
    lastNameInput: page.getByPlaceholder('Last Name'),
    postalCodeInput: page.getByPlaceholder('Zip/Postal Code'),
    continueButton: page.getByTestId('continue'),

    // Payment Information
    totalPayment: (value) => page.locator('div.summary_subtotal_label').filter({ hasText: value }),
    finishButton: page.getByTestId('finish'),

    // Checkout Complete
    successMessage: page.getByText('Thank you for your order!'),
    secondarySuccessMessage: page.getByText('Your order has been dispatched, and will arrive just as fast as the pony can get there!'),
});

module.exports = { getPayoutLocators };