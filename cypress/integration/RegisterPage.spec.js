// Tests for Register Page

describe('Test Register Page', () => {
  describe ('Visit the register page', () => {
    it ('register page loads correctly', () => {
      cy.visit('/register');
    });
  });
  describe ('Elements on the page', () => {
    it ('checks for elements to be present', () => {
      cy.contains('AuthAppJS')
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
  describe ('Registering redirect you to login Page', () => {
    it ('register links to login page', () => {
      cy.visit('/register')
      cy.get('#name').type('Cesare')
      cy.get('#email').type('ces@cesario.com')
      cy.get('#password').type('qwerty')
      cy.get('#password2').type('qwerty')
      cy.get('.btn').click()
      cy.url('/login')
    });
  });
})
