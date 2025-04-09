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

  it('Register ParaBank web', () => {
    // Generate a random username
    Cypress.env('randomUsername', `username${Math.floor(Math.random() * 10000)}`)
    cy.log(`Generated Username: ${Cypress.env('randomUsername')}`);

    //open Register page
    cy.contains('Register').click()

    // Verify the URL after clicking Register
    cy.url().should('include', '/register.htm')

    //complete the register form

    cy.get('input[id="customer.firstName"]').type('firstName')
    cy.get('input[id="customer.lastName"]').type('lastName')
    cy.get('input[id="customer.address.street"]').type('address_street')
    cy.get('input[id="customer.address.city"]').type('address_city')
    cy.get('input[id="customer.address.state"]').type('address_state')
    cy.get('input[id="customer.address.zipCode"]').type('address_zipCode')
    cy.get('input[id="customer.ssn"]').type('ssn')
    cy.get('input[id="customer.username"]').type(Cypress.env('randomUsername'))
    cy.get('input[id="customer.password"]').type('password')
    cy.get('input[id="repeatedPassword"]').type('password')

    //verify value updated
    cy.get('input[id="customer.firstName"]').should('have.value', 'firstName')
    //send the form
    cy.get('input[value="Register"]').click()

    //verify success message and log out
    cy.contains('Your account was created successfully. You are now logged in.').should('be.visible')
    cy.contains('Log Out').click()
  })

  it('Login ParaBank web', () => {
    //login with the new user
    cy.get('input[name="username"]').type(Cypress.env('randomUsername'))
    cy.get('input[name="password"]').type('password')
    cy.contains('Log In').click()
    cy.contains('Log Out').should('be.visible')
  })

})