// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('signIn', (email, password) => {
    cy.get('#user_email').type(email)

    cy.get("#user_password").type(password);

    cy.get("[type='submit']").click();
})

Cypress.Commands.add("login", (email, password) => {
    cy.get("#user_email").should("be.visible").type(email);

    cy.get("#user_password").should("be.visible").type(password);

    cy.get("button[type='submit']").click();

    cy.get('#open-navigation-menu-mobile', { timeout: 2000 })
        .should('be.visible')
        .then(($btn) => cy.wrap($btn).click({ force: true }));

    cy.contains("Log out", { timeout: 2000 }).should("be.visible").click();

    cy.url().should("include", "/login");
});
