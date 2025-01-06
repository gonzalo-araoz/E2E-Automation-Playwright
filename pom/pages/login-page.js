const { expect } = require('@playwright/test');
const { URL } = require('../data/constants');
exports.SauceDemoLogInPage = class SauceDemoLogInPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.username = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]')
    this.inventoryPage= page.locator('[data-test="inventory-container"]')
  }

  async submitLogInForm (username , password){
    await this.page.goto(URL.SAUCEDEMO_URL);
    await this.page.screenshot({ path: './screenshots/LogInPage.png' });
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
    await expect(this.inventoryPage).toBeVisible();
    await this.page.screenshot({ path: './screenshots/InventoryPage.png' });
  }

 
};