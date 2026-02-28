import { After, Before, Status } from "@cucumber/cucumber";
import { Browser, Page, chromium } from '@playwright/test';
import { pageFixture } from "./pageFixture";

let browser: Browser;
let page: Page;

Before(async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    pageFixture.page = page;
});

After(async function ({ pickle, result }) {
    if (result?.status == Status.FAILED) {
        const image = await pageFixture.page.screenshot({ path: `./test-result/screenshots/${pickle.name}.png`, type: "png" });
        await this.attach(image, "image/png");
    }

    await page.close();
    await browser.close();
});