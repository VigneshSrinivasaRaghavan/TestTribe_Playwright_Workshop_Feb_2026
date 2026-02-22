import { test, expect } from '@playwright/test';
    const credentials = [
        { username: 'Admin', password: 'admin123', name: 'Valid Combination 1' },
        { username: 'Admin', password: 'admin123', name: 'Valid Combination 2' },
        { username: 'Admin', password: 'admin123', name: 'Valid Combination 3' }
    ];

credentials.forEach((data)=>{
test(`Login test with ${data.name}`, async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('[placeholder="Username"]').fill(data.username);
    await page.locator('[placeholder="Password"]').fill(data.password);
    await page.locator('[type="submit"]').click();
    await page.locator('.oxd-userdropdown').click();
    await page.locator('text=Logout').click();
});
})

