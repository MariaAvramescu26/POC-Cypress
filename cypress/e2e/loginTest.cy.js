import LoginPage from '../page-objects/LoginPage.js';
import HomePage from '../page-objects/HomePage.js';

describe('Login Test', () => {
  it('should log in successfully', () => {
    LoginPage.visit();
    LoginPage.acceptCookies();
    LoginPage.clickFirstLoginButton();
    LoginPage.fillEmail('maria.test@gmail.com');
    LoginPage.fillPassword('1234');
    LoginPage.clickLoginButtonPanel();

    //HomePage.getWelcomeMessage().should('contain', 'Welcome, User!'); // Adjust the expected message
  });
});
