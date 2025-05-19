describe('E-Commerce Site - Checkout Flow', () => {
  it('should log in, add product to cart, and complete checkout', () => {
    // Visit the website
    cy.visit('https://automationexercise.com');

    // Click on Signup / Login
    cy.contains('Signup / Login').click();

    // Fill login form
    cy.get('input[data-qa="login-email"]').type('kadambari102000@gmail.com');
    cy.get('input[data-qa="login-password"]').type('Kavya@123');
    cy.get('button[data-qa="login-button"]').click();

    // Check if login was successful
    cy.contains('Logged in as').should('be.visible');

    // Click on Products
    cy.contains('Products').click();

    // Wait for products page to load
    cy.url().should('include', '/products');

    // Add first product to cart
    cy.get('.product-overlay').first().invoke('show');
    cy.contains('Add to cart').first().click({ force: true });

    // Wait for cart modal and verify it's visible
    cy.get('#cartModal').should('be.visible');

    // Then click on Proceed To Checkout button inside the modal
    // Wait for cart modal and verify it's visible
cy.get('#cartModal').should('be.visible');

// Click the "View Cart" link from modal directly
cy.get('#cartModal a[href="/view_cart"]').click({ force: true });


    // Confirm we are on the cart page
    cy.url().should('include', '/view_cart');
    cy.contains('Shopping Cart').should('be.visible');

    // Click on 'Proceed To Checkout' from cart page
    cy.contains('Proceed To Checkout').click();

    // Place the order
    cy.contains('Place Order').click();

    // Fill in payment details (you can replace with any dummy data)
    cy.get('[data-qa="name-on-card"]').type('Kavya Sri');
    cy.get('[data-qa="card-number"]').type('4111111111111111');
    cy.get('[data-qa="cvc"]').type('123');
    cy.get('[data-qa="expiry-month"]').type('12');
    cy.get('[data-qa="expiry-year"]').type('2027');

    // Click Pay and Confirm
    cy.get('[data-qa="pay-button"]').click();

    // Verify success message
    cy.contains(/congratulations.*order has been confirmed/i).should('be.visible');


  });
});



   

