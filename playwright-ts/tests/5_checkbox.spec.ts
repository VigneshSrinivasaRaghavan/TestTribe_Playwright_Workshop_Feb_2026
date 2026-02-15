import { test, expect } from '@playwright/test';

test('Checkbox Test', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.locator('button[aria-label="Consent"]').click();

    const cricketCheckbox = page.locator('#checkbox1');
    const moviesCheckbox = page.locator('#checkbox2');
    const hockeyCheckbox = page.locator('#checkbox3');

    // Default State assertion
    await expect(cricketCheckbox).not.toBeChecked();
    await expect(moviesCheckbox).not.toBeChecked();
    await expect(hockeyCheckbox).not.toBeChecked();

    await cricketCheckbox.check();
    await moviesCheckbox.check();

    await expect(cricketCheckbox).toBeChecked();
    await expect(moviesCheckbox).toBeChecked();
    await expect(hockeyCheckbox).not.toBeChecked();

    await cricketCheckbox.uncheck();
    await moviesCheckbox.uncheck();

    await expect(cricketCheckbox).not.toBeChecked();
    await expect(moviesCheckbox).not.toBeChecked();
    await expect(hockeyCheckbox).not.toBeChecked();
});

// Assignment - Handle all the Checkbox button selection in https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/