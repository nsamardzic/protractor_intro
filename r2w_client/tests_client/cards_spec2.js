
// This test represents succesfull login scenario for
// allready existing account data

var r2w_login = require('../page_object/login_po.js');
var r2w_home = require('../page_object/home_po.js');
var r2w_tools = require('../page_object/tools_po.js');
var r2w_menu = require('../page_object/menu_po.js');
var r2w_finance = require('../page_object/finance_po.js');

describe('password',function() {

  xit('Add Credit Card', function() {
    console.log("RESET PASSWODR  ==========>");
    r2w_tools.displaySize();
    r2w_login.userLogin(); // Click on Login button
    r2w_tools.sleepSpeed_03(); // Sleep for a while
    r2w_home.menuMobile(); // Click on Login button
    r2w_home.menuCards(); // Click on Login button
    r2w_tools.sleepSpeed_03(); // Sleep for a while
    // element(by.binding('Buy tokens')).click();
    // element(by.binding('[ui-sref="Buy tokens"]')).click();

      // var link = element(by.css('[href="#/buyTokens"]'));
      // link.click();



    // element.all(by.css('[ui-sref="app.buyTokens"]')).then(function(){
    //   var open = element(by.css('[href="#/buyTokens"]'));
    //   open.click();
    // })

    // element(by.css('[href="#/buyTokens"]'))
    //     .all(by.tagName('option'))
    //     .get(120)
    //     .click();


    // r2w_menu.cardButton();
    // element(by.css('[ui-sref="app.buyTokens"]')).click();
    // element(by.css('[ui-sref="app.buyTokens"]')).all(by.css('a[href*="#/buyTokens"]')).click();
    // element(by.css('a[href*="#/buyTokens"]')).click();

    // element(by.css('[ui-sref="app.buyTokens"]')).$('a[href*="#/buyTokens"]')).click();
    browser.driver.sleep(1300);
    // element(by.css('a[href*="#/buyTokens"]')).click();
    // console.log('==> LANGUAGE Selected');
    // element(by.css('[href="#/news"]')).click();

  });


  xit('Add Credit Card2', function() {
    console.log("RESET PASSWODR  ==========>");
    r2w_tools.displaySize();
    r2w_login.userLogin(); // Click on Login button
    // r2w_tools.sleepSpeed_10(); // Sleep for a while
    r2w_home.menuMobile(); // Click on Login button
    r2w_home.menuCards(); // Click on Login button
    // r2w_tools.sleepSpeed_10(); // Sleep for a while

    element.all(by.css('[ui-sref="app.buyTokens"]')).then(function(){
      var open = $$('md-raised md-primary md-button md-sempraDefaultTheme-theme md-ink-ripple').get(0);
      // open.click();
    })



    // element(by.buttonText('Buy tokens')).click();
    // element(by.css('md-tab-item:nth-child(1)')).click();
    r2w_tools.sleepSpeed_10(); // Sleep for a while

  });






});
