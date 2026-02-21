import { test, expect } from '@playwright/test';

// test('Enter values inisde textbox', async ({ page }) => {
//     await page.goto('https://ui.vision/demo/webtest/frames/');
//     await page.locator('input[name="mytext1"]').fill('Hello World');
// })

test('Frame Handling Using Page.Frame()', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  const frame1 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
  await frame1?.locator('input[name="mytext1"]').fill('Hello World');
})

test('Frame Handling Using Page.FrameLocator()', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame1 = page.frameLocator('frame[src="frame_1.html"]');
  await frame1?.locator('input[name="mytext1"]').fill('Hello World');
})

test('Nested Frame Handling', async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame3 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    const childFrame = frame3?.childFrames()[0];
    await childFrame?.locator('#i6').check();
});

// Assignment - https://demo.automationtesting.in/Frames.html