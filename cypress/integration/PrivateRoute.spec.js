// Tests for Private Route

describe('Test Private Route', () => {
  describe('cannot access the dashboard if not logged in', () => {
    it('redirect you to the login page', () => {
      cy.visit('http//localhost:3000/dashboard')
      cy.url('http//localhost:3000/login')
    })
  })
})
