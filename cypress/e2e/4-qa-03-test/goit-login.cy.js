import { LoginPage } from "../../pages/LoginPage";
import { HomePage } from "../../pages/HomePage";

const loginPage = new LoginPage();
const homePage = new HomePage();

describe("Validating login page elements and loging process", () => {

  it("login page test", () => {
    loginPage.navigate();
    loginPage.validateLoginTitle();
    loginPage.validateInputs();
    loginPage.validateButton();
    loginPage.validatePasswordLink();
    loginPage.fillAndValidateLoginForm();
    homePage.validateUrl();
    homePage.validateHamburgerMenu();
    homePage.validateLogingOut();
  });
});

describe("login test 2", () => {
  it("login and logout", () => {
      cy.loginPageCmd('https://www.edu.goit.global/account/login','https://www.edu.goit.global/homepage',"testowyqa@qa.team", "QA!automation-1");
  });
})