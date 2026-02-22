import { test, expect } from '@playwright/test';
import { AdminPage } from './pages/adminPage';
import { DashboardPage } from './pages/dashboardPage';
import { LoginPage } from './pages/loginPage';
import * as orangeHrmData from './testData/orangeHrmLoginData.json';
import { log } from 'node:console';

test('Login test with valid credentials', async ({ page }) => {
    
    // Create Objects for the pages
    // Syntax for the object creation - const objectName = new ClassName(page);
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const adminPage = new AdminPage(page);
    await loginPage.b_navigateTo('https://opensource-demo.orangehrmlive.com/');
    await loginPage.enterUsername(orangeHrmData.validUsername);
    await loginPage.enterPassword(orangeHrmData.validPassword);
    await loginPage.clickLogin();

    await dashboardPage.clickAdminTab();
    await adminPage.enterUserName(orangeHrmData.validUsername);
    await adminPage.clickSearch();

    await dashboardPage.clickProfileAccordion();
    await dashboardPage.clickLogout();
});

// Assignment - https://www.saucedemo.com/ Automate E2E flow for the item purchase + checkout + assertion