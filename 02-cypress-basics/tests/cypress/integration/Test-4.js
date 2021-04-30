/// <reference types="cypress" />

describe("Second test", () => {
    it("Test case 2", () => {
        cy.visit("http://localhost:3000")
        cy.title().should('eq','Testers Hotel')
        cy.contains('Login')
        cy.log('Asserted that the login string/label exists on this specific page')
        cy.get(':nth-child(1) > input').type ('tester01')
        cy.get(':nth-child(2) > input').type ('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Bills')
        cy.get('h2 > .btn').click()
        cy.contains('New Bill')
        cy.get( 'input').type ('456')
        cy.get('.checkbox').click()
        cy.get('.blue').click()
        cy.contains('Bills')
        cy.get('.user > .btn ').click()
        cy.contains('Login')

    });
});