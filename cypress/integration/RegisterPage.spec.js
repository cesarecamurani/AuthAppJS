// Tests for Register Page

describe('Test Register Page', () => {
  describe ('Visit the landing page', () => {
    it ('register page loads correctly', () => {
      cy.visit('/register');
    });
  });
  describe ('Elements on the page', () => {
    it ('checks for elements to be present', () => {
      cy.contains('MERN Auth App')
      cy.contains('Register below')
      cy.contains('Back to home')
      cy.contains('Already have an account?')
      cy.get('#name')
      cy.get('#email')
      cy.get('#password')
      cy.get('#password2')
      cy.get('.btn')
    });
  });
  describe('Clickable buttons', () => {
    it('"Login" redirect you to login page', () => {
      cy.get('.grey-text > a').click()
      cy.url('/login')
    })
    it('"Back to home" redirect you to landing page', () => {
      cy.get('.btn-flat').click()
      cy.url('/')
    })
  })
})
