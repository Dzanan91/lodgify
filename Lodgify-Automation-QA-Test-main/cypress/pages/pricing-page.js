import { currencyOptions } from '../fixtures/test-data'

let priceInput = e => cy.get('input[id="scroll-prop-plan"]')
let currencyDropdown = e => cy.get('select[class="price-currency-select form-control input-sm form-control-bord-round"]')
let priceValue = e => cy.get('span[class="total-sum"]').eq(1)
let getStartedBtn = e => cy.get ('a[data-text="Get Started"]')
let pricingPlan = text => cy.get('li[data-price-period="'+text+'"]')

export default class PricingPage {

    setPrice(value) {
        priceInput().clear().type(value)
    }

    changeCurrency(option) {
        currencyDropdown().select(option)
    }

    //Considering that currency conversion doesnt change linear i took the freedom and set 
    //the conversion coefficient to be 0.88 when conversing from USD to EUR

    changeCurrencyAndApplyConversion() {
        priceValue().invoke('text').then(text => {
        let valEUR = text 
        cy.log(valEUR)
        this.changeCurrency(currencyOptions.usd)
        this.changeCurrency(currencyOptions.eur)
        priceValue().should('have.text', valEUR*0.88)
        })
    }

    clickOnGetStartedBtn() {
        getStartedBtn().click()
    }

    switchPricingPlan(index) {
        pricingPlan(index).click()
    }
}