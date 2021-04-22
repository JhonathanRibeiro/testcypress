/// <reference types="cypress" />

import Logon from '../support/views/Logon';
import Recepcao from '../support/views/Recepcao';

describe('Login e Recepção', () => {
    it('Deve realizar o login no sistema', () => {
        cy.viewport(1366, 835);

        Logon.acessaSistemaPreencheLogin();
        Recepcao.cadastraNovoUsuarioNaoIdentificado();
        Recepcao.selecionaSetorAtendimentoInformacoesFinais();
    });
    
    it('Deve cadastrar um novo usuário não identificado',()=>{
        
    });
    
    it('Deve selecionar o setor e motivo do atendimento e finalizar',()=>{
    })
});
