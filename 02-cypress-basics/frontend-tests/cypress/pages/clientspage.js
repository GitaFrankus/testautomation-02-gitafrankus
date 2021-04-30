/// <reference types="cypress" />



const CLIENT_BTN = '.blocks > :nth-child(2) > .btn'
const FORM_LABEL = 'Clients'
const NEW_CLIENT_BTN = 'h2 > .btn'
const NAME_TEXTFIELD = ':nth-child(1) > input'
const EPOST_TEXTFIELD = ':nth-child(2) > input'
const PHONE_TEXTFIELD = ':nth-child(3) > input'
const SAVE_ROOM_BTN = '.blue'
const FORM1_LABEL = 'Clients'

//Actions/Methods/Functions


function performValdidClient(confirmationsContens,name,epost,phone){
    
    cy.get(CLIENT_BTN).click()
    cy.contains(confirmationsContens)
    cy.get(NEW_CLIENT_BTN).click()
    cy.get(NAME_TEXTFIELD).type(name)
    cy.get(EPOST_TEXTFIELD ).type(epost)
    cy.get(PHONE_TEXTFIELD ).type(phone)
    cy.get(SAVE_ROOM_BTN).click()
    cy.contains(confirmationsContens)
}

//Exporting the functions

module.exports = {

    performValdidClient

    }