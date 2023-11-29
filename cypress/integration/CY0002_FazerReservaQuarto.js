//<reference types="Cypress"/>

describe('Cenário 2', function () {

    beforeEach(function () {
        cy.visit('https://site-hotel-teste-php-teste.000webhostapp.com/index.php')
    }
    )

    it('Verifica o título da página', function () {
        cy.title().should('be.equal', 'Hotel Kirsch - Página Inicial')
    })

    it('Seleciona Quarto', function () {
        //Necessário adicionar quarto casa não tenha
        cy.get('#btn_verMais').click()
        cy.get('#btn_fazerReserva').click()
        cy.get('#nome').type('Teste')
        cy.get('#email').type('Teste@teste.com')
        cy.get('#qt_pessoas').type('1')
        cy.get('#data_checkin').type('2023-11-29')
        cy.get('#data_checkout').type('2023-11-30')
        cy.get('#btn_enviarReserva').click()
    }
    )
})
