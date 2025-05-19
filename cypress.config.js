const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
    mochaFile: 'reports/junit/results-[hash].xml',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // you can keep this empty for now
    },
    baseUrl: 'https://automationexercise.com',
  },
})

