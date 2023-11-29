//<reference types="Cypress"/>

describe('Cenário 4', function () {

    beforeEach(function () {
        cy.visit('https://site-hotel-teste-php-teste.000webhostapp.com/admin/index.php')
    }
    )

    it('Editar Quarto', function () {
        cy.get('body > div.container > div > div > div > form > div:nth-child(1) > input').type('teste@teste.com')
        cy.get('body > div.container > div > div > div > form > div:nth-child(2) > input').type('123456')
        cy.get('body > div.container > div > div > div > form > button').click()
        cy.get('#menu_editarQ').click()
        cy.get('body > div.container > ul > li:nth-child(1) > div > a.btn.btn-primary.btn-sm').click()
        cy.get('#nome_do_quarto').type('Luxo Quarto')
        cy.get('body > div.container > form > button').click()
    }
    )
})
