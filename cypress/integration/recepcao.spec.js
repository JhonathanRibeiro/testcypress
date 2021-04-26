/// <reference types="cypress"/>
import Logon from '../support/views/Logon';
import Recepcao from '../support/views/Recepcao';

describe('Recepção de usuário não identificado', () => {
    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    it('Acessando recepção', () => {
        Recepcao.acessaPaginaRecepcao();
    });

    it('Cadastrando usuário', () => {
        Recepcao.cadastraNovoUsuarioNaoIdentificado();
    });

    it('Selecionando setor e encerrando atendimento', () => {
        Recepcao.selecionaSetorAtendimentoInformacoesFinais();
    });
});











