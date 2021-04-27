const el = require('./commands').ELEMENTS;

class Delete {
    recepcao() {
        cy.get(el.btnIconOnly).click();
    }
}

export default new Delete();