import { test, expect } from '@playwright/test';
import { SauceDemoLogInPage } from '../pages/login-page';
import { CREDENTIALS, PERSONALINFORMATION } from '../data/constants';
import { SauceDemoInventoryPage } from '../pages/inventory-page';
import { SauceDemoCartPage } from '../pages/cart-page';
import { SauceDemoCheckOutPIPage } from '../pages/checkout-pi-page';
import { SauceDemoCheckOutFinishPage } from '../pages/checkout-finish-page';

test('Happy path: End to end with Log In', async ({ page }) => {
  const loginPage = new SauceDemoLogInPage(page);
  const inventoryPage = new SauceDemoInventoryPage(page);
  const CartPage = new SauceDemoCartPage(page);
  const checkOutPiPage = new SauceDemoCheckOutPIPage(page);
  const checkOutFinishPage = new SauceDemoCheckOutFinishPage(page);

  
  await loginPage.submitLogInForm(CREDENTIALS.VALID_USERNAME, CREDENTIALS.VALID_PASSWORD);
  await inventoryPage.CheckInventoryPage();
  await inventoryPage.AddItemToShoppingCart();
  await CartPage.CartPage();
  await checkOutPiPage.CheckOutPIPage(
    PERSONALINFORMATION.FIRSTNAME,
    PERSONALINFORMATION.LASTNAME, 
    PERSONALINFORMATION.POSTALCODE);
  await checkOutFinishPage.CheckOutFinishPage();
});