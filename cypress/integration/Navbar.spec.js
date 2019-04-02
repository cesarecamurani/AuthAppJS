// Tests for Navbar

describe ('Test Navbar', () => {
  describe ('checks navbar elements', () => {
    it ('checks for "AuthAppJS" to be present', () => {
      cy.contains('AuthAppJS')
    });
    it ('checks for "AuthAppJS" to link to landing page', () => {
      cy.contains('AuthAppJS').click()
      cy.url('/')
    });
  });
});
