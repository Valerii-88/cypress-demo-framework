      it('Tabs', () => {
        //TK-1
        cy.visit("https://qpalette-dev.diasoft.ru/interface/qpalettedocui/documentation-1/releases")
        cy.get('[style="--q-sidebar-level:1;"] > :nth-child(2) > :nth-child(1) > :nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .q-sidebar-inner__text-wrapper').click()
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .q-sidebar-inner__link > .q-sidebar-inner__text-wrapper').click()
        cy.url().should('include', '/development/web-component-application/startup')
        cy.get('.active > .q-tabs__link > .q-tabs__link-text').should('contain','С чего начать')
        //TK-2
        cy.wait(1000)
        cy.get('[style="--q-sidebar-level:1;"] > :nth-child(2) > :nth-child(1) > :nth-child(1) > .q-sidebar-inner__link > .q-sidebar-inner__text-wrapper').click()
        cy.url().should('include', 'interface/qpalettedocui/documentation-1/releases')
        cy.get('.active > .q-tabs__link > .q-tabs__link-text').should('contain','Релизы')
        //TK-3
        cy.go('back')
        cy.url().should('include', '/development/web-component-application/startup')
        cy.get('.active > .q-tabs__link > .q-tabs__link-text').should('contain','С чего начать')
        //TK-4
        cy.visit("https://qpalette-dev.diasoft.ru/interface/qpalettedocui/documentation-2/development/web-component-application/startup")
        cy.get('.active > .q-tabs__link > .q-tabs__link-text').should('contain','С чего начать')
    })