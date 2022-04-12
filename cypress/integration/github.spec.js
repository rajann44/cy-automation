/// <reference types="cypress" />

describe('Visit Version Control', () => {
    it('Visits Github', () => {
      cy.visit('https://github.com')
      expect(true).to.equal(true)
    })
  })