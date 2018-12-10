
var r2w_home = require('./home_po.js');
var r2w_tools = require('./tools_po.js');
var r2w_menu = require('./menu_po.js');
var r2w_finance = require('./finance_po.js');

var r2w_login = function() {

  // Login Page URL
  this.geturl = function() {
    browser.get('https://customer.ready2wash.net/' + '#/login'); // R2W Production
    // browser.get('https://customerstaging.ready2wash.net/' + '#/login'); // R2W Staging
    console.log('==> Navigate to Login page');
	};

  // Login Modal Username (EMAIL)
  this.setUsername = function() {
    element(by.model('vm.login.username')).sendKeys('wolkabout.testing@gmail.com');  // Production
    // element(by.model('vm.login.username')).sendKeys('execom.qa+demo@gmail.com');  // Staging
    console.log('==> Enter USERNAME');
	};

  // Login Modal WRONG Username (EMAIL)
  this.setWrongUsername = function() {
    element(by.model('vm.login.username')).sendKeys('wrong_username@gmail.com');
    console.log('==> Enter incorrect USERNAME');
	};

  // Login Modal User PASSWORD
  this.setPassword = function() {
    element(by.model('vm.login.password')).sendKeys('Test1234'); // Production
    // element(by.model('vm.login.password')).sendKeys('Test1234'); // Staging
    console.log('==> Enter User PASSWORD');
	};

  // Login Modal LOGIN BUTTON click
  this.loginClick = function() {
    element(by.id('loginButton')).click();
    console.log('==> User Login Button Clicked');
    console.log('==> Login Sucessful');
	};


  // User Logout Complete Function
  // ***************************************
  this.userLogin = function() {
    this.geturl(); // Get login web Address
    r2w_tools.sleepSpeed_07(); // Sleep for a while
    this.setUsername(); // Enter login username
    r2w_tools.sleepSpeed_07(); // Sleep for a while
    this.setPassword(); // Enter login password
    r2w_tools.sleepSpeed_07(); // Sleep for a while
    this.loginClick();
    r2w_tools.sleepSpeed_07(); // Sleep for a while
    // browser.getLocationAbsUrl('https://customer.ready2wash.net/#/home');
    // expect(browser.getCurrentUrl()).toEqual(mainUrl + "#/home");
	};



  // Create NEW USER ACCOUNT
  // ***************************************
  this.registerAccountURL = function() {
    element(by.css('[href="#/register"]')).click();
  };

  this.registerAccountEmail = function() {
    element(by.model('vm.register.email')).sendKeys('wolkabout.testing+create@gmail.com');
  };

  this.registerAccountPassword = function() {
    element(by.model('vm.register.password')).sendKeys('Test1234');
  };

  this.registerAccountConfirmPassword = function() {
    element(by.model('vm.register.confirmPassword')).sendKeys('Test1234');
  };

  this.registerAccountFirstName = function() {
    element(by.model('vm.register.firstName')).sendKeys('Ime');
  };

  this.registerAccountLastName = function() {
    element(by.model('vm.register.lastName')).sendKeys('Prezime');
  };

  this.registerAccountAcceptTerms = function() {
    element(by.model('vm.register.acceptTermsAndconditions')).click();
  };

  this.registerAccountRegisterButton = function() {
    element(by.css('[ng-click="vm.createNewAccount()"]')).click();
  };



  // RESET user Password
  // ***************************************
  this.resetPasswordURL = function() {
    element(by.css('[href="#/forgotPassword"]')).click();
  };

  this.resetPasswordEmail = function() {
    element(by.model('vm.password.email')).sendKeys('wrong_username@gmail.com');
  };

  this.resetPasswordButton = function() {
    element(by.buttonText('Reset')).click();
  };










}; // r2w_login main function end

module.exports = new r2w_login();
