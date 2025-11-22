export class Home {
    openMenu() {
        cy.get('#open-navigation-menu-mobile', { timeout: 2000 })
            .should('be.visible')
            .then(($btn) => cy.wrap($btn).click({ force: true }));
    }

    logOut() {
        cy.contains("Log out", { timeout: 2000 }).should("be.visible").click();
    }
}