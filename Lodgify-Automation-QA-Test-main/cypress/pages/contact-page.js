let sendBtn = e => cy.get('button[data-testid="button"]').contains('Send')
let datePicker = e => cy.get('button[class="DateRangePickerInput_calendarIcon DateRangePickerInput_calendarIcon_1"]')
let datePickerNavBack = e => cy.get('svg[class="DayPickerNavigation_svg__horizontal DayPickerNavigation_svg__horizontal_1"]').eq(0)
let datePickerNavForward = e => cy.get('svg[class="DayPickerNavigation_svg__horizontal DayPickerNavigation_svg__horizontal_1"]').eq(1)
let monthPrevious = e => cy.get('div[class="CalendarMonth_caption CalendarMonth_caption_1"]').eq(0)
let monthNext = e => cy.get('div[class="CalendarMonth_caption CalendarMonth_caption_1"]').eq(1)
let dateValue = text => cy.get('td[aria-label="'+text+'"]')
let commentTextArea = e => cy.get('textarea[placeholder="Comment"]')

export default class ContactPage {

    clickOnSendBtn() {
        sendBtn().click()
    }

    setDateValue(text) {
        dateValue(text).click({force: true})
    }

    openDatePicker() {
        datePicker().click()
    }

    calendarNavigateBack() {
        datePickerNavBack().click()
    }

    calendarNavigateForward() {
        datePickerNavForward().click()
    }

    selectMonthPrevious() {
        return monthPrevious()
    }

    selectMonthNext() {
        return monthNext()
    }

    addComment(text) {
        commentTextArea().type(text)
    }
}