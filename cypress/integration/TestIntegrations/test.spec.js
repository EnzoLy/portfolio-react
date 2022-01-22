/// <reference types="Cypress" />

describe('Portfolio', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('frontpage can be opened', () => {
    cy.contains('Minecraft Plugins').click()
  })
})
