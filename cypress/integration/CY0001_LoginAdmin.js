//<reference types="Cypress"/>

describe('Cenário 1', function () {

    beforeEach(function () {
        cy.visit('https://site-hotel-teste-php-teste.000webhostapp.com/admin/index.php')
    }
    )

    it('Verifica o título da página', function () {
        cy.title().should('be.equal', 'Login')
    })


    it('Checar a URL', function () {
        cy.url().should('be.equal', 'https://site-hotel-teste-php-teste.000webhostapp.com/admin/index.php')
    }
    )

    it('Fazer Login', function () {
        cy.get('body > div.container > div > div > div > form > div:nth-child(1) > input').type('teste@teste.com')
        cy.get('body > div.container > div > div > div > form > div:nth-child(2) > input').type('123456')
        cy.get('body > div.container > div > div > div > form > button').click()
    }
    )

})
