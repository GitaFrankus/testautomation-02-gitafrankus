/// <reference types="cypress" />


const RESERV_BTN = ':nth-child(4) > .btn'
const FORM_LABEL = 'Reservations'
const NEW_RESERV_BTN = 'h2 > .btn'
const START_DATE_TEXTFIELD = ':nth-child(1) > input'
const END_DATE_TEXTFIELD = ':nth-child(2) > input'
const NAME_LIST_SELECT = ':nth-child(3) > select'
const FLOOR_LIST_SELECT = ':nth-child(4) > select'
const ID_LIST_SELECT = ':nth-child(5) > select'
const SAVE_ROOM_BTN = '.blue'
const FORM1_LABEL = 'Reservations'

//Actions/Methods/Functions


function performValdidReserv(confirmationsContens,startdate,enddate,name,floor,id,confirmationsContens1){
    
    cy.get(RESERV_BTN).click()
    cy.contains(confirmationsContens)
    cy.get(NEW_RESERV_BTN).click()
    cy.get(START_DATE_TEXTFIELD).invoke('attr', 'type', 'text')
    .type(startdate).should('have.value', startdate)
    cy.get(END_DATE_TEXTFIELD).invoke('attr', 'type', 'text')
    .type(enddate).should('have.value', enddate)
    cy.get(NAME_LIST_SELECT ).select (name)
    cy.get(FLOOR_LIST_SELECT ).select (floor)
    cy.get(ID_LIST_SELECT).select(id)
    cy.get(SAVE_ROOM_BTN).click()
    cy.contains(confirmationsContens1)
}

//Exporting the functions

module.exports = {

    performValdidReserv

    }