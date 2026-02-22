import { Page, Locator } from '@playwright/test';
import BasePage from './basePage';

// Class name and Interface name should be in PascalCase(Starting with capital letter)
export class LoginPage extends BasePage {

    /*
In TypeScript, marking a property as readonly means:
It can only be assigned once, typically during:
 1. The property declaration
 2. The class constructor
Once set, it cannot be modified from anywhere else in the class or outside it.
*/

    // Locators
    private readonly usernameTextbox: Locator;
    private readonly passwordTextbox: Locator;
    private readonly loginButton: Locator;

    // Constructor
    constructor(page: Page) {
        super(page);
        this.usernameTextbox = page.locator('input[name="username"]');
        this.passwordTextbox = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
    }

    // Methods - Actions performed on the locators

    async enterUsername(username:string){
        await this.b_fillField(this.usernameTextbox, username);
    }

    async enterPassword(password:string){
        await this.b_fillField(this.passwordTextbox, password);
    }

    async clickLogin(){
        await this.b_clickElement(this.loginButton);
    }
}