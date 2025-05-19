describe('E-Commerce Site - Home Page', () => {
  it('should load the homepage and verify the title', () => {
    cy.visit('https://automationexercise.com'); // Example public e-commerce site
    cy.title().should('include', 'Automation Exercise');
  });
});
