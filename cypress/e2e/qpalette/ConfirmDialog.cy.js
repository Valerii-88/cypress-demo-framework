it('ConfirmDialog', function() {
  cy.visit('https://qpalette-dev.diasoft.ru/interface/qpalettedocui/documentation-8/development/prime-components/confirmdialog');
  cy.get('[icon="pi pi-check"] > .p-ripple').click();
  cy.get('.p-dialog-content').should('have.text', 'Are you sure that you want to proceed?');
  cy.get('.p-confirm-dialog-accept').click();
  cy.get('.p-message-wrapper').should('have.text', 'ConfirmedYou have accepted');
  cy.get('.p-message-wrapper > .p-ripple').click();
  cy.get('[icon="pi pi-check"] > .p-ripple').click();
  cy.get('.p-button-text').click();
  cy.get('.p-message-wrapper').should('have.text', 'RejectedYou have rejected');
  cy.get('.p-message-wrapper > .p-ripple').click();
  cy.get('[icon="pi pi-times"] > .p-ripple').click();
  cy.get('.p-dialog-content').should('have.text', 'Do you want to delete this record?');
  cy.get('.p-confirm-dialog-accept').click();
  cy.get('.p-message-wrapper').should('have.text', 'ConfirmedRecord deleted');
  cy.get('.p-message-wrapper').click();
  cy.get('.p-message-wrapper > .p-ripple').click();
  cy.get('[icon="pi pi-times"] > .p-ripple').click();
  cy.get('.p-button-text').click();
  cy.get('.p-message-wrapper').should('have.text', 'RejectedYou have rejected');
  cy.get('.p-message-wrapper > .p-ripple').click();
  cy.get('[icon="pi pi-arrow-right"] > .p-ripple').click();
  cy.get('.p-dialog-title').should('be.visible');
  cy.get('.p-confirm-dialog-accept').click();
  cy.get('.p-message-wrapper').should('have.text', 'ConfirmedRecord deleted');
  cy.get('.p-message-wrapper > .p-ripple').click();
  cy.get('[icon="pi pi-arrow-right"] > .p-ripple').click();
  cy.get('.p-button-outlined').click();
  cy.get('.p-message-wrapper').should('have.text', 'RejectedYou have rejected');
  cy.get('.p-message-wrapper > .p-ripple').click();
  cy.get('[icon="pi pi-arrow-left"] > .p-ripple').click();
  cy.get('.p-dialog-title').should('be.visible');
  cy.get('.p-confirm-dialog-accept').click();
  cy.get('.p-message-wrapper').should('have.text', 'ConfirmedRecord deleted');
  cy.get('.p-message-wrapper > .p-ripple').click();
  cy.get('[icon="pi pi-arrow-left"] > .p-ripple').click();
  cy.get('.p-button-outlined').click();
  cy.get('.p-message-wrapper').should('have.text', 'RejectedYou have rejected');
  cy.get('.p-message-wrapper > .p-ripple').click();
  cy.get('[label="TopLeft"] > .p-ripple').click();
  cy.get('.p-dialog-title').should('be.visible');
  cy.get('.p-confirm-dialog-accept').click();
  cy.get('.p-message-wrapper').should('have.text', 'ConfirmedRecord deleted');
  cy.get('.p-message-wrapper > .p-ripple').click();
  cy.get('[label="TopLeft"] > .p-ripple').click();
  cy.get('.p-button-outlined').click();
  cy.get('.p-message-wrapper').should('have.text', 'RejectedYou have rejected');
  cy.get('.p-message-wrapper > .p-ripple').click();
  cy.get('[label="Top"] > .p-ripple').click();
  cy.get('.p-dialog-title').should('be.visible');
  cy.get('.p-confirm-dialog-accept').click();
  cy.get('.p-message-wrapper').should('have.text', 'ConfirmedRecord deleted');
  cy.get('.p-message-wrapper > .p-ripple').click();
  cy.get('[label="Top"] > .p-ripple').click();
  cy.get('.p-button-outlined').click();
  cy.get('.p-message-wrapper').should('have.text', 'RejectedYou have rejected');
  cy.get('.p-message-wrapper > .p-ripple').click();
  cy.get('[label="TopRight"] > .p-ripple').click();
  cy.get('.p-dialog-title').should('be.visible');
  cy.get('.p-confirm-dialog-accept').click();
  cy.get('.p-message-wrapper').should('have.text', 'ConfirmedRecord deleted');
  cy.get('.p-message-wrapper > .p-ripple').click();
  cy.get('[label="TopRight"] > .p-ripple').click();
  cy.get('.p-button-outlined').click();
  cy.get('.p-message-wrapper').should('have.text', 'RejectedYou have rejected');
  cy.get('.p-message-wrapper > .p-ripple').click();
  cy.get('[label="BottomLeft"] > .p-ripple').click();
  cy.get('.p-dialog-title').should('be.visible');
  cy.get('.p-confirm-dialog-accept').click();
  cy.get('.p-message-wrapper').should('have.text', 'ConfirmedRecord deleted');
  cy.get('.p-message-wrapper > .p-ripple').click();
  cy.get('[label="BottomLeft"] > .p-ripple').click();
  cy.get('.p-button-outlined').click();
  cy.get('.p-message-wrapper').should('have.text', 'RejectedYou have rejected');
  cy.get('.p-message-wrapper > .p-ripple').click();
  cy.get('[label="Bottom"] > .p-ripple').click();
  cy.get('.p-dialog-title').should('be.visible');
  cy.get('.p-confirm-dialog-accept').click();
  cy.get('.p-message-wrapper').should('have.text', 'ConfirmedRecord deleted');
  cy.get('.p-message-wrapper > .p-ripple').click();
  cy.get('[label="Bottom"] > .p-ripple').click();
  cy.get('.p-button-outlined').click();
  cy.get('.p-message-wrapper').should('have.text', 'RejectedYou have rejected');
  cy.get('.p-message-wrapper > .p-ripple').click();
  cy.get('[label="BottomRight"] > .p-ripple').click();
  cy.get('.p-dialog-title').should('be.visible');
  cy.get('.p-confirm-dialog-accept').click();
  cy.get('.p-message-wrapper').should('have.text', 'ConfirmedRecord deleted');
  cy.get('.p-message-wrapper > .p-ripple').click();
  cy.get('#position').click();
  cy.get('[label="BottomRight"] > .p-ripple').click();
  cy.get('.p-button-outlined').click();
  cy.get('.p-message-wrapper').should('have.text', 'RejectedYou have rejected');
  cy.get('.p-message-wrapper > .p-ripple').click();
});