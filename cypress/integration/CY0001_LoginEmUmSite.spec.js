//<reference types="Cypress"/>

describe('Cenário 1', function () {

    beforeEach(function () {
        cy.visit('https://fragaebitelloteste.azurewebsites.net/admin/login-admin')
    }
    )

    it('Verifica o título da página', function () {
        cy.title().should('be.equal', 'Área do Parceiro')
    })

    it('Preenche dados de Login e Submeter', function () {
        cy.get('input[id=email]').type('testeienh@gmail.com')
        cy.get('input[id=password]').type('Teste@Ienh')
        cy.get('button').should('contains.text', 'ENTRAR').click()

    }
    )

    it('Checar a URL', function () {
        cy.url().should('include', 'admin/painel')
    }
    )

})
