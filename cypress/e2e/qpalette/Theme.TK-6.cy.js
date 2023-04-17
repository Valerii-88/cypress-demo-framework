      it('Test_theme', () => {
        cy.visit("https://qpalette-dev.diasoft.ru/interface/qpalettedocui/documentation-1/releases")
        cy.wait(3000)
        cy.get('.q-tabs__actions-item > :nth-child(2)').click()
        cy.get(':nth-child(4) > .p-inputwrapper > .p-dropdown > .p-dropdown-trigger').click()
        cy.get('#pr_id_3_list > :nth-child(2) > .p-ripple').click()
      })