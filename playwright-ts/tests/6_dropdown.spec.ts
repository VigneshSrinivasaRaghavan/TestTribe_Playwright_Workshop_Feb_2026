import { test, expect } from '@playwright/test';

test('Single Static DropDown Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('button.fc-cta-consent').click();
    await page.selectOption('#Skills', { value: 'Adobe Photoshop' }); // No-2 Preferred way
    await expect(page.locator('#Skills')).toHaveText('Adobe Photoshop');
    await page.selectOption('#Skills', { label: 'Android' }); // No-1 Preferred way
    await page.selectOption('#Skills', { index: 7 }); // Not Preferred Way
    await expect(page.locator('#Skills')).toHaveText('AutoCAD');
});

test('Multi Static DropDown Handling', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    await page.selectOption('#multi-select', [
        { value: 'California' },
        { value: 'Florida' },
        { value: 'New Jersey' }
    ]);

    await page.reload();
    await page.selectOption('#multi-select', [
        { label: 'New York' },
        { label: 'Ohio' },
        { label: 'Texas' }
    ]);

    await page.reload();
    await page.selectOption('#multi-select', [
        { index: 6 },
        { index: 7 },
    ]);
});

test('Searchable Dynamic DropDown', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('button.fc-cta-consent').click();
    await page.locator('span[role="combobox"]').click();
    await page.locator('input[role="textbox"]').fill("India");
    // 99% of cases all the dynamic dropdown will be associated with <ul and <li
    await page.locator('ul#select2-country-results>li').click();
});

test('Non Searchable Dynamic DropDown', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('button.fc-cta-consent').click();
    await page.locator('span[role="combobox"]').click();
    // 99% of cases all the dynamic dropdown will be associated with <ul and <li
    await page.locator('ul#select2-country-results>li',{hasText:'India'}).click();
});

// Assignment - Handle "User Role" dropdown from the admin tab in https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers