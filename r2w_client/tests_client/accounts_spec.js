
// This test represents succesfull login scenario for
// allready existing account data

var r2w_login = require('../page_object/login_po.js');
var r2w_home = require('../page_object/home_po.js');
var r2w_tools = require('../page_object/tools_po.js');
var r2w_menu = require('../page_object/menu_po.js');
var r2w_finance = require('../page_object/finance_po.js');

describe('password',function() {

  it('Reset Password', function() {
    console.log("RESET PASSWODR  ==========>");
    r2w_login.geturl();  // Get login web Address
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_menu.loginLanguage();
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_login.resetPasswordURL();
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_login.resetPasswordEmail();
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_login.resetPasswordButton();
    r2w_tools.sleepSpeed_12(); // Sleep for a while
  });


  it('New User Account Creation', function() {
    console.log("New User Account Creation ==========>");
    r2w_login.geturl();  // Get login web Address
    r2w_tools.sleepSpeed_10(); // Sleep for a while

    r2w_login.registerAccountURL();
    r2w_tools.sleepSpeed_10(); // Sleep for a while

    r2w_login.registerAccountEmail();
    r2w_tools.sleepSpeed_10(); // Sleep for a while

    r2w_login.registerAccountPassword();
    r2w_tools.sleepSpeed_10(); // Sleep for a while

    r2w_login.registerAccountConfirmPassword();
    r2w_tools.sleepSpeed_10(); // Sleep for a while

    r2w_login.registerAccountFirstName();
    r2w_tools.sleepSpeed_10(); // Sleep for a while

    r2w_login.registerAccountLastName();
    r2w_tools.sleepSpeed_10(); // Sleep for a while

    r2w_menu.countrySelectMenu(); // Select Serbia from dropdown menu
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_menu.languageSelectMenu(); // Select Serbia from dropdown menu
    r2w_tools.sleepSpeed_07(); // Sleep for a while

    r2w_login.registerAccountAcceptTerms();
    r2w_tools.sleepSpeed_15(); // Sleep for a while

    // r2w_login.registerAccountRegisterButton();
    // r2w_tools.sleepSpeed_14(); // Sleep for a while

  });









});
