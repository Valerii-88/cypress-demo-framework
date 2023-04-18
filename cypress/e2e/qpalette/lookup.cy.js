describe('check lookup spec', () => {

  it('лукап', function() {

    cy.visit('http://qpalettedocui.qpalette.qrunsys.diasoft.ru')

    cy.get('.q-tabs__burger-icon > .pi').click();
    cy.get('.q-form-field__input-wrapper > #search').type('лукап');
    cy.get('[style="--q-sidebar-level:2;"] > :nth-child(2) > :nth-child(1) > :nth-child(1) > .q-sidebar-inner__group').click();
    cy.get('[style="--q-sidebar-level:2;"] > :nth-child(2) > :nth-child(1) > :nth-child(1) > ul.ng-star-inserted > app-sidebar-inner > .q-sidebar-inner__item > .p-element > .q-sidebar-inner__text-wrapper > span').click();
    cy.get('.active > .q-tabs__link > .q-tabs__link-text').should('be.visible');
      cy.get('.p-autocomplete > .ng-tns-c39-1').click();
      cy.get('.p-autocomplete > .ng-tns-c39-1').type('Иван{enter}');
    cy.get('.p-ripple > .ng-tns-c39-1').should('have.text', 'Иван Иванов');
    cy.get('#pr_id_2_list > .p-ripple').click();
    cy.get('.p-autocomplete > .ng-tns-c39-1').should('have.value', 'Иван Иванов');
    cy.get('[doctitle="Пример лукапа"] > #view > .p-grid > .p-sm-12 > q-lookup > .container > .q-lookup__float-label > .q-lookup__actions > .p-element > q-icon.ng-star-inserted > .pi').click();
    cy.get('#pr_id_33-table > .p-datatable-tbody > .p-element > :nth-child(1)').should('have.text', ' 82089979 ');
    cy.get('#pr_id_33-table > .p-datatable-tbody > .p-element > :nth-child(2)').should('have.text', 'Иван Иванов');
    cy.get('.ng-tns-c41-2 > #mycustomcontainer > cmp-customers-widget > .h-no-margin > .frame-grid > .table-filter-container > .q-flex > [label="ФИО"] > .q-filter__wrapper > .q-filter__label > .q-filter__close').click();
    cy.get('.ng-tns-c41-2 > #mycustomcontainer > cmp-customers-widget > .h-no-margin > .frame-grid > .table-filter-container > .p-mb-3 > .p-inline-message > .p-inline-message-text').should('have.text', 'Найдено больше двух клиентов, выберите одного');
    cy.get('.p-dialog-footer > .p-element').click();

    // primary key
    cy.get('.p-flex-column > .p-mt-2 > .p-mr-2').should('have.text', 'Set id = "1" ');
    cy.get('.p-flex-column > .p-mt-2 > :nth-child(2)').should('have.text', 'Set id = "2" ');
    cy.get('.p-flex-column > .p-mt-2 > .p-mr-2').click();
    cy.get('.p-autocomplete > .ng-tns-c39-39').should('have.value', 'Иван Иванов');
    cy.get('.p-flex-column > .p-mt-2 > :nth-child(2)').click();
    cy.get('.p-autocomplete > .ng-tns-c39-39').should('have.value', 'Василий Васильев');

    // предустановка фильтров
    cy.get(':nth-child(8) > :nth-child(3) > .p-grid > .p-sm-12 > q-lookup > .container > .q-lookup__float-label > .q-lookup__actions > .p-element').click();
    cy.get('#pr_id_35-table > .p-datatable-tbody > :nth-child(1) > :nth-child(2)').should('have.text', 'Иван Иванов');
    cy.get('#pr_id_35-table > .p-datatable-tbody > :nth-child(2) > :nth-child(2)').should('have.text', 'Василий Васильев');
    cy.get('#pr_id_35-table > .p-datatable-tbody > :nth-child(3) > :nth-child(2)').should('have.text', 'Демид Демидов');
    cy.get('#pr_id_35-table > .p-datatable-tbody > :nth-child(4) > :nth-child(2)').should('have.text', 'Севостьян Севостьянов');
    cy.get('.p-dialog-footer > .p-element').click();
    cy.get(':nth-child(3) > .p-mt-2 > :nth-child(1)').click();
    cy.get(':nth-child(8) > :nth-child(3) > .p-grid > .p-sm-12 > q-lookup > .container > .q-lookup__float-label > .q-lookup__actions > .p-element > q-icon.ng-star-inserted > .pi').click();
    cy.get('.ng-tns-c41-44 > #mycustomcontainer > cmp-customers-widget > .h-no-margin > .frame-grid > .table-filter-container > .q-flex > [label="Номер счёта"] > .q-filter__wrapper > .q-filter__label > .p-inputtext').should('have.value', '95');
    cy.get('.p-dialog-footer > .p-element').click();
  });
})
