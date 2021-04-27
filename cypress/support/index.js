import './commands'
import '@shelex/cypress-allure-plugin';

// require('cypress-xpath')
require('@shelex/cypress-allure-plugin');

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})