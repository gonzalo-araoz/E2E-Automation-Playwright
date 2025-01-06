import dotenv from 'dotenv';
dotenv.config()

export const URL = {
    SAUCEDEMO_URL : process.env.SAUCEDEMO_URL,
    SAUCEDEMO_URL_INVENTORY_PAGE : process.env.INVENTORY_PAGE,
    SAUCEDEMO_URL_CART_PAGE: process.env.CART_PAGE,
    SAUCEDEMO_URL_CHECK_OUT_PI: process.env.CHECK_OUT_PI,
    SAUCEDEMO_URL_CHECK_OUT_FINISH: process.env.CHECK_OUT_FINISH,
    SAUCEDEMO_URL_CHECK_OUT_COMPLETE: process.env.CHECK_OUT_COMPLETE
}

export const CREDENTIALS = {
    VALID_USERNAME : process.env.VALID_USERNAME,
    VALID_PASSWORD : process.env.VALID_PASSWORD
}

export const PERSONALINFORMATION = {
    FIRSTNAME : process.env.FIRSTNAME,
    LASTNAME : process.env.LASTNAME,
    POSTALCODE : process.env.POSTALCODE
}