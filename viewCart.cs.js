describe('View items added to the cart', () => {
    it('Gets, types and select', () => {
      cy.visit('https://www.saucedemo.com/')
  
        cy.get('input:first').should('have.attr', 'placeholder', 'Username').type('standard_user')
        cy.get('input:last').should('have.attr', 'placeholder', 'Password').type('secret_sauce')

        cy.get('[data-cy="login"]').click()

        cy.get('div.header__toggleable-cart>button').click()


      })
    })
  