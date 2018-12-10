
// This file represents Page Object file for Login Page of R2W Application

var r2w_login = function() {

  this.userLogin = function() {
    browser.get('https://customer.ready2wash.net/#/login'); // R2W Staging
    element(by.model('vm.login.email')).sendKeys('mojmail021@gmail.com');
    element(by.model('vm.login.password')).sendKeys('Test1234');
    element(by.id('loginButton')).click();
  };

  this.userLogout = function() {
    element(by.css('[ng-click="vm.doLogout($event)"]')).click();
    element(by.css('[ng-click="dialog.hide()"]')).click();
  };

  this.menuNavigation = function() {
    element(by.css('[href="#/dailyFinances"]')).click();
    browser.driver.sleep(1000); //sllep for a while
    element(by.css('[href="#/facilities"]')).click();
    browser.driver.sleep(1000); //sllep for a while
    element(by.css('[href="#/alarms"]')).click();
    browser.driver.sleep(1000); //sllep for a while
    element(by.css('[href="#/reports"]')).click();
    browser.driver.sleep(1000); //sllep for a while
    element(by.css('[href="#/userGroups"]')).click();
    browser.driver.sleep(1000); //sllep for a while
    element(by.css('[href="#/loyalty"]')).click();
    browser.driver.sleep(1000); //sllep for a while
    element(by.css('[href="#/periodicSummary"]')).click();
    browser.driver.sleep(1000); //sllep for a while
    element(by.css('[href="#/periodicSummary"]')).click();
    browser.driver.sleep(1000); //sllep for a while
    element(by.css('[href="#/vouchers"]')).click();
    browser.driver.sleep(1000); //sllep for a while


  };

  this.myAccount = function() {
    // element(by.css('[ng-click="vm.openMenu($mdOpenMenu, $event)"]')).click();
    // element(by.css('[ng-click="vm.goToMessagesPage()"]')).click();
    // element.all(by.css('[ng-click="vm.openMenu($mdOpenMenu, $event)"]')).getText(().toEqual('profile box').click();

    // notifications box
    // element(by.css('[ng-click="vm.showAdvanced()"]')).click();
    // element(by.css('[ng-click="dialog.hide()"]')).click();
    // element(by.css("button[ng-click*=notifications box]"));
    // element(by.buttonLabel("notifications box")).click();
    // element(by.buttonText("notifications box"))
    // element(by.css('[ng-click="vm.openMenu($mdOpenMenu)"]')).click();
  };

  this.geturl = function() {
    browser.get('https://staging.ready2wash.net/#/login'); // R2W Staging
  };

  this.setUsername = function() {
    element(by.model('vm.login.email')).sendKeys('mojmail021@gmail.com');
  };

  this.setWrongUsername = function() {
    element(by.model('vm.login.email')).sendKeys('wrong_username@gmail.com');
  };

  this.setPassword = function() {
    element(by.model('vm.login.password')).sendKeys('Test1234');
  };

  this.loginClick = function() {
    element(by.id('loginButton')).click();
  };



};

module.exports = new r2w_login();
