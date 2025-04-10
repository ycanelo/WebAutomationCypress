const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wcidoo',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env: {
    randomUsername: ''
  },
  reporter: 'cypress-mochawesome-reporter',
  });
