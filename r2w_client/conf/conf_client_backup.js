

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
  showColors: true,
  defaultTimeoutInterval: 100000,
  isVerbose: true,
  includeStackTrace: true
},

};
