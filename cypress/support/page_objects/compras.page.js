class ComprasPage {
   visitarUrl() {
     cy.visit('produto');
   }
 
   buscarProduto(nomeProduto) {
     cy.get('.button-search').eq(1).click();
     cy.get('[name="s"]').eq(1).type(nomeProduto);
     cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
   }
 
   buscarProdutoLista(nomeProduto) {
     cy.get('.product-block ')
       .contains(nomeProduto)
       .click();
   }
 
   visitarProduto(nomeProduto) {
     const urlFormatada = nomeProduto.replace(/ /g, '-');
     cy.visit(`produtos/${urlFormatada}`);
   }
 
   addProdutoCarinho(tamanho, cor, quantidade) {
      cy.get('.button-variable-item-XS').click()
      cy.get(`.button-variable-item-${tamanho}`).click();
      cy.get(`.button-variable-item-${cor}`).click();
      cy.get('.input-text').clear().type(quantidade);
      cy.get('.single_add_to_cart_button').click();
    }
   
   checkout() {
     cy.get('.woocommerce-message > .button').should('exist')
     cy.get('.checkout-button').should('exist')
   }
 
   finalizarPedido() {
     cy.get('#payment_method_cod').click();
     cy.get('#terms').click();
     cy.get('#place_order').click();
   }
 }
 
 export default new ComprasPage();
 