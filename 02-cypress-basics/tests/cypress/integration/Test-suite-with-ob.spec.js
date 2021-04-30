/// <reference types="cypress" />

import * as loginFuncs from '../pages/loginpage'
import * as dasbordFuncs from '../pages/dashbordpage'
import * as roomFuncs from '../pages/roomspage'
import * as clientFuncs from '../pages/clientspage'
import * as billFuncs from '../pages/billspage'
import * as ReservFuncs from '../pages/reservationspage'

describe("Test suite with Page-ojekts", () => {
    it("Test case 1", () => {

        cy.visit("http://localhost:3000")
        loginFuncs.cechLoginPageTitle()
        loginFuncs.performValdidLogin('tester01','GteteqbQQgSr88SwNExUQv2ydb7xuf8c','Welcome')
        dasbordFuncs.preformLogout('Login')

    })
    it("Test case 2", () => {

        cy.visit("http://localhost:3000")
        loginFuncs.cechLoginPageTitle()
        loginFuncs.performValdidLogin('tester01','GteteqbQQgSr88SwNExUQv2ydb7xuf8c','Welcome')
        roomFuncs.performValdidRoom('Rooms','Double','3','5','356','sea_view','Rooms')
        //dasbordFuncs.preformLogout('Login')

    })
    it("Test case 3", () => {

        cy.visit("http://localhost:3000")
        loginFuncs.cechLoginPageTitle()
        loginFuncs.performValdidLogin('tester01','GteteqbQQgSr88SwNExUQv2ydb7xuf8c','Welcome')
        clientFuncs.performValdidClient('Clients','Johan','Berg@gmail.com','0734582738')
        //dasbordFuncs.preformLogout('Login')

    })
    it("Test case 4", () => {

        cy.visit("http://localhost:3000")
        loginFuncs.cechLoginPageTitle()
        loginFuncs.performValdidLogin('tester01','GteteqbQQgSr88SwNExUQv2ydb7xuf8c','Welcome')
        billFuncs.performValdidBill('Bills','456')
        // dasbordFuncs.preformLogout('Login')

    })
   it("Test case 5", () => {

        cy.visit("http://localhost:3000")
        loginFuncs.cechLoginPageTitle()
        loginFuncs.performValdidLogin('tester01','GteteqbQQgSr88SwNExUQv2ydb7xuf8c','Welcome')
        ReservFuncs.performValdidReserv('Reservations','2021-06-15','2021-06-20','Jonas Hellman (#1)',
        'Floor 1, Room 101','ID: 1','Reservations')
        //dasbordFuncs.preformLogout('Login')

    })
})