// Tests for Dashboard page

describe ('Tests for Dashboard Page', () => {
  describe ('Elements on the page', () => {
    it ('checks for elements to be present', () => {
      cy.visit('/login')
      cy.get('#email').type('cesare@makers.com')
      cy.get('#password').type('qwerty')
      cy.get('.btn').click()
      cy.contains('MERN Auth App')
      cy.contains('Hey there, Luca')
      cy.contains('You are logged into a full-stack MERN app')
    });
    it ('checks for logout button to link to login page', () => {
      cy.contains('Logout').click()
      cy.url('/login')
    });
  });
});
