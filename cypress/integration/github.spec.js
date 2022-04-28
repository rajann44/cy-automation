/// <reference types="cypress" />

describe('Visit Version Control', () => {
    it('Visits Github twice', () => {
      cy.visit('https://github.com')
      cy.visit('https://github.com')
      expect(true).to.equal(true)
    })
  })