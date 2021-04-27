const el = require('./commands').ELEMENTS;

class Triagem {
    acessaPaginaTriagem() {
        cy.get(el.submenuTriagem).click();
        cy.log('OK');
    }
    triagemDeUsuarioNaoIdentificado() {
        cy.get(el.editarCadastro).click();
    }
}

export default new Triagem()