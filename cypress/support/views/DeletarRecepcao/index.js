const el = require('./commands').ELEMENTS;

class Delete {
    recepcao() {
        var item = cy.get('.ui-table-tbody > :nth-child(2)').should('exist');
        if(item) {
            cy.log('Existe');
            cy.get(el.btnIconOnly).click();
            cy.wait(1000)
            cy.get(':nth-child(2) > .ui-menuitem-link').click({ force: true });
            cy.wait(1000)
            cy.get('.ng-invalid > .select-tab > .autocomplete-container > .auto-complete-select > .ui-autocomplete > .ui-autocomplete-dropdown')
                .click({ force: true });
            cy.wait(1000)
            cy.get('.ui-autocomplete-items > :nth-child(1)').click();
            cy.get('.ui-button-text-icon-left > .ui-button-text').click();
        }
    }
}

export default new Delete();