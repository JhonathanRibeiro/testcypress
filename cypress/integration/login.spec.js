/// <reference types="cypress" />
import Logon from '../support/views/Logon';

describe('Login no sistema',()=>{
    before(() => {
        Logon.login();
    });
    
    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });
    it('Login',()=>{
        cy.log('ok');
    })
})