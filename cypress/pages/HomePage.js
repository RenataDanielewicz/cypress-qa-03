export class HomePage {
      validateUrl() {
        cy.url().should('be.equal', 'https://www.edu.goit.global/homepage');
      }

      validateHamburgerMenu() {
        cy.get('.css-7afvtf').should("be.visible");
      }

      validateLogingOut() {
        cy.get('.css-7afvtf').click();
        cy.get(':nth-child(9) > .css-bve2vl').last().click().should("have.text", "Log out");
      }
}