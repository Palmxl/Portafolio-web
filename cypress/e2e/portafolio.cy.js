describe('Portafolio de Juan Martín', () => {
  it('Visita el sitio y verifica elementos clave', () => {
    cy.visit('https://www.palmxl.cv')

    // Verifica que el título principal exista
    cy.contains("Hi, I'm").should('be.visible')

    // Verifica que los botones existan
    cy.contains('View Projects').should('be.visible')
    cy.contains('Contact Me').should('be.visible')

    // Verifica que el navbar esté presente
    cy.get('nav').should('exist')

    // Verifica que haya al menos un proyecto
    cy.get('#projects-container > div').its('length').should('be.gte', 1)
  })
})
