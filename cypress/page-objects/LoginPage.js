// cypress/page-objects/LoginPage.js
require('@cypress/xpath');

class LoginPage {
    visit() {
      cy.visit('https://www.educative.io/courses/learn-front-end-automated-testing-angular/login-e2e-testing'); // Replace with your login page URL
    }

    acceptCookies() {
      cy.get('#onetrust-accept-btn-handler').click()
    }

    clickFirstLoginButton() {

      cy.xpath('//*[@id="__next"]/div/nav[2]/div[4]/div/div/button[1]').click();

    }

    fillEmail(gmail) {
      cy.get('#email-field').type(gmail);
    }
  
    fillPassword(password) {
      cy.get('#password-field').type(password);
    }
  
    clickLoginButtonPanel() {
        cy.get('button[type="submit"]').click();
    }
  }
  
  export default new LoginPage();
  