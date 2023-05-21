describe('Filter items by pricing ', () => {
    it('Gets, types and select', () => {
      cy.visit('https://www.saucedemo.com/')
  
        cy.get('input:first').should('have.attr', 'placeholder', 'Username').type('standard_user')
        cy.get('input:last').should('have.attr', 'placeholder', 'Password').type('secret_sauce')

        cy.get('[data-cy="login"]').click()

        // at first, no option should be selected
        cy.get('.action-select').should('have.value', 'Name(A to Z)')

        // Select option(s) with matching text content
        cy.get('.action-select').select('Prize (low to high)')      
      })
    })
  