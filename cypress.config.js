// cypress.config.js

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        if (["chrome", "edge"].includes(browser.name)) {
          if (browser.isHeadless) {
            launchOptions.args.push("--no-sandbox");
            launchOptions.args.push("--disable-gl-drawing-for-tests");
            launchOptions.args.push("--disable-gpu");
          }
          launchOptions.args.push("--js-flags=--max-old-space-size=3500");
        }
        return launchOptions;
      });
    },
  },
});
