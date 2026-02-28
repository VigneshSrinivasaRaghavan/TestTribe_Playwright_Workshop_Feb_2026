import {test, expect} from '@playwright/test'
import {step} from 'allure-js-commons';

test('Given - Orange HRM Login', async ({page})=>{
await step('Navigate to Orange HRM login page',async()=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
})

await step('When - In the login page entering the valid accepted username',async()=>{
    await page.locator('input[name="username"]').fill('Admin');
})

await step('When - In the login page entering the valid accepted password',async()=>{
await page.locator('input[name="password"]').fill('admin123');
})

await step('When - Click on the login button',async()=>{
await page.locator('button[type="submit"]').click();
})

await step('Then - Validate whether the dashboard page is displayed',async()=>{
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})

})