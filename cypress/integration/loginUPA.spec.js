/// <reference types="cypress" />

import Logon from '../support/views/Logon';
import Recepcao from '../support/views/Recepcao';

describe('Login', () => {
    it('Deve realizar o login no sistema', () => {
        cy.viewport(1366, 835);

        Logon.acessarLogin();
        Logon.preencherLogin();

        Recepcao.cadastraNovoUsuarioNaoIdentificado();
        Recepcao.selecionaSetorAtendimentoInformacoesFinais();
    });
});