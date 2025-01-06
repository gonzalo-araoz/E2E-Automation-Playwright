const { expect } = require('@playwright/test');
const { URL } = require('../data/constants');

exports.SauceDemoCheckOutPIPage = class SauceDemoCheckOutPIPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.form = page.locator('//*[@id="checkout_info_container"]/div/form');
    this.continueButton = page.locator('[data-test="continue"]');
    this.checkOutPITitle = page.locator('[data-test="title"]');
    this.fistName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
  }
  async CheckOutPIPage (firstName, lastName, postalCode){
    await expect(this.page).toHaveURL(URL.SAUCEDEMO_URL_CHECK_OUT_PI);
    await expect(this.checkOutPITitle).toBeVisible();
    await expect(this.form).toBeVisible();
    await expect(this.continueButton).toBeVisible();
    await this.fistName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
    await this.page.screenshot({ path: './screenshots/PI.png' });
    await this.continueButton.click();
    await expect(this.page).toHaveURL(URL.SAUCEDEMO_URL_CHECK_OUT_FINISH);

  }
  
};