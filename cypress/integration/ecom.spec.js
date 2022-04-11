/// <reference types="cypress" />

describe ('Visit Popular Ecom', () => {
  it('Visits Amazon', () => {
    cy.visit('https://amazon.com')
    expect(true).to.equal(true)
  })

  it('Visits Flipkart', () => {
    cy.visit('https://flipkart.com')
    expect(true).to.equal(true)
  })
})

describe ('Visit Popular Fashion Site', () => {
  it('Visits Ajio', () => {
    cy.visit('https://ajio.com')
    expect(true).to.equal(true)
  })
})