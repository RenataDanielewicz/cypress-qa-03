export class LoginPageCmd {
    navigate(url) {
      cy.visit(url);
      cy.url().should('be.equal', url);
    }

    validateLoginTitle() {
      cy.get(".css-10stgr7 > .css-c1vj7d").should("be.visible");
      cy.get(".css-10stgr7 > .css-c1vj7d").should("have.text", "Login");
    }

    validateInputs() {
      cy.get("#user_email").should("be.visible");
      cy.get("#user_password").should("be.visible");
    }

    validateButton() {
      cy.get(".eckniwg2").should("be.visible").should("have.text", "Log in");
    }

    validatePasswordLink() {
      cy.get(".css-1f1fv1i > .css-1qrvie4").should("be.visible");
      cy.get(".css-1f1fv1i > .css-1qrvie4").should("have.text", "I can't remember the password");
    }

    fillAndValidateLoginForm(login, password) {
      cy.get("#user_email").type(login).should('have.value', login);
      cy.get('#user_password').type(password).should('have.value', password);
      cy.get('.eckniwg2').click();
    }
}