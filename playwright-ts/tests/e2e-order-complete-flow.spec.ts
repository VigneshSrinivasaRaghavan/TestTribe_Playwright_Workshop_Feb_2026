import { test, expect } from '@playwright/test';

test.describe('SauceDemo E2E Order Complete Flow', () => {
  test('should complete full purchase flow from login to order confirmation', async ({ page }) => {
    // Navigate to SauceDemo
    await page.goto('https://www.saucedemo.com/');
    
    // Verify login page elements
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.locator('[data-test="username"]')).toBeVisible();
    await expect(page.locator('[data-test="password"]')).toBeVisible();
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    
    // Login with standard user
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    
    // Verify navigation to inventory page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toContainText('Products');
    
    // Verify initial cart is empty (no counter visible when empty)
    const cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    await expect(cartBadge).not.toBeVisible();
    
    // Add Sauce Labs Backpack to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
    // Verify cart counter shows 1
    await expect(cartBadge).toBeVisible();
    await expect(cartBadge).toHaveText('1');
    
    // Verify button changed to Remove
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    
    // Add Sauce Labs Bike Light to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    
    // Verify cart counter shows 2
    await expect(cartBadge).toHaveText('2');
    await expect(page.locator('[data-test="remove-sauce-labs-bike-light"]')).toBeVisible();
    
    // Go to cart
    await page.locator('[data-test="shopping-cart-link"]').click();
    
    // Verify cart page
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await expect(page.locator('.title')).toContainText('Your Cart');
    
    // Verify items in cart
    await expect(page.locator('[data-test="inventory-item-name"]').first()).toContainText('Sauce Labs Backpack');
    await expect(page.locator('[data-test="inventory-item-name"]').nth(1)).toContainText('Sauce Labs Bike Light');
    
    // Verify prices
    await expect(page.locator('.inventory_item_price').first()).toContainText('$29.99');
    await expect(page.locator('.inventory_item_price').nth(1)).toContainText('$9.99');
    
    // Proceed to checkout
    await page.locator('[data-test="checkout"]').click();
    
    // Verify checkout step one page
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    await expect(page.locator('.title')).toContainText('Checkout: Your Information');
    
    // Fill checkout information
    await page.locator('[data-test="firstName"]').fill('John');
    await page.locator('[data-test="lastName"]').fill('Doe');
    await page.locator('[data-test="postalCode"]').fill('12345');
    
    // Continue to checkout overview
    await page.locator('[data-test="continue"]').click();
    
    // Verify checkout step two page
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    await expect(page.locator('.title')).toContainText('Checkout: Overview');
    
    // Verify items in checkout overview
    await expect(page.locator('[data-test="inventory-item-name"]').first()).toContainText('Sauce Labs Backpack');
    await expect(page.locator('[data-test="inventory-item-name"]').nth(1)).toContainText('Sauce Labs Bike Light');
    
    // Verify payment and shipping information
    await expect(page.locator('[data-test="payment-info-label"]')).toContainText('Payment Information');
    await expect(page.locator('[data-test="payment-info-value"]')).toContainText('SauceCard #31337');
    await expect(page.locator('[data-test="shipping-info-label"]')).toContainText('Shipping Information');
    await expect(page.locator('[data-test="shipping-info-value"]')).toContainText('Free Pony Express Delivery!');
    
    // Verify price totals
    await expect(page.locator('[data-test="subtotal-label"]')).toContainText('Item total: $39.98');
    await expect(page.locator('[data-test="tax-label"]')).toContainText('Tax: $3.20');
    await expect(page.locator('[data-test="total-label"]')).toContainText('Total: $43.18');
    
    // Complete the order
    await page.locator('[data-test="finish"]').click();
    
    // Verify order completion page
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    await expect(page.locator('.title')).toContainText('Checkout: Complete!');
    
    // Verify success message
    await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
    await expect(page.locator('[data-test="complete-text"]')).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    
    // Verify pony express image is displayed
    await expect(page.locator('[data-test="pony-express"]')).toBeVisible();
    
    // Verify back home button is present
    await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
    await expect(page.locator('[data-test="back-to-products"]')).toContainText('Back Home');
    
    // Optional: Navigate back home to complete the flow
    await page.locator('[data-test="back-to-products"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('should handle multiple items and verify cart calculations', async ({ page }) => {
    // Login
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    
    // Add multiple items to verify cart functionality
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click(); // $29.99
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click(); // $9.99
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click(); // $15.99
    
    // Verify cart count
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('3');
    
    // Go to cart and verify all items
    await page.locator('[data-test="shopping-cart-link"]').click();
    
    const itemNames = page.locator('[data-test="inventory-item-name"]');
    await expect(itemNames).toHaveCount(3);
    
    // Verify specific items are present
    await expect(itemNames.filter({ hasText: 'Sauce Labs Backpack' })).toBeVisible();
    await expect(itemNames.filter({ hasText: 'Sauce Labs Bike Light' })).toBeVisible();
    await expect(itemNames.filter({ hasText: 'Sauce Labs Bolt T-Shirt' })).toBeVisible();
    
    // Remove one item to test removal functionality
    await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
    
    // Verify item was removed
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2');
    await expect(itemNames.filter({ hasText: 'Sauce Labs Bike Light' })).not.toBeVisible();
    
    // Continue with remaining items
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill('Jane');
    await page.locator('[data-test="lastName"]').fill('Smith');
    await page.locator('[data-test="postalCode"]').fill('54321');
    await page.locator('[data-test="continue"]').click();
    
    // Verify updated totals (should be $29.99 + $15.99 = $45.98 + tax)
    await expect(page.locator('[data-test="subtotal-label"]')).toContainText('Item total: $45.98');
    
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
  });

  test('should handle error cases - missing checkout information', async ({ page }) => {
    // Login and add item
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    
    // Try to continue without filling required fields
    await page.locator('[data-test="continue"]').click();
    
    // Verify error message appears
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Error: First Name is required');
    
    // Fill only first name and try again
    await page.locator('[data-test="firstName"]').fill('John');
    await page.locator('[data-test="continue"]').click();
    
    // Verify different error message
    await expect(page.locator('[data-test="error"]')).toContainText('Error: Last Name is required');
    
    // Fill last name and try again
    await page.locator('[data-test="lastName"]').fill('Doe');
    await page.locator('[data-test="continue"]').click();
    
    // Verify postal code error
    await expect(page.locator('[data-test="error"]')).toContainText('Error: Postal Code is required');
    
    // Fill postal code and proceed successfully
    await page.locator('[data-test="postalCode"]').fill('12345');
    await page.locator('[data-test="continue"]').click();
    
    // Should now be on overview page
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
  });
});