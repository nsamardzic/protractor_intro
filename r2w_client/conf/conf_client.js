

// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'firefox'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../tests_client/*spec.js'],



  //seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 30000,

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    isVerbose: true,  // If true, display spec names.
    showColors: true,  // If true, print colors to the terminal.
    includeStackTrace: true,  // If true, include stack traces in failures.
    defaultTimeoutInterval: 100000,  // Default time to wait in ms before a test fails.

  },  // jasmineNodeOpts end




};
