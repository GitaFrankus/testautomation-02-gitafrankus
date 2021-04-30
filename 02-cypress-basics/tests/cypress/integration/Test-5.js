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
        cy.get(':nth-child(4) > .btn').click()
        cy.contains('Reservations')
        cy.get('h2 > .btn').click()
        cy.contains('New Reservation')
        cy.get( ':nth-child(1) > input').invoke('attr', 'type', 'text')
        .type('2021-06-15').should('have.value', '2021-06-15')
        cy.get(':nth-child(2) > input').invoke('attr', 'type', 'text') 
        .type('2021-06-20').should('have.value', '2021-06-20')
        cy.get( ':nth-child(3) > select').select('Jonas Hellman (#1)')
        cy.get( ':nth-child(4) > select').select('Floor 1, Room 101')
        cy.get( ':nth-child(5) > select').select('ID: 1')
        cy.get('.blue').click()
        cy.contains('Reservations')
        cy.get('.user > .btn ').click()
        cy.contains('Login')

    });
});