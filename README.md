# Pruebas E2E con Playwright

Este proyecto contiene pruebas automatizadas para Sauce Demo usando Playwright y el patrón POM (Page Object Model).

## Qué hace

Las pruebas automatizan el flujo completo de compra en Sauce Demo:
- Login con usuario válido
- Navegación a la página de productos
- Agregar producto al carrito
- Proceso de checkout
- Finalización de la compra

## Variables de entorno necesarias

Crea un archivo `.env` en la raíz del proyecto con estas variables:

```env
# URLs de la aplicación Sauce Demo
SAUCEDEMO_URL=https://www.saucedemo.com/
INVENTORY_PAGE=https://www.saucedemo.com/inventory.html
CART_PAGE=https://www.saucedemo.com/cart.html
CHECK_OUT_PI=https://www.saucedemo.com/checkout-step-one.html
CHECK_OUT_FINISH=https://www.saucedemo.com/checkout-step-two.html
CHECK_OUT_COMPLETE=https://www.saucedemo.com/checkout-complete.html

# Credenciales de prueba (usuario estándar de Sauce Demo)
VALID_USERNAME=standard_user
VALID_PASSWORD=secret_sauce

# Información personal para completar el checkout
FIRSTNAME=Juan
LASTNAME=Pérez
POSTALCODE=12345
```

### Explicación de las variables:

- **URLs**: Las páginas específicas de Sauce Demo que usa la aplicación
- **Credenciales**: Usuario y contraseña válidos para hacer login
- **Información personal**: Datos que se usan para completar el formulario de checkout

## Comando para ejecutar

```bash
npm run e2e
```

## Demo de las pruebas

https://github.com/gonzalo-araoz/E2E-Automation-Playwright/assets/playwright-report/data/1cf5043b6119f1cf7e62e91809455316f7a6a2a6.webm 