//<reference types="Cypress"/>

describe('Cenário 2', function () {

    beforeEach(function () {
        cy.visit('https://www.mercadolivre.com.br/')
    }
    )

    it('Verifica o título da página', function () {
        cy.title().should('be.equal', 'Mercado Livre Brasil - Frete Grátis no mesmo dia')
    })

    it('Preenche dados de Busca & Valida URL', function () {
        cy.get('#cb1-edit').type('Vinhos Secos')
        cy.get('body > header > div > div.nav-area.nav-top-area.nav-center-area > form > button > div').click()
        cy.url().should('be.equal', 'https://lista.mercadolivre.com.br/vinhos-secos#D[A:Vinhos%20Secos]')
    }
    )
})
