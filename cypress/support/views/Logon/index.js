//ações de interação com a view
const el = require('./elements').ELEMENTS;

class LoginPage {
    login() {
        cy.visit('/');
        //preenchendo o campo usuário
        cy.get(el.usuario).type('karla.qualidade').should('have.value', 'karla.qualidade')
        // preenchendo o campo senha
        cy.get(el.senha).type('I@0309ds').should('have.value', 'I@0309ds')
        ////btn acessar
        cy.get('.ui-button').click();
         //unidade pré-selecionada, apenas clica novamente no botão de acessar
         cy.wait(2000)
         cy.get('.ui-button-text-only').click();
    }
}

export default new LoginPage();