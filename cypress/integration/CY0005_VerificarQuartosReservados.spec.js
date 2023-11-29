//<reference types="Cypress"/>

describe('Cenário 5', function () {

    beforeEach(function () {
        cy.visit('https://site-hotel-teste-php-teste.000webhostapp.com/admin/index.php')
    }
    )

    it('Verificar Quartos', function () {
        cy.get('body > div.container > div > div > div > form > div:nth-child(1) > input').type('teste@teste.com')
        cy.get('body > div.container > div > div > div > form > div:nth-child(2) > input').type('123456')
        cy.get('body > div.container > div > div > div > form > button').click()
        cy.get('#navbarNav > ul > li:nth-child(1) > a').click()
        cy.get('body > div:nth-child(3) > a').click()
        cy.get('body > div.container.mt-4 > table > tbody > tr:nth-child(1) > td:nth-child(1)').contains('LUXO')
    }
    )
})
