describe('ToolJet Cypress Automation Demo', () => {

  it('Signs up and creates a new app', () => {
    // Visit the ToolJet QA Automation page
    cy.visit('https://v3-lts-eetestsystem.tooljet.com/qa-automation');

    // Step 1: Signup - Use a unique dummy email every time
    const email = `user${Date.now()}@example.com`;
    const password = 'Test1234!';

    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('input[name="confirmPassword"]').type(password);
    cy.get('button[type="submit"]').click();

    // Step 2: Confirm we are redirected to the dashboard
    cy.url().should('include', '/qa-automation');

    // Step 3: Create a new app with the name "Repo"
    cy.contains('Create an app').click();
    cy.get('input[placeholder="Enter app name"]').type('Repo');
    cy.contains('Create').click();
  });

  it('Verifies the ToolJet dashboard elements after login', () => {
    // Revisit the dashboard
    cy.visit('https://v3-lts-eetestsystem.tooljet.com/qa-automation');

    // Step 4: Check if main dashboard UI elements are visible
    cy.contains('Create an app').should('be.visible');
    cy.contains('Billing management system').should('be.visible');
    cy.contains('Supply chain management').should('be.visible');
    cy.contains('Mortgage management system').should('be.visible');
    cy.contains('QA-Automation').should('exist');
  });

});
