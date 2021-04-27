const el = require('./elements').ELEMENTS;

class Recepcao {

    acessaPaginaRecepcao() {
        //expande o menu UPA
        cy.get(el.sidebar).click()
        //acessa a tela de recepção
        cy.get(el.viewRecepcao).click()
        //clica no botão para adicionar uma nova recepção
        cy.wait(1000)
        cy.get(el.btnNew).click()
    }

    cadastraNovoUsuarioNaoIdentificado() {
        cy.get(el.naoId).click()
        //preenchendo o campo descrição - obrigatório
        cy.get(el.descricao)
            .type('Fulano da Silva')
            .should('have.value', 'Fulano da Silva')
        //expande o campo select sexo - obrigatorio
        cy.get(el.sexo).click()
        //seleciona a primeira opção - masculino
        cy.get(el.opmasculino).click()
        //preenchendo o campo idade
        cy.get(el.idade).type('20')
            .should('have.value', '20')
        //habilitando select raça ou cor
        cy.get(el.racaoucor).click()
        //selecionando a segunda opção - raça cor
        cy.get(el.opracaoucor2).click()
        //preenchendo o campo de endereço
        cy.get(el.endereco)
            .type('Rua X, Centro, Pato Branco PR')
            .should('have.value', 'Rua X, Centro, Pato Branco PR')
        //preenchendo as observações
        cy.get(el.observacoes)
            .type('Alguma coisa qualquer')
            .should('have.value', 'Alguma coisa qualquer')
        //salvando novo usuário
        cy.get(el.btnSave).click()
    }

    selecionaSetorAtendimentoInformacoesFinais() {
        //selecionando o setor de atendimento
        cy.get(el.setorAtendimento).click()
        //selecionando o primeiro setor da lista
        cy.get(el.primeiraOpcaoSetor).click()
        //salvando recepção
        cy.get(el.btnSalvarRecepcao).click()
        //aguardando requisição
        cy.wait(1000)
        //redirencionando para a listagem de recepções
        cy.get(el.redirectViewListRecepcoes).click()
    }
}

export default new Recepcao()