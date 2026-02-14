import {test, expect} from '@playwright/test'

test('Orange HRM Login', async ({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.locator('input[name="username"]').fill('Admin');
await page.locator('input[name="password"]').fill('admin123');
await page.locator('button[type="submit"]').click();

//Assertion
expect(page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

})

// Assignment
// Login for sauce demo - https://www.saucedemo.com/