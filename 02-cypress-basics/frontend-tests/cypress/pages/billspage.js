/// <reference types="cypress" />



const BILLS_BTN = ':nth-child(3) > .btn'
const FORM_LABEL = 'Bills'
const NEW_BILL_BTN = 'h2 > .btn'
const NUMBER_TEXTFIELD = 'input'
const AVALIBLE_CHEKBOX =  '.checkbox'
const SAVE_ROOM_BTN = '.blue'
const FORM1_LABEL = 'Bills'

//Actions/Methods/Functions


function performValdidBill(confirmationsContens,number){
    
    cy.get(BILLS_BTN).click()
    cy.contains(confirmationsContens)
    cy.get(NEW_BILL_BTN).click()
    cy.get(NUMBER_TEXTFIELD).type(number)
    cy.get(AVALIBLE_CHEKBOX).click()
    cy.get(SAVE_ROOM_BTN).click()
    cy.contains(confirmationsContens)
}

//Exporting the functions

module.exports = {

    performValdidBill

    }