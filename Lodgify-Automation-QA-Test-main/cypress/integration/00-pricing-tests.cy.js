import PricingPage from '../pages/pricing-page'
import { priceValues } from '../fixtures/test-data'

const pricingPage = new PricingPage

describe('Pricing page tests', () => {
  beforeEach('Navigate to pricing page', () => {
    cy.visitPricing()
  })

  it('Should verify starters prices for yearly plan of 50', () => {
    pricingPage.setPrice(priceValues[50])
    cy.contains('64').should('be.visible')
    cy.contains('375').should('be.visible')
    cy.contains('518').should('be.visible')
  })

  it('Should change currency and verify new amounts', () => {
    pricingPage.setPrice(priceValues[50])
    cy.contains('375').should('be.visible')
    pricingPage.changeCurrencyAndApplyConversion()
  })

  it('Should verify get started option routes user to sign up', () =>{
    pricingPage.clickOnGetStartedBtn()
    cy.contains('Start your business').should('be.visible')
  })

})