describe('login test 1', () => {
    beforeEach(() => {
      cy.visit('https://www.edu.goit.global/account/login')
    });

    it("Znajdź wejście z pocztą i wpisz email", () => {
        cy.get("#user_email").type("user888@gmail.com").should('have.value', "user888@gmail.com");
        cy.get('#user_password').type("1234567890").should('have.value', "1234567890");
        cy.get('.eckniwg2').click().should("have.text", "Log in");
        cy.get('.css-7afvtf').click();
        cy.get(':nth-child(9) > .css-bve2vl').last().click().should("have.text", "Log out");
    });

    
})

describe("login test 2", () => {
    it("login and logout", () => {
        cy.login('https://www.edu.goit.global/account/login',"testowyqa@qa.team", "QA!automation-1");
    });
})