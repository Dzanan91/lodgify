


export default class CommonActions {
    verifyPresenceOfText(text) {
        cy.contains(text).should('be.visible')
    }
}