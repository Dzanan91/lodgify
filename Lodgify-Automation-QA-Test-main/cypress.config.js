const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: 'cypress/fixtures',
  videosFolder: 'cypress/reports/videos',
  video: true,
  videoUploadOnPasses: false,
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 30000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  env: {
    contactUrl: 'http://localhost:8080/contact.html',
    pricingUrl: "http://localhost:8080/pricing.html"
  },

  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    experimentalSessionAndOrigin: false,
    supportFile:'cypress/support/index.js',
    specPattern: 'cypress/integration/**/*.cy.js'
  }
})
