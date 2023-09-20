// cypress/page-objects/HomePage.js
class HomePage {
    getWelcomeMessage() {
      return cy.get('#welcomeMessage').invoke('text');
    }
  }
  
  export default new HomePage();
  