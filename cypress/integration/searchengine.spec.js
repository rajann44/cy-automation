/// <reference types="cypress" />

describe('Visit Popular Search Engine', () => {
    it('Visits Google', () => {
      cy.visit('https://google.com')
      expect(true).to.equal(false)
    })

    it('Visits Duckduckgo', () => {
      cy.visit('https://duckduckgo.com')
      expect(true).to.equal(true)
    })
  })