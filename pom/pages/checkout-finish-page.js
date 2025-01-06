const { expect } = require('@playwright/test');
const { URL } = require('../data/constants');

exports.SauceDemoCheckOutFinishPage = class SauceDemoCheckOutFinishPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.sumarryInfo = page.locator('//*[@id="checkout_summary_container"]/div/div[2]');
    this.finishButton = page.locator('[data-test="finish"]');
  }
  async CheckOutFinishPage (){
    await expect(this.page).toHaveURL(URL.SAUCEDEMO_URL_CHECK_OUT_FINISH);
    await this.page.screenshot({ path: './screenshots/CheckOutFinishPage.png' });
    await expect(this.sumarryInfo).toBeVisible();
    await expect(this.finishButton).toBeVisible();
    await this.finishButton.click();
    await expect(this.page).toHaveURL(URL.SAUCEDEMO_URL_CHECK_OUT_COMPLETE);
    await this.page.screenshot({ path: './screenshots/ThankYouMessage.png' });
  }  
};