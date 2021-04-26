//ações de interação com a view
const el = require('./elements').ELEMENTS;

class LoginPage {
    login() {
        cy.visit('/');
        //preenchendo o campo usuário
        cy.get(el.usuario).type('idssaude').should('have.value', 'idssaude')
        // preenchendo o campo senha
        cy.get(el.senha).type('I@0309ds').should('have.value', 'I@0309ds')
        ////btn acessar
        cy.get('.btn-outline').click();
         //unidade pré-selecionada, apenas clica novamente no botão de acessar
         cy.wait(2000)
         cy.get('.btn-outline').click();
    }
}

export default new LoginPage();