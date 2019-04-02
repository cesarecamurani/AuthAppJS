// Tests for Landing Page

describe('Test Landing Page', () => {
  describe ('Visit the landing page', () => {
    it ('landing page loads correctly', () => {
      cy.visit('/');
    });
  });
  describe ('Elements on the page', () => {
    it ('checks for "AuthAppJS" to be present', () => {
      cy.contains('AuthAppJS')
    });
    it ('checks for "Welcome to my first auth app made with the MERN" Stack to be present', () => {
      cy.contains('AuthAppJS').click()
      cy.contains('Welcome to my first auth app made with the MERN Stack')
    });
  });
  describe('Clickable buttons', () => {
    it('checks for register button to link to register page', () => {
      cy.contains('Register').click()
      cy.url('http://localhost:3000/register')
      cy.get('.btn-flat').click()
      cy.url('http://localhost:3000/')
    })
    it('checks for login button to link to login page', () => {
      cy.contains('Log In').click()
      cy.url('http://localhost:3000/login')
      cy.get('.btn-flat').click()
      cy.url('http://localhost:3000/')
    })
  })
})
