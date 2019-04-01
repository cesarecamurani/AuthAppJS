// Tests for Login Page

describe('Test Login Page', () => {
  describe ('Visit the login page', () => {
    it ('login page loads correctly', () => {
      cy.visit('/login');
    });
  });
  describe ('Elements on the page', () => {
    it ('checks for elements to be present', () => {
      cy.contains('MERN Auth App')
      cy.contains('Login below')
      cy.contains('Back to home')
      cy.contains('Don\'t have an account?')
      cy.get('#email')
      cy.get('#password')
      cy.get('.btn')
    });
  });
  describe('Clickable buttons', () => {
    it('"Register" redirect you to login page', () => {
      cy.get('.grey-text > a').click()
      cy.url('/register')
    })
    it('"Back to home" redirect you to landing page', () => {
      cy.get('.btn-flat').click()
      cy.url('/')
    })
  })
  describe ('Logging in redirect you to Dashboard Page', () => {
    it ('login links to dashboard page', () => {
      cy.visit('/register')
      cy.get('#email').type('ces@cesario.com')
      cy.get('#password').type('qwerty')
      cy.get('.btn').click()
      cy.url('/dashboard')
    });
  });
})
