import { test, expect } from '@playwright/test'

test('Press Method', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('input[name="password"]').press('Enter');
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
})

test('Press - Sequentially method', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('input[name="username"]').pressSequentially('Admin', { delay: 2000 });
    await page.locator('input[name="password"]').pressSequentially('admin123', { delay: 2000 });
})

test('Regular Left Button single click', async ({ page }) => {
    await page.goto('https://play1.automationcamp.ir/mouse_events.html');
    await page.locator('#click_area').click();
    await expect(page.locator('#click_type')).toHaveText('Click');
});

test('Double Click', async ({ page }) => {
    await page.goto('https://play1.automationcamp.ir/mouse_events.html');
    await page.locator('#click_area').dblclick();
    await expect(page.locator('#click_type')).toHaveText('Double-Click');
});

test('Right Click', async ({ page }) => {
    await page.goto('https://play1.automationcamp.ir/mouse_events.html');
    await page.locator('#click_area').click({ button: 'right' });
    await expect(page.locator('#click_type')).toHaveText('Right-Click');
});