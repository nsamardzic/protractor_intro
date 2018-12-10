

var r2w_tools = require('./tools_po.js');
var r2w_menu = require('./menu_po.js');
var r2w_login = require('./login_po.js');
var r2w_home = require('./home_po.js');


var r2w_finance = function() {

  // Buy Tokens - Select Packages
  // ***************************************
  this.packageBasic = function() {
    element(by.css('[aria-label="Basic"]')).click();
  };
  this.packageAdvanced = function() {
    element(by.css('[aria-label="Advanced"]')).click();
  };
  this.packagePro = function() {
    element(by.css('[aria-label="Pro"]')).click();
  };
  this.packageUltimate = function() {
    element(by.css('[aria-label="Ultimate"]')).click();
  };



  // Buy Tokens - Redeem Voucher prompt
  // ***************************************
  this.okBuyTokens = function() {
    element(by.css('[ng-click="vm.hide()"]')).click();
    // r2w_tools.sleepSpeed_10(); // Sleep for a while
  };
  this.cancelBuyTokens = function() {
    element(by.css('[ng-click="vm.cancel()"]')).click();
    // r2w_tools.sleepSpeed_10(); // Sleep for a while
  };
  this.selectBuyTokens = function() {
    element(by.css('[aria-label="Buy tokens"]')).click();
    // r2w_tools.sleepSpeed_10(); // Sleep for a while
  };
  this.selectRedeemVoucher = function() {
    element(by.css('[aria-label="Redeem Voucher"]')).click();
    // r2w_tools.sleepSpeed_10(); // Sleep for a while
  };





  // Credit Card - HTML form
  // ***************************

  // Credit Card number input
  this.htmlCardNumber = function() {
    browser.switchTo().frame(0);  // browser switch To iframe(0)
    browser.driver.findElement(by.css('[placeholder="Card number"]')).sendKeys('5454545454545454');  // access elements in the iframe
    // browser.driver.findElement(by.css('[placeholder="Card number"]')).sendKeys('4711100000000000');  // access elements in the iframe
    // browser.driver.findElement(by.css('[placeholder="Card number"]')).sendKeys('4111111111111111');  // access elements in the iframe
    // browser.driver.findElement(by.css('[placeholder="Card number"]')).sendKeys('4200000000000000');  // access elements in the iframe
    browser.switchTo().defaultContent();  // then switch back to main window (exit iframe)
  };

  // Credit Card DATE input
  this.htmlCardDate = function() {
    browser.switchTo().frame(0);  // browser switch To iframe(0)
    browser.driver.findElement(by.css('[placeholder="MM / YY"]')).sendKeys('1221');  // access elements in the iframe
    browser.switchTo().defaultContent();  // then switch back to main window (exit iframe)
  };

  // Credit Card CVV input
  this.htmlCardCVV = function() {
    browser.switchTo().frame(0);  // browser switch To iframe(0)
    browser.driver.findElement(by.css('[placeholder="CVV"]')).sendKeys('123');  // access elements in the iframe
    browser.switchTo().defaultContent();  // then switch back to main window (exit iframe)
  };

  // Credit Card CARD HOLDER input
  this.htmlCardHolder = function() {
    browser.switchTo().frame(0);  // browser switch To iframe(0)
    browser.driver.findElement(by.css('[placeholder="Card holder"]')).sendKeys('Milan');  // access elements in the iframe
    browser.switchTo().defaultContent();  // then switch back to main window (exit iframe)
  };

  // SAVE Credit Card Checkbox
  this.htmlCardSaveCheckbox = function() {
    browser.switchTo().frame(0);  // browser switch To iframe(0)
    browser.driver.findElement(by.css('[name="createRegistration"]')).click();  // access elements in the iframe
    browser.switchTo().defaultContent();  // then switch back to main window (exit iframe)
  };

  // Credit Card Form SUBMIT button
  this.htmlCardSubmitButton = function() {
    browser.switchTo().frame(0);  // browser switch To iframe(0)
    browser.driver.findElement(by.css('[type="submit"]')).click();  // access elements in the iframe
    browser.switchTo().defaultContent();  // then switch back to main window (exit iframe)
  };

  // Credit Card Result Modal close
  this.htmlCardResultModalClose = function() {
    element(by.css('[ng-click="vm.hide()"]')).click();
  };






  // Buy Tokens - Select Token Package
  // ***************************************
  this.tokenPackageNext = function() {
    element(by.css('[ng-click="vm.step.next()"]')).click();
    // r2w_tools.sleepSpeed_10(); // Sleep for a while
  };
  this.tokenPackagePrevious = function() {
    element(by.css('[ng-click="vm.step.previous()"]')).click();
    // r2w_tools.sleepSpeed_10(); // Sleep for a while
  };
  this.tokenAcceptTerms = function() {
    element(by.css('[ng-model="vm.orderForm.top"]')).click();
    // r2w_tools.sleepSpeed_10(); // Sleep for a while
  };
  this.tokenNewCardRadio = function() {
    element(by.tagName('md-radio-button:nth-child(1)')).click();
  };




  // Buy Tokens - Initial prompt for selecting
  // Buy Yokens or Redeem Vouchers
  // ***************************************
  this.radioBuyTokens = function() {
    element(by.css('[value="buytokens"]'))
        .all(by.id('radio_49'))
        .click();
    // element(by.css('[ui-sref="app.buyTokens"]')).all(by.css('a[href*="#/buyTokens"]')).click();
    // element(by.css('radio_104')).all(by.css('.md-on')).click();
    r2w_tools.sleepSpeed_10(); // Sleep for a while
  };

  this.radioBuyVouchers = function() {
    element(by.css('[value="redeem"]'))
        .all(by.id('radio_50'))
        .click();
    // element(by.css('md-radio-button', '[value="redeem"]')).click();
    // element(by.css('[ui-sref="app.buyTokens"]')).all(by.css('a[href*="#/buyTokens"]')).click();
    r2w_tools.sleepSpeed_10(); // Sleep for a while
  };




    // Buy Tokens - Terms of payment modal
    // ***************************************
    this.termsOfPaymentModal = function() {
      element(by.css('[ng-click="vm.showTermsOfPayment()"]')).click();
  	};

    this.termsOfPaymentClose = function() {
      element(by.css('[ng-click="vm.cancel()"]')).click();
    };






};  // r2w_home MAIN function end

module.exports = new r2w_finance();
