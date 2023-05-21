describe('Login with a valid username and password', () => {
    it('Gets, types then submit', () => {
      cy.visit('https://www.saucedemo.com/')
  
        cy.get('input:first').should('have.attr', 'placeholder', 'Username').type('standard_user')
        cy.get('input:last').should('have.attr', 'placeholder', 'Password').type('secret_sauce')

        cy.get('[data-cy="login"]').click()
      })
    })
  