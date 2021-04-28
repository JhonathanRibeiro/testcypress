/// <reference types="cypress" />
import Recepcao from '../support/views/Recepcao';
import Triagem from '../support/views/Triagem';
import Delete from '../support/views/DeletarRecepcao';

describe('Recepção', () => {
    it('Acessando o sistema', () => {
        Recepcao.acessaPaginaRecepcao();
    });
    //Cadastro de um novo usuário não identificado
    // it('Cadastrando usuário', () => {
    //     Recepcao.cadastraNovoUsuarioNaoIdentificado();
    // });

    // it('Selecionando setor e encerrando atendimento', () => {
    //     Recepcao.selecionaSetorAtendimentoInformacoesFinais();
    // });
});

// describe('Triagem', () => {
//     it('Acessando tela de triagem', () => {
//         Triagem.acessaPaginaTriagem();
//     });

//     it('Triando usuário não identificado', () => {
//         Triagem.triagemDeUsuarioNaoIdentificado();
//     });
// });

describe('Deletando atendimento', () => {
    it('Excluindo recepção', () => {
        Delete.recepcao();
    });

    it('', () => {
        cy.log('Recerregando a página enquanto existir mais de uma recepção....')
            document.location.reload();
    });
});



