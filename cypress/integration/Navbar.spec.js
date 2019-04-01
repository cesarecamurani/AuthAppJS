// Tests for Navbar

describe ('Test Navbar', () => {
  describe ('checks navbar elements', () => {
    it ('checks for "MERN Auth App" to be present', () => {
      cy.contains('MERN Auth App')
    });
    it ('checks for "MERN Auth App" to link to landing page', () => {
      cy.contains('MERN Auth App').click()
      cy.url('/')
    });
  });
});
