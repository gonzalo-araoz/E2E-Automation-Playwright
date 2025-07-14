# 🧪 Pruebas E2E con Playwright

Hola! Este es mi proyecto de pruebas automatizadas para Sauce Demo. Lo hice usando Playwright y el patrón POM (Page Object Model) que aprendí en un curso.

## 📋 Qué hace esto

Básicamente, estas pruebas automatizan todo el proceso de compra en Sauce Demo:
- ✅ Hace login con un usuario válido
- ✅ Va a la página de productos
- ✅ Agrega algo al carrito
- ✅ Completa el checkout
- ✅ Termina la compra

## 🚀 Qué necesitas

- **Node.js** (versión 16 o más nueva)
- **npm** (viene con Node.js)

## 📦 Cómo instalarlo

1. **Si tienes el repo, clónalo**:
   ```bash
   git clone <url-del-repositorio>
   cd E2E-Automation-Playwright
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Instala los navegadores de Playwright** (esto puede tardar un poco):
   ```bash
   npx playwright install
   ```

## ⚙️ Configuración

### Variables de Entorno

Necesitas crear un archivo `.env` en la raíz del proyecto. Copia esto:

```env
# URLs de la aplicación
SAUCEDEMO_URL=https://www.saucedemo.com/
INVENTORY_PAGE=https://www.saucedemo.com/inventory.html
CART_PAGE=https://www.saucedemo.com/cart.html
CHECK_OUT_PI=https://www.saucedemo.com/checkout-step-one.html
CHECK_OUT_FINISH=https://www.saucedemo.com/checkout-step-two.html
CHECK_OUT_COMPLETE=https://www.saucedemo.com/checkout-complete.html

# Credenciales de prueba (estas son las que vienen por defecto en Sauce Demo)
VALID_USERNAME=standard_user
VALID_PASSWORD=secret_sauce

# Info personal para el checkout (puedes cambiar estos datos)
FIRSTNAME=Juan
LASTNAME=Pérez
POSTALCODE=12345
```

## 🏃‍♂️ Cómo ejecutar las pruebas

### Comando principal
```bash
npm run e2e
```

### Otros comandos que te pueden servir

**Para ver la interfaz gráfica de Playwright** (muy útil para debuggear):
```bash
npx playwright test --ui
```

**Para ver el navegador mientras corre** (en lugar de headless):
```bash
npx playwright test --headed
```

**Para debuggear paso a paso**:
```bash
npx playwright test --debug
```

**Para correr solo un archivo específico**:
```bash
npx playwright test e2e.spec.js
```

**Para correr en un navegador específico** (por ahora solo tengo Chromium configurado):
```bash
npx playwright test --project=chromium
```

## 📁 Cómo está organizado el proyecto

```
E2E-Automation-Playwright/
├── pom/
│   ├── data/
│   │   └── constants.js          # Aquí están las variables del .env
│   ├── pages/
│   │   ├── login-page.js         # Todo lo del login
│   │   ├── inventory-page.js     # La página de productos
│   │   ├── cart-page.js          # El carrito
│   │   ├── checkout-pi-page.js   # Info personal del checkout
│   │   └── checkout-finish-page.js # Finalización de la compra
│   └── tests/
│       └── e2e.spec.js           # La prueba principal
├── screenshots/                  # Capturas cuando algo falla
├── playwright-report/            # Reportes en HTML
├── test-results/                 # Logs y resultados
├── playwright.config.js          # Configuración
└── package.json                  # Dependencias
```

## 🧪 Qué pruebas tengo

### La prueba principal
- **Archivo**: `pom/tests/e2e.spec.js`
- **Qué hace**: Simula todo el proceso de compra en Sauce Demo
- **Pasos que sigue**:
  1. Se loguea con un usuario válido
  2. Verifica que llegó a la página de productos
  3. Agrega un producto al carrito
  4. Va al carrito
  5. Completa el checkout con info personal
  6. Termina la compra

## 📊 Reportes

### Reporte HTML
Después de correr las pruebas, Playwright genera un reporte HTML súper bonito. Para verlo:

```bash
npx playwright show-report
```

### Capturas de pantalla
Si algo falla, Playwright automáticamente guarda una captura de pantalla en la carpeta `screenshots/` para que veas qué pasó.

## 🔧 Configuración de Playwright

En el archivo `playwright.config.js` tengo configurado:

- **Navegador**: Chromium (por ahora solo este)
- **Modo paralelo**: Activado (corre más rápido)
- **Reintentos**: 2 veces si falla en CI, 0 en desarrollo
- **Reportes**: HTML (muy bonitos)
- **Capturas**: Solo cuando algo falla
- **Video**: Activado (para ver qué pasó)
- **Trace**: En el primer reintento

## 🐛 Si algo no funciona

### Error: "npm error could not determine executable to run"
```bash
# Reinstala Playwright
npm install -D @playwright/test playwright
npx playwright install
```

### Error: "Cannot find module"
```bash
# Asegúrate de estar en el directorio correcto
cd E2E-Automation-Playwright
npm install
```

### Error: Variables de entorno no encontradas
- Revisa que el archivo `.env` existe
- Verifica que las variables están bien escritas

## 📝 Notas importantes

- Las pruebas están hechas para Sauce Demo (https://www.saucedemo.com/)
- Usé el patrón POM (Page Object Model) que aprendí en el curso
- Si algo falla, automáticamente se guarda una captura de pantalla
- Está listo para correr en CI/CD si lo necesitas

## 🤝 Si quieres agregar más pruebas

Para agregar nuevas pruebas:

1. Crea nuevos archivos de página en `pom/pages/`
2. Agrega nuevos tests en `pom/tests/`
3. Actualiza las constantes en `pom/data/constants.js` si necesitas
4. Actualiza este README

## 📞 Si necesitas ayuda

Si algo no funciona o tienes dudas:
- [Documentación de Playwright](https://playwright.dev/) (está en inglés pero es muy buena)
- Revisa los logs en `test-results/`
- Mira el reporte HTML que se genera 