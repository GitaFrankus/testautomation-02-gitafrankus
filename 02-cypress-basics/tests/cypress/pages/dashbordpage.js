/// <reference types="cypress" />

const LOGOUT_BTN = '.btn'

function preformLogout(confirmationsContens){

    cy.get(LOGOUT_BTN).click()
    cy.contains(confirmationsContens)
}
module.exports = {

preformLogout

}