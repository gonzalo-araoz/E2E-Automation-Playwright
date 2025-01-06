const { expect } = require('@playwright/test');
const { URL } = require('../data/constants');

exports.SauceDemoInventoryPage = class SauceDemoInventoryPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.shoppingCart = page.locator('[data-test="shopping-cart-link"]');
    this.inventoryContainer = page.locator('[data-test="inventory-container"]');
    this.inventoryList = page.locator('[data-test="inventory-list"]');
    this.firstItemList = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.removefirstItemList = page.locator('[data-test="remove-sauce-labs-backpack"]');
    this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
    
  }
  async CheckInventoryPage (){
    await expect(this.page).toHaveURL(URL.SAUCEDEMO_URL_INVENTORY_PAGE);
    await expect(this.shoppingCart).toBeVisible();
    await expect(this.inventoryList).toBeVisible();
  }


  async AddItemToShoppingCart (){
    await this.firstItemList.click();
    await expect(this.removefirstItemList).toContainText('Remove');
    await expect(this.shoppingCartBadge).toBeVisible();
    await this.page.screenshot({ path: './screenshots/InventoryPageItemAddedToTheCart.png' });
  }

 
};