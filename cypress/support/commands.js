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


  import { LoginCmd } from "../pages/LoginCmd";
  import { HomePageCmd } from "../pages/HomePageCmd";
  
  Cypress.Commands.add("loginCmd", (url, homeURL, login, password) => {
  
    const LoginPage = new LoginCmd();

    LoginPage.navigate(url);
    // check title
    LoginPage.validateLoginTitle();
    // check inputs
    LoginPage.validateInputs();
    // check button
    LoginPage.validateButton();
    // check link
    LoginPage.validatePasswordLink();
    // check loging in
    LoginPage.validateLogingIn(login, password)
    // visit page
    
    const Home = new HomePageCmd();
    
    Home.validateUrl(homeURL);
    // check hamburger menu
    Home.validateHamburgerMenu();
    // check loging out
    Home.validateLogingOut();

});

    