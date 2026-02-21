import { test, expect } from '@playwright/test';

test('Downalod a file', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/FileDownload.html#google_vignette');
  await page.locator('button.fc-cta-consent').click();
    const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('a[type="button"]').click()
  ]);

  console.log(await download.path()); // To find the path of the downloaded file

  // Way 1 - Saving with default name
  const fileName = download.suggestedFilename(); // samplefile.pdf
  await download.saveAs(`downloads/${fileName}`); // Saving with default name

  // Way 2 - Saving with custom name
  const customFileName = 'seleniumDoc.pdf'; // Custom name should also mention the extension
  await download.saveAs(`downloads/${customFileName}`); // Saving with custom name
});

// Assignment - https://filesamples.com/formats/pdf