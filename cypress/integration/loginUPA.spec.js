/// <reference types="cypress" />

import Logon from '../support/views/Logon';

describe('Login', () => {
    it('Deve realizar o login no sistema', () => {
        cy.viewport(1366, 835);

        Logon.acessarLogin();
        Logon.preencherLogin();
        
        ////btn acessar
        cy.get('.btn-outline').click();
        //unidade pré-selecionada, apenas clica novamente no botão de acessar
        cy.wait(2000)
        cy.get('.btn-outline').click();
        //expande o meu UPA
        cy.get(':nth-child(2) > a.ng-tns-c24-38').click()
        //acessa a tela de recepção
        cy.get('.active-menuitem > .ng-trigger > :nth-child(1) > .ng-star-inserted').click()
        //clica no botão para adicionar uma nova recepção
        cy.get('.pi-plus').click()
        cy.get('.nao-identificado').click();

        cy.wait(1000)
        //preenchendo o campo descrição - obrigatório
        cy.get('form.ng-untouched > :nth-child(1) > .p-grid > .p-col-12 > f17-input-container > div > .ui-inputtext')
            .type('teste Automatizado UPA').should('have.value', 'teste Automatizado UPA')

        //expande o campo select sexo - obrigatorio
        cy.get(':nth-child(2) > .ng-untouched > .select-tab > .autocomplete-container > .auto-complete-select > .ui-autocomplete > .ui-autocomplete-dropdown > .ui-button-text').click()
        //seleciona a primeira opção - masculino
        cy.get('#p-highlighted-option').click();

        //preenchendo o campo idade
        cy.get('.ng-invalid.ng-dirty > :nth-child(1) > .p-grid > :nth-child(3) > f17-input-container > div > .ui-inputtext').type('36').should('have.value', '36');

        //habilitando select raça ou cor
        cy.get('.ng-invalid > .select-tab > .autocomplete-container > .auto-complete-select > .ui-autocomplete > .ui-autocomplete-dropdown > .ui-button-text').click()

        //selecionando a segunda opção - raça cor
        cy.get('.ui-autocomplete-items > :nth-child(2)').click()

        //preenchendo o campo de endereço
        cy.get(':nth-child(1) > :nth-child(3) > f17-input-container > div > .ui-inputtext')
            .type('Rua X, Centro, Pato Branco PR').should('have.value', 'Rua X, Centro, Pato Branco PR')

        //preenchendo as observações
        cy.get('.observacoes').type('Alguma coisa qualquer').should('have.value', 'Alguma coisa qualquer')

        //salvando novo usuário
        cy.wait(1000)
        cy.get('.btn-primary > .ui-button-text').click();

        //selecionando o setor de atendimento
        cy.get('app-recepcao-setor > :nth-child(1) > .ng-untouched > .select-tab > .autocomplete-container > .auto-complete-select > .ui-autocomplete > .ui-autocomplete-dropdown > .ui-button-text').click()

        //selecioanndo o primeiro setor da lista
        cy.get('.ui-autocomplete-items > :nth-child(1) > .ng-star-inserted > span').click()
        
        //salvando recepção
        cy.get('f17-form-crud > .pi-check').click()
        //aguardando requisição
        cy.wait(1000)
        //redirencionando para a listagem de recepções
        cy.get('.ui-toolbar-group-left > a').click()


    });
});