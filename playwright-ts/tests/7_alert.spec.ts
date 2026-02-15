import { test, expect } from '@playwright/test';

test('Simple Alert', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  //Alert Handling
  page.on('dialog', async (alert) => {
    expect(alert.message()).toEqual('I am a JS Alert');
    await alert.accept();
  })
  await page.locator('button:has-text("Click for JS Alert")').click();
  // await page.locator('button',{hasText:'Click for JS Alert'}).click();
  // await page.locator('button[onclick="jsAlert()"]').click();

  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
})

// Confirmation Ok button = Simple Alert
test('Confirmation Alert - OK Button', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  //Alert Handling
  page.on('dialog', async (alert) => {
    expect(alert.message()).toEqual('I am a JS Confirm');
    await alert.accept();
  })
  await page.locator('button:has-text("Click for JS Confirm")').click();
  await expect(page.locator('#result')).toHaveText('You clicked: Ok');
})

test('Confirmation Alert - Cancel Button', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  page.on('dialog', async (alert) => {
    expect(alert.message()).toEqual('I am a JS Confirm');
    await alert.dismiss();
  })
  await page.locator('button:has-text("Click for JS Confirm")').click();
  await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
})

// Prompt Alert Ok = Confirmation OK + Text
test('Prompt Alert - OK Button', async ({ page }) => {
  const nameToEnter = 'Vignesh';
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  //Alert Handling
  page.on('dialog', async (alert) => {
    expect(alert.message()).toEqual('I am a JS prompt');
    await alert.accept(nameToEnter);
  })
  await page.locator('button:has-text("Click for JS Prompt")').click();
  await expect(page.locator('#result')).toHaveText(`You entered: ${nameToEnter}`);
})

test('Prompt Alert - Cancel Button', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  //Alert Handling
  page.on('dialog', async (alert) => {
    expect(alert.message()).toEqual('I am a JS prompt');
    await alert.dismiss();
  })
  await page.locator('button:has-text("Click for JS Prompt")').click();
  await expect(page.locator('#result')).toHaveText('You entered: null');
})

// Assignment - https://demo.automationtesting.in/Alerts.html