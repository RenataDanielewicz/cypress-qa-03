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

Cypress.Commands.add("login", (url, login, password) => {
    cy.visit(url);
    cy.get("#user_email").type(login);
    cy.get('#user_password').type(password);
    cy.get('.eckniwg2').click().should("have.text", "Log in");
    cy.get('.css-7afvtf').click();
    cy.get('.css-r81hpm div').last().click().should("have.text", "Log out");
  });

  import { LoginPageCmd } from "../pages/LoginPageCmd";
  import { HomePageCmd } from "../pages/HomePageCmd";

  const loginPage = new LoginPageCmd();
  const homePage = new HomePageCmd();
  
  Cypress.Commands.add("loginPageCmd", (url, homeURL, login, password) => {
    loginPage.navigate(url);
    loginPage.validateLoginTitle();
    loginPage.validateInputs();
    loginPage.validateButton();
    loginPage.validatePasswordLink();
    loginPage.fillAndValidateLoginForm(login, password);
    homePage.validateUrl(homeURL);
    homePage.validateHamburgerMenu();
    homePage.validateLogingOut();
});

    