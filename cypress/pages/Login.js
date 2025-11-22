export class Login {
    navigate() {
        cy.visit("https://www.edu.goit.global/account/login");
    }

    validateInputs() {
        cy.get("#user_email").should("be.visible");
        cy.get("#user_password").should("be.visible");
    }

    typeUserEmailAndPassword(email, password) {
        cy.get("#user_email").should("be.visible").type(email);
        cy.get("#user_password").should("be.visible").type(password);
    }

    submitLogin() {
        cy.get("button[type='submit']").click();
    }

    validateLoginUrl() {
        cy.url().should("include", "/login");
    }
}

