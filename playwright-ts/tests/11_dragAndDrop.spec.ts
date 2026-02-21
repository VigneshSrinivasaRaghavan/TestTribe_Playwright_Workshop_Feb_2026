import { test, expect } from '@playwright/test';

test('Drag And Drop - Approach 1', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Static.html');
  await page.locator('button.fc-cta-consent').click();
  const draggableElement1 = page.locator('#angular');
  const draggableElement2 = page.locator('#mongo');
  const draggableElement3 = page.locator('#node');
  const droppableElement = page.locator('#droparea');

  await draggableElement2.hover();
  await page.mouse.down();
  await droppableElement.hover();
  await page.mouse.up();

  await draggableElement3.hover();
  await page.mouse.down();
  await droppableElement.hover();
  await page.mouse.up();
});

test('Drag And Drop - Approach 2', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Static.html');
  await page.locator('button.fc-cta-consent').click();
  const draggableElement2 = page.locator('#mongo');
  const droppableElement = page.locator('#droparea');

  await draggableElement2.dragTo(droppableElement);
});

// Assignment - https://www.globalsqa.com/demo-site/draganddrop/