/// <reference types="cypress" />

const LOGIN_PAGE_TITLE = 'Testers Hotel'
const USERNAME_TEXTFIELD = ':nth-child(1) > input'
const PASSWORD_TEXTFIELD = ':nth-child(2) > input'
const SUBMIT_BTN = '.btn'
const FORM_LABEL = 'Login'


//Actions/Methods/Functions

function cechLoginPageTitle(){

    cy.title().should('eq','Testers Hotel')
}

function performValdidLogin(username, password,confirmationsContens){
    cy.get(USERNAME_TEXTFIELD).type(username)
    cy.get(PASSWORD_TEXTFIELD).type(password)
    cy.get(SUBMIT_BTN).click()
    cy.contains(confirmationsContens)
}

//Exporting the functions

module.exports = {

    cechLoginPageTitle,
    performValdidLogin
}