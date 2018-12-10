
var r2w_login = require('./login_po.js');
var r2w_home = require('./home_po.js');
var r2w_tools = require('./tools_po.js');
var r2w_finance = require('./finance_po.js');


var r2w_menu = function() {
	// Select Country Dropdown -New Account Creation
    this.countrySelectMenu = function() {
    element(by.model('vm.register.selectedCountry')).click();
    browser.driver.sleep(1000);
    var elems = element.all(by.repeater('(key, value) in vm.register.countries'));
    browser.driver.sleep(500);
    element(by.css('[value="RS"]')).click();
    browser.driver.sleep(1000);
    console.log('==> COUNTRY Selected');
  };



 // Select Language Dropdown -Login screen
   this.loginLanguage = function() {
     element(by.model('vm.login.selectedLanguageId')).click();
     browser.driver.sleep(1000); // Sleep for a while
     var elems = element.all(by.repeater('lang in vm.login.languages'));
     element(by.css('[value="en"]')).click();
     browser.driver.sleep(1000); // Sleep for a while
     console.log('==> COUNTRY Selected');
     // r2w_tools.sleepSpeed_12(); // Sleep for a while
	 };


  // Select Language Dropdown - New Account Creation
  this.languageSelectMenu = function() {
    element(by.model('vm.register.selectedLanguage')).click();
    browser.driver.sleep(1000);
    var elems = element.all(by.repeater('(key, value) in vm.register.languages'));
    browser.driver.sleep(1000);
    element(by.css('[value="hr"]')).click();
    console.log('==> LANGUAGE Selected');
	};


  // Account Settings - Account Settings Menu
  this.accountMenu_accountSettings = function() {
    element(by.css('md-tab-item:nth-child(1)')).click();
    browser.driver.sleep(1000);
    console.log('==> ACCOUNT SETTINGS selected');
	};

  // Buy Tokens - Credit Cards - Account Settings Menu
  this.cardButton = function() {
    var link =  element(by.css('[ui-sref="app.buyTokens"]'));
    browser.driver.sleep(1000);
    link.click();
    browser.driver.sleep(1000);
    console.log('==> ACCOUNT SETTINGS selected');
    // element(by.css('[ui-sref="app.buyTokens"]')).$('a[href*="#/buyTokens"]')).click();
	};


  // Change Password - Account Settings Menu
  this.accountMenu_changePassword = function() {
    element(by.css('md-tab-item:nth-child(2)')).click();
    console.log('==> CHANGE PASSWORD selected');
	};


  // Billing Info - Account Settings Menu
  this.accountMenu_billingInfo = function() {
    element(by.css('md-tab-item:nth-child(3)')).click();
    console.log('==> BILLING INFO selected');
	};



};  // r2w_menu MAIN end

module.exports = new r2w_menu();
