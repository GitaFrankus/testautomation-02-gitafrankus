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
        cy.get(':nth-child(1) > .btn ').click()
        cy.contains('Rooms')
        cy.get('h2 > .btn').click()
        cy.contains('New Room')
        cy.get(':nth-child(1) > select').select ('Double')
        cy.get(':nth-child(2) > input').type ('3')
        cy.get(':nth-child(3) > input').type ('5')
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type ('356')
        cy.get(':nth-child(6) > select').select ('sea_view')
        cy.get('.blue').click()
        cy.contains('Rooms')
        cy.get('.user > .btn ').click()
        cy.contains('Login')

    });
});