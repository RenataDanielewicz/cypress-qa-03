export class HomePageCmd {
    validateUrl(homeURL) {
      cy.url().should('be.equal', homeURL);
    }

    validateHamburgerMenu() {
      cy.get('.css-7afvtf').should("be.visible");
    }

    validateLogingOut() {
      cy.get('.css-7afvtf').click();
      cy.get('.css-r81hpm div').last().click().should("have.text", "Log out");
    }
}