/// <reference types="cypress" />


const ROOM_BTN = ':nth-child(1) > .btn '
const FORM_LABEL = 'Rooms'
const NEW_ROOM_BTN = 'h2 > .btn'
const LIST_SELECT = ':nth-child(1) > select'
const FLOOR_TEXTFIELD = ':nth-child(2) > input'
const ROOM_TEXTFIELD = ':nth-child(3) > input'
const AVALIBLE_CHEKBOX =  '.checkbox'
const PRISE_TEXTFIELD = ':nth-child(5) > input'
const VIEW_LIST_SELECT = ':nth-child(6) > select'
const SAVE_ROOM_BTN = '.blue'
const FORM1_LABEL = 'Rooms'

//Actions/Methods/Functions


function performValdidRoom(confirmationsContens,type,floor,room,
    prise,view,confirmationsContens1){
    
    cy.get(ROOM_BTN).click()
    cy.contains(confirmationsContens)
    cy.get(NEW_ROOM_BTN).click()
    cy.get(LIST_SELECT).select(type)
    cy.get(FLOOR_TEXTFIELD).type(floor)
    cy.get(ROOM_TEXTFIELD).type(room)
    cy.get(AVALIBLE_CHEKBOX).click()
    cy.get(PRISE_TEXTFIELD).type(prise)
    cy.get(VIEW_LIST_SELECT).select(view)
    cy.get(SAVE_ROOM_BTN).click()
    cy.contains(confirmationsContens1)
}

//Exporting the functions

module.exports = {

    performValdidRoom
}