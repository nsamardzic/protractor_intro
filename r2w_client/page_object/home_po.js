

var r2w_tools = require('./tools_po.js');
var r2w_menu = require('./menu_po.js');
var r2w_login = require('./login_po.js');
var r2w_finance = require('./finance_po.js');

var r2w_home = function() {

  // Home Page - User Logout
  // ***************************************
  this.userLogout = function() {
    element(by.css('[ng-click="vm.openMenu($mdOpenMenu, $event)"]')).click();
    r2w_tools.sleepSpeed_07(); // Sleep for a while
    element(by.css('[ng-click="vm.doLogout()"]')).click();
    r2w_tools.sleepSpeed_07(); // Sleep for a while
    element(by.css('[ng-click="dialog.hide()"]')).click();
    r2w_tools.sleepSpeed_07(); // Sleep for a while
	};


  // Home Page - User Account management
  // ***************************************
  this.userAccount = function() {
    element(by.css('[ng-click="vm.openMenu($mdOpenMenu, $event)"]')).click();
    r2w_tools.sleepSpeed_07(); // Sleep for a while
    element(by.css('[ng-click="vm.showAdvanced()"]')).click();
    r2w_tools.sleepSpeed_07(); // Sleep for a while
	};


  // Home Page - User Settings management
  // ***************************************
  this.userSettings = function() {
    element(by.css('[ng-click="vm.openMenu($mdOpenMenu, $event)"]')).click();
    r2w_tools.sleepSpeed_07(); // Sleep for a while
    element(by.css('[ng-click="vm.showSettingsModal()"]')).click();
    r2w_tools.sleepSpeed_07(); // Sleep for a while
    // element(by.css('[ng-click="dialog.hide()"]')).click();
    // r2w_tools.sleepSpeed_07(); // Sleep for a while
	};




  // Home Page - User Account management
  // ***************************************
  this.menuMobile = function() {
    element(by.css('[ng-click="vm.openMobileMenu()"]')).click();
    // r2w_tools.sleepSpeed_10(); // Sleep for a while
	};



  // Main Menu - leftside main menu items
  // ***************************************
  this.menuHome = function() {
    element(by.css('[href="#/home"]')).click();
    // r2w_tools.sleepSpeed_10(); // Sleep for a while
	};

  this.menuNews = function() {
    element(by.css('[href="#/news"]')).click();
    // r2w_tools.sleepSpeed_10(); // Sleep for a while
	};

  this.menuBuyTokens = function() {
    element(by.css('[href="#/buyTokens"]')).click();
    // r2w_tools.sleepSpeed_07(); // Sleep for a while
	};

  this.menuTransaction = function() {
    element(by.css('[href="#/transactions"]')).click();
    // r2w_tools.sleepSpeed_10(); // Sleep for a while
	};

  this.menuCards = function() {
    element(by.css('[href="#/myCards"]')).click();
    // r2w_tools.sleepSpeed_10(); // Sleep for a while
	};

  this.menuCampaigns = function() {
    element(by.css('[href="#/myCampaigns"]')).click();
    // r2w_tools.sleepSpeed_10(); // Sleep for a while
	};

  this.closeAccountMenu = function() {
    element(by.css('[ng-click="vm.closeDialog()"]')).click();
	};





};  // r2w_home MAIN function end

module.exports = new r2w_home();
