describe('hCard render test', () => {
    it('Click the upload avatar button', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('Upload Avatar').click()
    })

    it('Enter input to fields and check if displayed in the hCard', () => {
        cy.visit('http://localhost:3000/')

        cy.get('input#input-givenName').type('Sam')
        cy.get('.fn').contains('Sam')

        cy.get('input#input-surname').type('Fairfax')
        cy.get('.fn').contains('Fairfax')

        cy.get('input#input-email').type('test@email.com')
        cy.get('.email').contains('test@email.com')

        cy.get('input#input-phone').type('0412345678')
        cy.get('.tel').contains('0412345678')

        cy.get('input#input-house').type('1')
        cy.get('.street-address').contains('1')

        cy.get('input#input-street').type('Darling Island Road')
        cy.get('.street-address').contains('1 Darling Island Road')

        cy.get('input#input-suburb').type('Pyrmont')
        cy.get('.locality').contains('Pyrmont')

        cy.get('input#input-state').type('NSW')
        cy.get('.region').contains('NSW')

        cy.get('input#input-postCode').type('2035')
        cy.get('.postal-code').contains('2035')

        cy.get('input#input-country').type('Australia')
        cy.get('.country-name').contains('Australia')
      })
  })