import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse/sync';

interface LoginData {
    username: string;
    password: string;
}

const orangeHrmData = parse(fs.readFileSync(path.join(__dirname,'testData','orangeHrmLoginData.csv')), {
    columns: true,
    skip_empty_lines: true
}) as LoginData[];

test('Login test with valid credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('[placeholder="Username"]').fill(orangeHrmData[0].username);
    await page.locator('[placeholder="Password"]').fill(orangeHrmData[0].password);
    await page.locator('[type="submit"]').click();
    await page.locator('.oxd-userdropdown').click();
    await page.locator('text=Logout').click();
});

test('Login test with invalid credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('[placeholder="Username"]').fill(orangeHrmData[1].username);
    await page.locator('[placeholder="Password"]').fill(orangeHrmData[1].password);
    await page.locator('[type="submit"]').click();
    await expect(page.locator('p.oxd-alert-content-text')).toHaveText('Invalid credentials');
});

/*
Similar to Read CSV - Try to write test read data from excel
Hint - Use xlsx dependency - https://www.npmjs.com/package/xlsx
*/