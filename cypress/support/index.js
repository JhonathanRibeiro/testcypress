
// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import '@shelex/cypress-allure-plugin';
require('@shelex/cypress-allure-plugin');

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})