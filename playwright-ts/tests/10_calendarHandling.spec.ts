import { test, Page } from '@playwright/test';
import { DateTime } from 'luxon';

// dateString format: MMMM yyyy (e.g. "February 2026")
async function selectDate(page: Page, dateString: string, dayString: string) {
  const month = page.locator('span.ui-datepicker-month');
  const year = page.locator('span.ui-datepicker-year');
  const prevButton = page.locator('a[title="Prev"]');
  const nextButton = page.locator('a[title="Next"]');

  const targetDate = DateTime.fromFormat(dateString, 'MMMM yyyy');

  await page.locator('#datepicker1').click();
  while ((await month.textContent()) + " " + (await year.textContent()) !== dateString) {
    await (targetDate < DateTime.now() ? prevButton : nextButton).click();
  }

  await page.locator(`td[data-handler="selectDay"]>a:text-is("${dayString}")`).click();
}

test('Using Fill Method', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
  // To put in console --> document.getElementById("birthday").value
  await page.locator('#birthday').fill('1993-10-18');
});

test('Using Luxon', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Datepicker.html');
  await page.locator('button.fc-cta-consent').click();

  // Past Date
  await selectDate(page, 'September 2024', '23');
  await page.waitForTimeout(2000);
  await page.reload();

  // Future Date
  await selectDate(page, 'September 2026', '23');
  await page.waitForTimeout(2000);
  await page.reload();

  // Current Date
  const currentDate = DateTime.now();
  await selectDate(page, currentDate.toFormat('MMMM yyyy'), currentDate.toFormat('d'));
  await page.waitForTimeout(2000);
});

  // Assignment - Simple + Luxon Date picker from - https://www.globalsqa.com/demo-site/datepicker/#Simple%20Date%20Picker