import { dummyText, validationMessages } from '../fixtures/test-data'
import CommonActions from "../pages/common-actions"
import ContactPage from "../pages/contact-page"

const contactPage = new ContactPage
const commonActions = new CommonActions

describe('Contact page tests', () =>{
  beforeEach('Navigate to pricing page', () => {
    cy.visitContact()
  })

  //This test will fail due to bug - Phone validation is not present
  it('Should verify validation messages for required fields', () =>{
    contactPage.clickOnSendBtn()
    commonActions.verifyPresenceOfText(validationMessages.nameFieldValidation)
    commonActions.verifyPresenceOfText(validationMessages.emailFieldValidation)
    commonActions.verifyPresenceOfText(validationMessages.commentFieldValidation)
    commonActions.verifyPresenceOfText(validationMessages.phoneFieldValidation)
  })

  //I have set April date to be arrival but that doesnt seem to be logical since June is after April. In any case just changing the date values can fix this
  it('Should set the date range for given values', () => {
    contactPage.openDatePicker()
    cy.selectArrivalDate('April 2023')
    contactPage.calendarNavigateBack()
    contactPage.setDateValue('Friday, April 14, 2023')
    cy.selectDepartureDate('June 2023')
    contactPage.setDateValue('Wednesday, June 14, 2023')
  })

  it('Should fill in comment section with random data', () => {
    contactPage.addComment(dummyText.loremIpsum)
  })
})