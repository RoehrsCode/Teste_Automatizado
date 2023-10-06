//<reference types="Cypress"/>

describe('Cenário 3', function () {

    it('Navega para o Site', function () {
        cy.visit('https://www.lushme.com.br')
    }
    )

    it('Preenche dados e realiza busca', function () {
        const text = 'Bolsa de Palha Vime Casual Beach'
        cy.get('#product-name').type(text, { delay: 1 })
        cy.get('#product-search > span').click()
    }
    )

    it('Seleciona o Produto', function () {
        cy.get('#app > section.category-content > div > div.flex-holder.container.flex > div.holder-results > div > div.products-list.flex > div:nth-child(1) > a > div.holder-image.relative-tags').click()
    }
    )

    it('Adiciona ao Carrinho', function () {
        cy.get('#app > section.main-product-content.container > div.main-product-holder.flex.main_product_content-1 > div.main-product-info > div > div.product-customizations > div > button').click()
    }
    )

    it('Finaliza Compra', function () {
        cy.get('#section-header > div > div.container.h-left-container > div > div.mini-cart-holder > div > div.navigation-drawer-background > div > div > div > div.side-cart-content > div.side-cart-button-container > button').contains('Finalizar compra').click()
        cy.url().should('be.equal', 'https://seguro.lushme.com.br/checkout?skipToCheckout=1')
    }
    )
})
