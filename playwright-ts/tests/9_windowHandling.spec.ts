import { test, expect } from '@playwright/test';

test('Single Tab Handling', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await page.locator('button.fc-cta-consent').click();
  // await page.click('button.fc-cta-consent');

  const [newTab] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('button:has-text("click")')
  ]);

  await newTab.waitForLoadState();
  await newTab.locator('.DocSearch-Button-Placeholder').click();
  await newTab.locator('.DocSearch-Input').fill('Locator strategies');

  await page.bringToFront();
  await page.locator('a[href="Index.html"]').click();

  await newTab.bringToFront();
  await newTab.close();
})

test('Single Window Handling', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await page.locator('button.fc-cta-consent').click();
  await page.click('a:has-text("Open New Seperate Windows")');

  const [newWindow] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('button[onclick="newwindow()"]')
  ]);

  await newWindow.waitForLoadState();
  await newWindow.locator('.DocSearch-Button-Placeholder').click();
  await newWindow.locator('.DocSearch-Input').fill('Locator strategies');

  await page.bringToFront();
  await page.locator('a[href="Index.html"]').click();

  await newWindow.bringToFront();
  await newWindow.close();
})

test('Multiple Tab Handling', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await page.locator('button.fc-cta-consent').click();
  await page.click('a:has-text("Open Seperate Multiple Windows")');

  const [multipleTab] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('button[onclick="multiwindow()"]')
  ]);

  await multipleTab.waitForLoadState();
  await page.waitForTimeout(2000);
  const pages = multipleTab.context().pages();
  // pages[0] - Original Parent Page
  // pages[1] - First Child Tab
  // pages[2] - Second Child Tab

  await pages[1].bringToFront();
  await pages[1].locator('#email').fill('vignesh@gmail.com');

  await pages[2].bringToFront();
  await pages[2].locator('.DocSearch-Button-Placeholder').click();
  await pages[2].locator('.DocSearch-Input').fill('Locator strategies');

  await page.bringToFront();
  await page.locator('a[href="Index.html"]').click();
})

/*
https://www.hyrtutorials.com/p/window-handles-practice.html
- Single Tab Handling
- Single Window Handling
- Multiple Tab Handling
- Multiple Window Handling
*/