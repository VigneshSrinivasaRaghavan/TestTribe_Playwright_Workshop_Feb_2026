import { test, expect } from '@playwright/test';
import * as orangeHrmData from './testData/orangeHrmLoginData.json';

test('Login test with valid credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('[placeholder="Username"]').fill(orangeHrmData.validUsername);
    await page.locator('[placeholder="Password"]').fill(orangeHrmData.validPassword);
    await page.locator('[type="submit"]').click();
    await page.locator('.oxd-userdropdown').click();
    await page.locator('text=Logout').click();
});

test('Login test with invalid credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('[placeholder="Username"]').fill(orangeHrmData.invalidUsername);
    await page.locator('[placeholder="Password"]').fill(orangeHrmData.invalidPassword);
    await page.locator('[type="submit"]').click();
    await expect(page.locator('p.oxd-alert-content-text')).toHaveText('Invalid credentials');
});