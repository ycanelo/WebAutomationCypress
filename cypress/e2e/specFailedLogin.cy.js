describe('ParaBank Web', () => {
    beforeEach(() => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    })
  
    afterEach(function () {
      if (this.currentTest.state === 'failed') {
        Cypress.stop()
      }
    })

    it('Verify ParaBank web', () => {
        cy.contains('Customer Login').should('be.visible')
      })

    it('Login failed with empty values', () => {
        cy.get('input[name="username"]').clear()
        cy.get('input[name="password"]').clear()
        cy.contains('Log In').click()
        cy.contains(Cypress.env('emptyMessageError')).should('be.visible')
        cy.screenshot('Parabank-LoginFailedEmptyValues')        
    })

    it('Login failed with invalid values', () => {
        cy.get('input[name="username"]').type('username2')
        cy.get('input[name="password"]').type('test')
        cy.contains('Log In').click()
        cy.contains(Cypress.env('invalidValuesMessageError')).should('be.visible') 
        cy.screenshot('Parabank-LoginFailedInvalidValues')       
    })
})
