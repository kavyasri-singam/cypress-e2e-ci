describe('E-Commerce Site - Add Product to Cart', () => {
  it('should search for a product and add it to the cart', () => {
    // Visit site
    cy.visit('https://automationexercise.com');

    // Click on Products
    cy.contains('Products').click();

    // Wait for page to load
    cy.url().should('include', '/products');

    // Search for product
    cy.get('#search_product').type('Tshirt');
    cy.get('#submit_search').click();

    // Wait for results
    cy.contains('Searched Products').should('be.visible');

    // Add first visible product to cart
    cy.get('.product-overlay').first().invoke('show');
    cy.contains('Add to cart').first().click();

    // Click "View Cart" in popup
    cy.contains('View Cart').click();

    // Assert that product is in cart
    cy.url().should('include', '/view_cart');
    cy.contains('Tshirt').should('be.visible');
  });
});
