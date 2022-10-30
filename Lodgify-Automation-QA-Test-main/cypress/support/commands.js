// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import ContactPage from '../pages/contact-page'

const contactPage = new ContactPage

Cypress.Commands.add('visitContact',() => {
    cy.visit(Cypress.env('contactUrl'))
})

Cypress.Commands.add('visitPricing',() => {
    cy.visit(Cypress.env('pricingUrl'))
})

// This would best solved with While loop. Considering cypress doesnt support while loop recursive strategy has been applied for both command below
Cypress.Commands.add('selectArrivalDate', (arrivalDateValue) => {

    contactPage.selectMonthPrevious().invoke('text').then((month) => {
        cy.log(month)
        if (month == arrivalDateValue) {
            cy.log('Your date is correct')
        }
        else {
            contactPage.calendarNavigateForward()
            cy.selectArrivalDate(arrivalDateValue)
        }
    })
})

Cypress.Commands.add('selectDepartureDate', (departureDateValue) => {

    contactPage.selectMonthNext().invoke('text').then((month) => {
        cy.log(month)
        if (month == departureDateValue) {
            cy.log('Your date is correct')
        }
        else {
            contactPage.calendarNavigateForward()
            cy.selectDepartureDate(departureDateValue)
        }
    })
})

