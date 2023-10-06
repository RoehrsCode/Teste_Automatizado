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

    it('Valida Carinho, Altera Quantidade e Valida Preço', function () {
        const text = 'Bolsa de Palha Vime Casual Beach'
        cy.get('#section-header > div > div.container.h-left-container > div > div.mini-cart-holder > div > div.navigation-drawer-background > div > div > div > div.side-cart-content > div.side-cart-products-list > div:nth-child(2) > div > div > div.product-cart-box__text--holder-info > div.product-cart-box__text--product-name').contains(text)
        cy.get('#section-header > div > div.container.h-left-container > div > div.mini-cart-holder > div > div.navigation-drawer-background > div > div > div > div.side-cart-content > div.side-cart-products-list > div:nth-child(2) > div > div > div.product-cart-box__holder-actions > div.quantity-selector.relative > span.quantity-btn.-more > i').click()
        cy.get('#section-header > div > div.container.h-left-container > div > div.mini-cart-holder > div > div.navigation-drawer-background > div > div > div > div.side-cart-content > div.side-cart-button-container > div.side-cart-total-value.mb-22 > div > span.side-cart-subtotal-after-discounts').contains('R$ 599,98')
    }
    )

    it('Remove do Carinho e Valida', function () {
        const text = 'Seu carrinho está vazio'
        cy.get('#section-header > div > div.container.h-left-container > div > div.mini-cart-holder > div > div.navigation-drawer-background > div > div > div > div.side-cart-content > div.side-cart-products-list > div:nth-child(2) > div > div > div.product-cart-box__holder-actions > div.product-cart-box__text--remove').click()
        cy.get('#section-header > div > div.container.h-left-container > div > div.mini-cart-holder > div > div.navigation-drawer-background > div > div > div > div.empty-cart > div.-title').contains(text)
    }
    )
})
