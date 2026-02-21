import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Navigate and login before each test
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
});

test.afterEach(async ({ page }) => {
  // Logout after each test
  await page.locator('#react-burger-menu-btn').click();
  await page.locator('#logout_sidebar_link').click();
});

test('Add Items and Check out test', async ({ page }) => {
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('.shopping_cart_link').click();
  await page.locator('#checkout').click();
});

test('Add Items and remove from Cart test', async ({ page }) => {
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('.shopping_cart_link').click();
  await page.locator('#remove-sauce-labs-backpack').click();
});

  // Assignment - Practice all 4 hooks in - https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
