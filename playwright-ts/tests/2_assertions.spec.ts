import { test, expect } from '@playwright/test'

test('Visible/Hidden Assertion', async ({ page }) => {
    await page.goto('https://www.letskodeit.com/practice');
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#displayed-text').fill('Vignesh');
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    // True = Not False
    await expect(page.locator('#displayed-text')).not.toBeVisible();
    await page.locator('#show-textbox').click();
    await expect(page.locator('#displayed-text')).toBeVisible();
})

test('Present / Not Present', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    await expect(page.locator('text=Delete')).toHaveCount(0);
    await page.locator('text=Add Element').click();
    await expect(page.locator('text=Delete')).toHaveCount(1);
    await page.locator('text=Add Element').click();
    await page.locator('text=Add Element').click();
    await expect(page.locator('text=Delete')).toHaveCount(3);

    await page.locator('button[onclick="deleteElement()"]').first().click();
    // await page.locator('(//button[@onclick="deleteElement()"])[1]').click();
    await expect(page.locator('text=Delete')).toHaveCount(2);
    await page.locator('button[onclick="deleteElement()"]').first().click();
    await page.locator('button[onclick="deleteElement()"]').first().click();
    await expect(page.locator('text=Delete')).toHaveCount(0);
});

test('Enable / Disable test', async ({ page }) => {
  await page.goto('https://letcode.in/button');
    await expect(page.locator('#property')).toBeEnabled();
  await expect(page.locator('[title="Disabled button"]')).toBeDisabled();
});

test('Text Match & Mismatch test', async ({ page }) => {
  await page.goto('https://letcode.in/button');
    await expect(page.locator('#color')).toHaveText('What is my color?');
    await expect(page.locator('#color')).toContainText('What');
    await expect(page.locator('#color')).not.toHaveText('Vignesh');
});

test('URL test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  // Full URL Assertion
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  //Partial URL Assertion
  await expect(page).toHaveURL(/demo.orangehrmlive/);
});

test('Title test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  // Full title text Assertion
  await expect(page).toHaveTitle('OrangeHRM');

  //Partial title text Assertion
  await expect(page).toHaveTitle(/.*Orange/);
});

// Assignment - Practice all assertion - OrangeHRM, SauceDemo