import { test } from '@playwright/test'

test('Upload Single Files', async ({ page }) => {
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    await page.setInputFiles('input[name="files[]"]',['uploads/playwright_1.png']);
    await page.setInputFiles('input[name="files[]"]',['uploads/playwright_2.png']);
})

test('Upload multiple Files', async ({ page }) => {
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    await page.setInputFiles('input[name="files[]"]',['uploads/playwright_1.png','uploads/playwright_2.png']);
})

// Assignment - https://formstone.dev/components/upload/demo/