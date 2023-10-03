//<reference types="Cypress"/>

describe('Cenário 3', function () {

    it('Navega para o Site', function () {
        cy.visit('https://www.amazon.com.br/')
    }
    )

    it('Verifica o título da página', function () {
        cy.title().should('be.equal', 'Amazon.com.br | Tudo pra você, de A a Z.')
    })

    it('Preenche dados e realiza busca', function () {
        const text = 'Prato Para Sushi Retangular 11,5x19,5 Preto em Polipropileno Linha Tropical Vem'
        cy.get('#twotabsearchtextbox').click().type(text, { delay: 0 })
        cy.get('#nav-search-submit-button').click()
    }
    )

    it('Seleciona Item da Busca', function () {
        cy.get('#search > div.s-desktop-width-max.s-desktop-content.s-wide-grid-style-t1.s-opposite-dir.s-wide-grid-style.sg-row > div.sg-col-20-of-24.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span.rush-component.s-latency-cf-section > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(6)').click()
    }
    )

    it('Adiciona ao Carrinho', function () {
        cy.get('#add-to-cart-button').click()
    }
    )

    it('Alterar a Quantidade do Produto', function () {
        cy.get('#sc-item-28da8c66-cde0-4680-84ca-cce5e591c94f > div.a-section.a-spacing-none.ewc-wider-compact-view-only.ewc-item-actions > div.a-row.ewc-qty-and-action-items > div.a-column.a-span8.a-text-center.a-spacing-mini.a-spacing-top-base.quantity-dropdown > span > span > span.a-declarative > span > span > select').select('2')
    }
    )
    
})
