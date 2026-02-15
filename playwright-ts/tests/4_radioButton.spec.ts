import { test, expect } from '@playwright/test';

test('Radio button test', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('button.fc-cta-consent').click();

    const maleRadioButton = page.locator('input[value="Male"]');
    const femaleRadioButton = page.locator('input[value="FeMale"]');

    // Default Radio Button state checking
    expect(maleRadioButton).not.toBeChecked();
    expect(femaleRadioButton).not.toBeChecked();

    // Male Radio button selection
    await maleRadioButton.check();
    expect(maleRadioButton).toBeChecked();
    expect(femaleRadioButton).not.toBeChecked();

    // Female Radio button selection
    await femaleRadioButton.check();
    expect(maleRadioButton).not.toBeChecked();
    expect(femaleRadioButton).toBeChecked();
});

// Assignment - Handle all the radio button selection in https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/