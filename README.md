
# Reto de Stefanini
### Automatizacion de la gestion de usuarios

Desarrrollo de los script de automatizacion con la estructura de BDD.

## Reportes
* **Mochawesome-reporter:** los reportes los podemos encontrar en la rama mocha-report en la ruta:

### Reporte html
cypress/report/index.html

### Screenshots
cypress/screenshots


* **"Allure reporter":** los reportes los podemos encontrar en la rama report-allure, para poder visualizar el html se debe tener abierto el servidor de Allure

### Reporte html
```bash
 npm run run-allure
 npm run allure-report
 cd cypress
 allure open
```
El comando allure open abrira el reporte html en el navewgador predeterminado

## Herramientas

- Cypress 
- NodeJS
- Visual Studio Code
- Cucumber
- Mochawesome-reporter
- Allure reporter
## 🔗 Redes sociales
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/AmirAutomation)


[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/amiralexanderroma%C3%B1acordoba/)


## Instalaccion



```bash
  npm init
  npm cypress install


```

Imtalacion de dependencias
```bash
    npm install @badeball/cypress-cucumber-preprocessor
    npm i @bahmutov/cypress-esbuild-preprocessor
    npm i @cypress/webpack-preprocessor
    npm i -D @shelex/cypress-allure-plugin
    npm i cypress-mochawesome-reporter
```
## Running Tests

To run tests, run the following command

```bash
  npm run cy.test
```

