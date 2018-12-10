
// This test represents succesfull login scenario for
// allready existing account data

var r2w_login = require('../page_object/login_po.js');
var r2w_home = require('../page_object/home_po.js');
var r2w_tools = require('../page_object/tools_po.js');
var r2w_menu = require('../page_object/menu_po.js');
var r2w_finance = require('../page_object/finance_po.js');

describe('R2W login',function() {

  it('Unsuccesfull login to an account', function() {
    console.log("Unsuccesfull login to an account ==========>");
    r2w_login.geturl(); // Navigate to login page
    r2w_tools.sleepSpeed_10(); // Sleep for a while
    r2w_login.setWrongUsername(); // Enter user name
    r2w_tools.sleepSpeed_10(); // Sleep for a while
    r2w_login.setPassword(); // Enter correct User Password
    r2w_tools.sleepSpeed_10(); // Sleep for a while
    r2w_login.loginClick(); // Click on Login button
    r2w_tools.sleepSpeed_10(); // Sleep for a while

  });

  it('Logout user', function() {
    console.log("LogIn & Logout existing user ==========>");
    r2w_login.userLogin(); // Click on Login button
    r2w_tools.sleepSpeed_10(); // Sleep for a while
    // console.log('r2w_home.mainUrl');
    // expect(browser.baseUrl).toEqual('https://customer.ready2wash.net/#/home');
    // expect(browser.getCurrentUrl()).toEqual('https://customer.ready2wash.net/#/home');
    r2w_home.userLogout(); // Click on Login button
    r2w_tools.sleepSpeed_10(); // Sleep for a while
  });

  it('User Settings', function() {
    console.log("User Settings ==========>");
    r2w_login.userLogin(); // Click on Login button
    r2w_tools.sleepSpeed_14(); // Sleep for a while
    r2w_home.userSettings(); // Click on Login button
    r2w_tools.sleepSpeed_12(); // Sleep for a while

  });

  it('Account Settings Menu Navigation', function() {
    console.log("Account Settings Menu Navigation ==========>");
    r2w_login.userLogin(); // Click on Login button
    r2w_tools.sleepSpeed_14(); // Sleep for a while
    r2w_home.userAccount(); // Click on Login button
    r2w_tools.sleepSpeed_12(); // Sleep for a while
    r2w_menu.accountMenu_billingInfo(); // Click on Login button
    r2w_tools.sleepSpeed_12(); // Sleep for a while
    r2w_menu.accountMenu_changePassword();
    r2w_tools.sleepSpeed_12(); // Sleep for a while
    r2w_menu.accountMenu_accountSettings();
    r2w_tools.sleepSpeed_12(); // Sleep for a while
    r2w_home.closeAccountMenu();
    r2w_tools.sleepSpeed_12(); // Sleep for a while
    r2w_home.userLogout(); // Click on Login button
    r2w_tools.sleepSpeed_12(); // Sleep for a while

  });


  it('Account Settings', function() {
    console.log("Account Settings ==========>");
    r2w_login.userLogin(); // Click on Login button
    r2w_tools.sleepSpeed_12(); // Sleep for a while
    r2w_home.userAccount(); // Click on Login button
    r2w_tools.sleepSpeed_12(); // Sleep for a while
  });



  //  Main Menu ALL MENU ITEMS Navigation
  // ********************************************
  it('Main Menu Navigation', function() {
    console.log("Main Menu Navigation ==========>");
    r2w_tools.displaySize(); // Set Display Size
    r2w_login.userLogin(); // USER LOGIN
    r2w_tools.sleepSpeed_16(); // Sleep for a while

    r2w_home.menuMobile(); // Mobile Sendwich menu
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_home.menuHome(); // Click on Login button
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_home.menuMobile(); // Mobile Sendwich menu
    r2w_home.menuNews(); // NEWS menu
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_home.menuMobile(); // Mobile Sendwich menu
    r2w_home.menuBuyTokens(); // BUY TOKENS nemu
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_finance.cancelBuyTokens(); // Close BUY TOKENS modal
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_home.menuMobile(); // Mobile Sendwich menu
    r2w_home.menuTransaction(); // TRANSACTION menu
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_home.menuMobile(); // Mobile Sendwich menu
    r2w_home.menuCards(); // CARDS menu
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_home.menuMobile(); // Mobile Sendwich menu
    r2w_home.menuCampaigns(); // CAMPAIGNS menu
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_home.menuMobile(); // Mobile Sendwich menu
    r2w_home.userLogout(); // USER LOGOUT
    r2w_tools.sleepSpeed_12(); // Sleep for a while
  });



});
