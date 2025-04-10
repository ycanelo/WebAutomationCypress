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
    randomUsername: '',
    emptyMessageError:'Please enter a username and password.',
    invalidValuesMessageError:'An internal error has occurred and has been logged.'
  },
  reporter: 'cypress-mochawesome-reporter',
  });
