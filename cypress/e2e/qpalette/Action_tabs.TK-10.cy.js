      it('Tabs', () => {
        cy.visit("https://qpalette-dev.diasoft.ru/interface/qpalettedocui/documentation-1/releases")
        cy.get('[style="--q-sidebar-level:1;"] > :nth-child(2) > :nth-child(1) > :nth-child(2) > .q-sidebar-inner__link > .q-sidebar-inner__text-wrapper > span').click()
        cy.get('[style="--q-sidebar-level:1;"] > :nth-child(2) > :nth-child(1) > :nth-child(4) > .q-sidebar-inner__link > .q-sidebar-inner__text-wrapper > span').click()
        cy.get('[style="--q-sidebar-level:1;"] > :nth-child(2) > :nth-child(1) > :nth-child(5) > .q-sidebar-inner__link > .q-sidebar-inner__text-wrapper > span').click()
        cy.get('[style="--q-sidebar-level:1;"] > :nth-child(2) > :nth-child(1) > :nth-child(6) > .q-sidebar-inner__link > .q-sidebar-inner__text-wrapper > span').click()
        cy.get('.active > .q-tabs__link > .q-tabs__link-text').rightclick()
        cy.get('.q-menu__list > :nth-child(4) > button > span').click()
    })