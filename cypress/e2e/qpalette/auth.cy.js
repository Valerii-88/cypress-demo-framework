describe('auth DQ', () => {
  it('TK-11, 12, 13, 14', () => {
    cy.visit('http://qpalettedocui.qpalette.qrunsys.diasoft.ru')
/*
    cy.log('ТК-11. Авторизация')
    cy.get('#username').type('dsa', {timeout: 2000}).should('have.value', 'dsa')
    cy.get('#password').type('12345678', {timeout: 2000}).should('have.value', '12345678')
    cy.get('body > app-root > app-login-form > section > div > form > div.q-login__actions > button').click()
    cy.wait(1000)

    cy.log('Проверка получения токена')
    cy.request('POST', 'http://qpalettedoc-dev.qpalette.qrunsys.diasoft.ru/api/mdpauth/mdpauth/oauth/token', {
      username: 'dsa',
      password: '12345678'
    })
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response).to.have.property('body').to.contain({
            token_type: 'bearer',
            expires_in: 999
          })
          expect(response.body).property('access_token').to.be.a('string')
          expect(response.body).property('refresh_token').to.be.a('string')
          expect(response).to.have.property('duration')
        })
*/
    cy.log('Переход в сайдбар с настройками')
    cy.get('body > app-root > div > app-tabs > header > div > div > button:nth-child(2)', {timeout: 2000}).click()
    cy.wait(1000)
    cy.get('label[for="en"]').click()
    cy.get('.q-side-dialog__header').should('have.text', 'Settings')
    cy.get('label[for="ru"]').click()
    cy.get('.q-side-dialog__header').should('have.text', 'Настройки')
    cy.get('#pr_id_2_label').should('have.text', 'Светлая').click()
    cy.get('li[aria-label="Тёмная"]').click()
    cy.get('#pr_id_2_label').should('have.text', 'Тёмная')
    cy.get('#p-tabpanel-1-label', {timeout: 2000}).click()
    cy.get('#p-tabpanel-1 > div:nth-child(2) > button', {timeout: 2000}).click()

    cy.log('ТК-12 Проверка кейса при которой новый пароль совпадает со старым')
    cy.get('#oldpassword').type('12345678', {timeout: 2000}).should('have.value', '12345678')
    cy.get('#newPassword').type('12345678', {timeout: 2000}).should('have.value', '12345678')
    cy.get('#confirmationPassword').type('12345678', {timeout: 2000}).should('have.value', '12345678')
    cy.get('#p-tabpanel-1 > div:nth-child(2) > app-change-password-form > form > button').click()
    cy.get('#newPassword-help', {timeout: 3000}).should('be.visible').should('have.text', 'Пароль слишком простой (содержит мало групп символов)')

    cy.log('ТК - 13 Проверка кейса при котором новый пароль содержит недопустимые символы')
    cy.get('#oldpassword').clear().should('have.value', '')
    cy.get('#newPassword').clear().should('have.value', '')
    cy.get('#confirmationPassword').clear().should('have.value', '')
    cy.get('#oldpassword').type('12345678', {timeout: 2000}).should('have.value', '12345678')
    cy.get('#newPassword').type('12345678!', {timeout: 2000}).should('have.value', '12345678!')
    cy.get('#confirmationPassword').type('12345678!', {timeout: 2000}).should('have.value', '12345678!')
    cy.get('#p-tabpanel-1 > div:nth-child(2) > app-change-password-form > form > button').click()
    cy.get('#newPassword-help', {timeout: 3000}).should('be.visible').should('have.text', 'Пароль содержит недопустимый символ: \'!\'')

    cy.log('ТК - 14 Проверка кейса при котором пароли не совпадают')
    cy.get('#oldpassword').clear().should('have.value', '')
    cy.get('#newPassword').clear().should('have.value', '')
    cy.get('#confirmationPassword').clear().should('have.value', '')
    cy.get('#oldpassword').type('12345678', {timeout: 2000}).should('have.value', '12345678')
    cy.get('#newPassword').type('12345678qWe', {timeout: 2000}).should('have.value', '12345678qWe')
    cy.get('#confirmationPassword').type('12345678qWeRTY', {timeout: 2000}).should('have.value', '12345678qWeRTY')
    cy.get('#p-tabpanel-1 > div:nth-child(2) > app-change-password-form > form > button').click()
    cy.get('#confirmationPassword-help', {timeout: 3000}).should('be.visible').should('have.text', 'Пароли не совпадают')

    cy.log('Выход из сессии')
    cy.get('body > app-root > div > app-tabs > header > button.q-tabs__burger.ng-star-inserted').click()
    cy.wait(1000)
    cy.get('body > app-root > div > app-sidebar > div > div > div.q-sidebar__footer > button:nth-child(2)', {timeout: 3000}).click()
    cy.get('body > app-root > div > app-sidebar > div > div > div.q-sidebar__footer > q-menu > menu > li > button', {timeout: 3000}).should('be.visible').click()
  })
})
