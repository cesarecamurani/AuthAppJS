// Tests for Private Route

describe('Private Route', () => {
  describe('trying to access the dashboard if not logged in should redirect you to the login page', () => {
    it('redirect you to the login page', () => {
      cy.url('http//localhost:3000/dashboard')
      cy.url('http//localhost:3000/login')
    })
  })
})
