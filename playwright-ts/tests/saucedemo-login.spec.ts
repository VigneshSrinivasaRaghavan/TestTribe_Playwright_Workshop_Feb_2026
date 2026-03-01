import { test, expect } from '@playwright/test';

test.describe('SauceDemo Login Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  test('Should login successfully with valid credentials', async ({ page }) => {
    // Enter valid credentials
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    
    // Click login button
    await page.locator('[data-test="login-button"]').click();
    
    // Assert successful login - should navigate to inventory page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');
    await expect(page.locator('.shopping_cart_link')).toBeVisible();
  });

  test('Should show error message with invalid username', async ({ page }) => {
    // Enter invalid username with valid password
    await page.locator('[data-test="username"]').fill('invalid_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    
    // Click login button
    await page.locator('[data-test="login-button"]').click();
    
    // Assert error message appears
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match any user in this service');
    
    // Assert still on login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

  test('Should show error message with invalid password', async ({ page }) => {
    // Enter valid username with invalid password
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('wrong_password');
    
    // Click login button
    await page.locator('[data-test="login-button"]').click();
    
    // Assert error message appears
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match any user in this service');
    
    // Assert still on login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

  test('Should show error message with empty credentials', async ({ page }) => {
    // Click login button without entering credentials
    await page.locator('[data-test="login-button"]').click();
    
    // Assert error message for empty username
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Username is required');
    
    // Assert still on login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

  test('Should handle locked out user', async ({ page }) => {
    // Enter locked out user credentials
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    
    // Click login button
    await page.locator('[data-test="login-button"]').click();
    
    // Assert locked out error message
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Sorry, this user has been locked out');
    
    // Assert still on login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

  test('Should be able to clear error message', async ({ page }) => {
    // Trigger an error first
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    
    // Click the error close button
    await page.locator('[data-test="error-button"]').click();
    
    // Assert error message is hidden
    await expect(page.locator('[data-test="error"]')).not.toBeVisible();
  });

  test('Should have correct page elements', async ({ page }) => {
    // Assert login form elements are present
    await expect(page.locator('[data-test="username"]')).toBeVisible();
    await expect(page.locator('[data-test="password"]')).toBeVisible();
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    
    // Assert page title and branding
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.locator('.login_logo')).toContainText('Swag Labs');
    
    // Assert credentials information is displayed
    await expect(page.locator('.login_credentials')).toContainText('Accepted usernames are:');
    await expect(page.locator('.login_password')).toContainText('Password for all users:');
  });
});