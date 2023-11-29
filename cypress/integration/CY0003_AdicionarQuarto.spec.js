//<reference types="Cypress"/>

describe('Cenário 3', function () {

    beforeEach(function () {
        cy.visit('https://site-hotel-teste-php-teste.000webhostapp.com/admin/index.php')
    }
    )

    it('Add Quarto', function () {
        cy.get('body > div.container > div > div > div > form > div:nth-child(1) > input').type('teste@teste.com')
        cy.get('body > div.container > div > div > div > form > div:nth-child(2) > input').type('123456')
        cy.get('body > div.container > div > div > div > form > button').click()
        cy.get('#menu_adicionarQ').click()
        cy.get('#nome_do_quarto').type('Nomezinho')
        cy.get('#descricao').type('HUSAHUASHUASUH')
        cy.get('#preco_por_noite').type('140')
        cy.get('#capacidade').type('2')
        cy.get('#disponibilidade').select('Disponível')
        cy.get('body > div.container > form > button').click()

    }
    )
})
