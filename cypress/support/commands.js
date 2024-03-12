Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario);
    cy.get('#password').type(senha, { log: false });
    cy.get('.woocommerce-form > .button').click();
});
Cypress.Commands.add('addProdutos', (produto, tamanho, cor, quantidade) => {
    cy.get('.product-block')
    .contains(produto).click()
    cy.get('.button-variable-item-'+ tamanho).click()
    cy.get('.button-variable-item-'+ cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
});
Cypress.Commands.add('addEndereço', (nome, sobrenome, pais, endereco, cidade, estado, cep, telefone, email, comentario) => {
    cy.get('#billing_first_name').clear().type(nome);
    cy.get('#billing_last_name').clear().type(sobrenome);
    cy.get('#select2-billing_country-container').click().type(pais + '{Enter}');
    cy.get('#billing_address_1').clear().type(endereco);
    cy.get('#billing_city').clear().type(cidade);
    cy.get('#select2-billing_state-container').click().type(estado + '{Enter}');
    cy.get('#billing_postcode').clear().type(cep);
    cy.get('#billing_phone').clear().type(telefone);
    cy.get('#billing_email').clear().type(email);
   
})

