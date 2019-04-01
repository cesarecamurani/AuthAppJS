describe('Test Landing Page', () => {
  describe ('Visit the landing page', () => {
    it ('landing page loads correctly', () => {
      cy.visit('/api/users');
    });
  });
  describe ('Elements on the page', () => {
    it ('checks for "MERN Auth App" to be present', () => {
      cy.contains('MERN Auth App')
    });
    it ('checks for "Welcome to my first auth app made with the MERN" Stack to be present', () => {
      cy.contains('MERN Auth App').click()
      cy.contains('Welcome to my first auth app made with the MERN Stack')
    });
  });
  describe('Clickable buttons', () => {
    it('checks for register button to link to register page', () => {
      cy.contains('Register').click()
      cy.url('http://localhost:3000/register')
      cy.get('.btn-flat').click()
    })
    it('checks for login button to link to login page', () => {
      cy.contains('Log In').click()
      cy.url('http://localhost:3000/login')
      cy.get('.btn-flat').click()
    })
  })
})
