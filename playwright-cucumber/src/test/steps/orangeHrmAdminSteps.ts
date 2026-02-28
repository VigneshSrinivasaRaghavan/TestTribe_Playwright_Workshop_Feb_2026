import { Given, When, Then } from '@cucumber/cucumber';
import {expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";

When('user clicks on admin tab', async function () {
    await pageFixture.page.locator("(//a[@class='oxd-main-menu-item'])[1]").click();
});

Then('user will be navigated to the admin page', async function () {
    expect(await pageFixture.page.locator('.oxd-topbar-header-title').textContent()).toEqual("AdminUser Management");
});