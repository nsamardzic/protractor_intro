
// This test represents succesfull login scenario for
// allready existing account data

var r2w_login = require('../page_object/login_po.js');
var r2w_home = require('../page_object/home_po.js');
var r2w_tools = require('../page_object/tools_po.js');
var r2w_menu = require('../page_object/menu_po.js');
var r2w_finance = require('../page_object/finance_po.js');

describe('password',function() {

  it('Add Credit Card', function() {
    console.log("Add Credit Card  ==========>");
    r2w_tools.displaySize_1600_900();

    r2w_login.userLogin(); // Click on Login button
    r2w_tools.sleepSpeed_18(); // Sleep for a while

    r2w_home.menuBuyTokens(); // Click on Login button
    r2w_tools.sleepSpeed_14(); // Sleep for a while

    // r2w_finance.selectRedeemVoucher();
    // r2w_tools.sleepSpeed_12(); // Sleep for a while

    // r2w_finance.selectBuyTokens();
    // r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_finance.okBuyTokens(); // Click on Login button
    r2w_tools.sleepSpeed_14(); // Sleep for a while

    r2w_finance.tokenPackageNext(); // Click on Login button
    r2w_tools.sleepSpeed_14(); // Sleep for a while

    r2w_finance.tokenPackagePrevious(); // Click on Login button
    r2w_tools.sleepSpeed_14(); // Sleep for a while

    r2w_finance.packageAdvanced();
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_finance.packagePro();
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_finance.packageUltimate();
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_finance.packageBasic();
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_finance.tokenPackageNext(); // Click on Login button
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_finance.tokenPackageNext(); // Click on Login button
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_finance.termsOfPaymentModal(); // Click on Login button
    r2w_tools.sleepSpeed_14(); // Sleep for a while

    r2w_finance.termsOfPaymentClose(); // Click on Login button
    r2w_tools.sleepSpeed_14(); // Sleep for a while

    r2w_finance.tokenAcceptTerms(); // Click on Login button
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_finance.tokenNewCardRadio(); // Click on Login button
    r2w_tools.sleepSpeed_14(); // Sleep for a while

    r2w_finance.tokenPackageNext(); // Click on Login button
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_finance.okBuyTokens(); // Click on Login button
    r2w_tools.sleepSpeed_18(); // Sleep for a while


    // HTML form served
    r2w_finance.htmlCardNumber(); // Click on Login button
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_finance.htmlCardDate(); // Click on Login button
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_finance.htmlCardCVV(); // Click on Login button
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_finance.htmlCardHolder(); // Click on Login button
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_finance.htmlCardSaveCheckbox(); // Click on Login button
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_finance.htmlCardSaveCheckbox(); // Click on Login button
    r2w_tools.sleepSpeed_12(); // Sleep for a while

    r2w_finance.htmlCardSubmitButton(); // Click on Login button
    r2w_tools.sleepSpeed_18(); // Sleep for a while

    r2w_finance.htmlCardResultModalClose(); // Click on Login button
    r2w_tools.sleepSpeed_16(); // Sleep for a while

    r2w_home.userLogout(); // Click on Login button
    r2w_tools.sleepSpeed_14(); // Sleep for a while
  });








});
