const { expect } = require('@playwright/test');
const { URL } = require('../data/constants');
const { LOGIN_PAGE_LOCATORS } = require('../data/locators');
const { INVENTORY_PAGE_LOCATORS } = require('../data/locators');

exports.SauceDemoLogInPage = class SauceDemoLogInPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  
  constructor(page) {
    this.page = page;
    this.username = page.locator(LOGIN_PAGE_LOCATORS.getInput('user-name'));
    this.password = page.locator(LOGIN_PAGE_LOCATORS.getInput('password'));
    this.loginButton = page.locator(LOGIN_PAGE_LOCATORS.getInput('login-button'))
    this.inventoryPage= page.locator(INVENTORY_PAGE_LOCATORS.getDiv('inventory_container'))
  }

  async submitLogInForm (username , password){
    await this.page.goto(URL.SAUCEDEMO_URL);
    await this.page.screenshot({ path: './screenshots/LogInPage.png' });
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
    await expect(this.inventoryPage.nth(1)).toBeVisible();
    await this.page.screenshot({ path: './screenshots/InventoryPage.png' });
  }

 
};