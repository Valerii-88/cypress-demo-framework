describe('auth DQ', () => {
    it('TK-1', () => {

        cy.log('Проверка получения токена')
        cy.request('POST', 'https://qpalettedoc-dev.qpalette.qrunsys.diasoft.ru/api/mdpauth/mdpauth/oauth/token', {
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
            })

            /** Будет валидно, когда поправят баг (issue на гитхабе https://github.com/cypress-io/cypress/issues/20461) */

        cy.log('Проверка если истёк пароль')
        cy.request('POST', 'https://qpalettedoc-dev.qpalette.qrunsys.diasoft.ru/api/mdpauth/mdpauth/oauth/token', {
            username: 't1',
            password: 'nQeuSv173ApONnd'
        })
            .should((response) => {
                expect(response.status).to.eq(401)
                expect(response).to.have.property('body').to.contain({
                    authErrorMessage: 'Password is expired',
                    authErrorCode: 106
                })
            })

        cy.log('Проверка смены пароля')
        cy.request('PUT', 'https://qpalettedoc-dev.qpalette.qrunsys.diasoft.ru/api/mdpusers/mdpusers/noauth/v1/password', {
            login:'dsa',
            password:'12345678',
            newPassword:'123456789'
        })
            .should((response) => {
                expect(response.status).to.eq(422)
                expect(response).to.have.property('body').to.contain({
                    authErrorMessage: 'Password has low complexity (too few char groups)',
                    authErrorCode: 106
                })
})
    })
})
