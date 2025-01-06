const { expect } = require('@playwright/test');
const { URL } = require('../data/constants');

exports.SauceDemoCartPage = class SauceDemoCartPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.shoppingCart = page.locator('[data-test="shopping-cart-link"]');
    this.cartItemList = page.locator('//*[@id="cart_contents_container"]/div/div[1]');
    this.checkOutButton = page.locator('[data-test="checkout"]');
  }
  async CartPage (){
    await this.shoppingCart.click();
    await this.page.screenshot({ path: './screenshots/CartPage.png' });
    await expect(this.page).toHaveURL(URL.SAUCEDEMO_URL_CART_PAGE);
    await expect(this.cartItemList).toBeVisible();
    await expect(this.checkOutButton).toBeVisible();
    await this.checkOutButton.click();
    await expect(this.page).toHaveURL(URL.SAUCEDEMO_URL_CHECK_OUT_PI);
    await this.page.screenshot({ path: './screenshots/CheckOutPage.png' });

  }




  
};