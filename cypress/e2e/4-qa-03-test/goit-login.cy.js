import { Login } from "../../pages/Login";
import { HomePage } from "../../pages/HomePage";

describe("Validating login page elements and loging process", () => {

  let LoginPage;
  let Home;

  before(() => {
    LoginPage = new Login();
    Home = new HomePage();
  })

  it("login page test", () => {
    // visit page
    LoginPage.navigate();
    // check title
    LoginPage.validateLoginTitle();
    // check inputs
    LoginPage.validateInputs();
    // check button
    LoginPage.validateButton();
    // check link
    LoginPage.validatePasswordLink();
    // check loging in
    LoginPage.validateLogingIn()
    // visit page
    Home.validateUrl();
    // check hamburger menu
    Home.validateHamburgerMenu();
    // check loging out
    Home.validateLogingOut();
  });
});

describe("login test 2", () => {
  it("login and logout", () => {
      cy.loginCmd('https://www.edu.goit.global/account/login','https://www.edu.goit.global/homepage',"testowyqa@qa.team", "QA!automation-1");
  });
})