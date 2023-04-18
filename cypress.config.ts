const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: 'QPalette',
  screenshotOnRunFailure: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/report',
    charts: true,
    reportPageTitle: 'QPalette Report',
    embeddedScreenshots: true,
  },
  env: {
    db: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'cypress_test',
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    experimentalStudio: true,
    failOnStatusCode: false
  },
})
