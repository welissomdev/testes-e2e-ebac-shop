/// <reference types="cypress" />
import * as faker from 'faker';
import comprasPage from '../support/page_objects/compras.page';

const dadosPessoais = require('../fixtures/dadosPessoais.json');
const tamanhos = require('../fixtures/tamanhos.json');
const cores = require('../fixtures/cores.json');

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    beforeEach(() => {
        cy.visit('minha-conta');
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha);
        });
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    
        let qtd = 3 
        comprasPage.buscarProduto('Aero Daily Fitness Tee')
        comprasPage.addProdutoCarinho('XS','Black', qtd)
        cy.get('.woocommerce-info').should('contain','Você tem um cupom de desconto?')

        cy.fixture('dadosPessoais').then((dadosPessoais) => {
            var id = faker.random.number({ min: 0, max: 2 });
            cy.addEndereço(
                dadosPessoais[id].nome,
                dadosPessoais[id].sobrenome,
                dadosPessoais[id].pais,
                dadosPessoais[id].endereco,
                dadosPessoais[id].cidade,
                dadosPessoais[id].estado,
                dadosPessoais[id].cep,
                dadosPessoais[id].telefone,
                dadosPessoais[id].email
            );
            comprasPage.finalizarPedido();
        });

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.');
    });
});