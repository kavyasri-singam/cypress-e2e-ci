describe('E-Commerce Site - Login', () => {
  it('should log in with valid credentials', () => {
    cy.visit('https://automationexercise.com');
    cy.contains('Signup / Login').click();

    cy.get('input[data-qa="login-email"]').type('kadambari102000@gmail.com'); // your new email
    cy.get('input[data-qa="login-password"]').type('Kavya@123');              // your password

    cy.get('button[data-qa="login-button"]').click();

    // Check for successful login
    cy.contains('Logged in as', { timeout: 10000 }).should('be.visible');
  });
});


