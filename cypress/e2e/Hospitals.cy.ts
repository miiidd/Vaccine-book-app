describe('Hospitals', () => {
  it('Should fetch cars and display',() => {
    cy.visit('/')

    cy.get('video').should('exist')
    
    cy.get('video').should('not.have.attr', 'paused');
    
    cy.wait(5000)

    cy.get('#videobtn').click()

    cy.get('video').should('have.prop', 'paused', true);

    cy.get('#gotohospital').click()

    cy.wait(5000)
    cy.get("img[alt='hospital image']").should('have.length.gte',3)

  })
})