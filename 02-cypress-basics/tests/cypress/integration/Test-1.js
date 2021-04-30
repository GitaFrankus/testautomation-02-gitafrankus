/// <reference types="cypress" />

describe("First test", () => {
    it("Test case 1", () => {
        cy.visit("http://localhost:3000")
        cy.title().should('eq','Testers Hotel')
        cy.contains('Login')
        cy.log('Asserted that the login string/label exists on this specific page')
        cy.get(':nth-child(1) > input').type ('tester01')
        cy.get(':nth-child(2) > input').type ('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome')
        cy.get('.user > .btn ').click()
        cy.contains('Login')

    });
});