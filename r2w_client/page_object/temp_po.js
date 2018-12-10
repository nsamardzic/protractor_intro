




// *******************************************************
// ***                                                 ***
// **                                                   **

// Select Country Dropdown -New Account Creation
this.countrySelectMenufff = function() {
};


// **                                                   **
// ***                                                 ***
// *******************************************************



// element(by.css('blue ng-valid md-sempraDefaultTheme-theme ng-dirty ng-valid-parse ng-touched ng-empty'))
//     .all(by.css('[ng-model="vm.orderForm.top"]'))
//     .click();
// r2w_tools.sleepSpeed_10(); // Sleep for a while



    // r2w_home.radioBuyVouchers(); // Click on Login button
    // r2w_tools.sleepSpeed_12(); // Sleep for a while
    //
    // r2w_home.radioBuyTokens(); // Click on Login button
    // r2w_tools.sleepSpeed_12(); // Sleep for a while







    // r2w_home.okBuyTokens(); // Click on Login button
    // r2w_home.tokenPackageNext(); // Click on Login button
    // r2w_home.tokenPackagePrevious(); // Click on Login button
    // r2w_home.tokenPackageNext(); // Click on Login button
    // r2w_home.tokenPackageNext(); // Click on Login button
    // r2w_home.tokenAcceptTerms(); // Click on Login button

    // r2w_home.buyTokens(); // Click on Login button



beforeEach(function () {
    browser.clearMockModules();
    browser.manage().deleteAllCookies();
    browser.ignoreSynchronization = false;
    browser.manage().window().maximize();
    pageModule = new PagePO();
});

this.changeCurrentClient = function() {
    var profile = $('[id="hdr-profile-wrapper"]');
    var changeClient = element(by.buttonText('Change Client'));
    browser.actions().mouseMove(profile).perform();
    changeClient.click();
    return browser.actions().mouseDown().perform();
};


this.changeCurrentClient = function() {
    var profile = $('[id="hdr-profile-wrapper"]');
    var changeClient = element(by.buttonText('Change Client'));
    browser.actions().mouseMove(profile).perform();
    changeClient.click();
    return browser.actions().mouseDown().perform();
};



// // Select Language Dropdown - New Account Creation
this.buyTokensButton = function() {
  element(by.css('[ui-sref="app.buyTokens"]')).element(by.css('a[href*="#/buyTokens"]')).click();
  browser.driver.sleep(1000);
  element(by.css('a[href*="#/buyTokens"]')).click();
  browser.driver.sleep(1000);
  // var elems = element.all(by.repeater('(key, value) in vm.register.languages'));


  console.log('==> LANGUAGE Selected');
  };

IFRAME
// driver.switchTo().frame(element(by.css('wpwl-control wpwl-control-iframe wpwl-control-cardNumber'))).sendKeys('5454545454545454');
// numb.sendKeys('5454545454545454');
// driver.switchTo().frame(driver.findElement(protractor.By.cssselector('css-selector')));

// var driver = browser.driver;
// var loc = by.tagName('iframe');
// var el = driver.findElement(loc);
// browser.switchTo().frame(el);
//
// driver.findElement(by.tagName('body')).sendKeys('my test string');
//
// browser.switchTo().defaultContent();
// browser.waitForAngular();
// element(by.css('.wpwl-wrapper wpwl-wrapper-cardNumber')).all(by.css('[pseudo="-webkit-input-placeholder"]')).sendKeys('5454545454545454');
// element(by.css('[placeholder="Card number"]')).sendKeys('5454545454545454');
// element(by.css('.wpwl-wrapper wpwl-wrapper-cardNumber')).all(by.css('[placeholder="Card number"]')).sendKeys('5454545454545454');
// element(by.css('[data-behavior="iframe-form"]')).all(by.css('[placeholder="Card number"]')).sendKeys('5454545454545454');
// Production placeholder="Card number" data-behavior="iframe-form"   pseudo="-webkit-input-placeholder"





RADIO button
  // element.all(by.css('[aria-label="Pay with a new card"]')).then(function(elements) {
  //
  // });

  // var elem = element(by.css('[aria-label="Pay with a new card"]'));
  // browser.actions().mouseMove(elem).click();

  // element(by.css('[aria-label="Pay with a new card"]:nth-child(1)')).click();
  // browser.driver.sleep(1000);

  // element(by.css('[aria-label="Pay with a new card"]')).click();

  // var elem = element(by.css('[aria-checked="false"]')).all(by.css('[aria-label="Pay with a new card"]')).get(1);
  // var elem = element(by.css('[aria-label="Pay with a new card"]'));
  // browser.actions().mouseMove(elem).click();

  // element(by.css('[aria-checked="false"]'))
  //     .all(by.css('[aria-label="Pay with a new card"]'))
  //     .click();
  // element(by.tagName('md-radio-button')).all(by.css('[aria-label="Pay with a new card"]')).click();
  // element(by.css('[aria-label="Pay with a new card"]')).click();
  // element(by.css('#radio_104')).click();
  // element(by.css('md-radio-button')).all(by.css('[value="buytokens"]')).click();
  // element(by.id('radio_49')).all(by.tagName('md-radio-button')).get(0).click();
  // element(by.tagName('md-radio-button')).all(by.id('radio_49')).get(0).click();
  // element(by.tagName('md-radio-button')).all(by.id('radio_49')).get(1).click();
  // element(by.model('vm.selection')).all(by.id('radio_49')).click();

  // element(by.tagName('md-radio-button'))
  //     .all(by.cssContainingText('[value="addNewCard"]'))
  //     .click();

  // var profile = element(by.tagName('md-radio-button'));
  // var changeClient = element(by.id('radio_49'));
  // browser.actions().mouseMove(profile).perform();
  // changeClient.click();

  // var profile = $('[id="radio_9"]');
  // var changeClient = element(by.buttonText('Change Client'));
  // browser.actions().mouseMove(profile).click().perform();
  // changeClient.click();
  // return browser.actions().mouseDown().perform();

  // browser.actions().mouseMove(element(radio_9))
  // .click().perform();
  // element(by.css('[ui-sref="app.buyTokens"]')).all(by.css('a[href*="#/buyTokens"]')).click();
  // element(by.css('radio_104')).all(by.css('.md-on')).click();








// element(by.css('a[href*="#/buyTokens"]')).click();

// element(by.css('.md-raised md-primary md-button md-sempraDefaultTheme-theme md-ink-ripple')).all(by.css(''a[href*="#/buyTokens"]'')).click();
// element(by.cssContainingText('.ng-binding ng-scope', 'Buy tokens')).click();
// element(by.deepCss('ng-binding ng-scope')).click();
// element(by.css('[ui-sref="app.buyTokens"]')).click();

// r2w_menu.loginLanguageSelectMenu();
// element(by.css('[href="#/forgotPassword"]')).click();
// element(by.model('vm.password.email')).sendKeys('wrong_username@gmail.com'); // Production
// element(by.buttonText('Reset')).click();

// expect(element(by.css('myLink')).getAttribute('href')).toEqual('http://myUrl.com');
// element(by.css('[ng-click="vm.closeMenu()"]')).getAttribute('href')).toEqual('#/periodicSummary');
// element(by.css('[ng-click="vm.closeMenu()"]')).getAttribute('href')).toEqual('#/periodicSummary');
// Selement(by.css('#/periodicSummary')).click();






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




  // this.loginError2 = function() {
  //   expect(element(by.show('vm.login.hasErrors')).toContain('There was an error during login. Email address is not valid'));
  // };

  //Logout Procedure
  // element(by.css('[ng-click="vm.doLogout($event)"]')).click();
  // element(by.css('[ng-click="dialog.hide()"]')).click();


  // this.loginErrorShort = function() {
  //   expect(by.model('minlength')).toContain("Your password must be at least 8 characters long");
  // };

  // this.loginErrorLong = function() {
  //   element(by.id('loginButton')).click();
  // };


















ACCOUNT Creation
    // element.all(by.repeater('app in userApps')).count().then(function(count) {
    //   console.log(count);
    // });

    // element.all(by.repeater('select_option_39')).count().then(function(count) {
    //   console.log(count);
    // });


    // element.all(by.repeater('RS')).click();





    // element.all(by.css('md-option')).each(function (eachElement, index) {
    //   eachElement.click(); // select the
    //   browser.waitForAngular(); // wait for the renderings to take effect
    //   element(by.css('select_option_39')).click(); // select the first md-option
    //   browser.waitForAngular(); // wait for the renderings to take effect
    //   browser.driver.sleep(1500); //sllep for a while
    // });






    // element(by.cssContainingText('value', 'RS')).click();

    // element(by.cssContainingText('id', 'select_option_39')).click();
    // browser.driver.sleep(1500); //sllep for a while

    // element(by.id('select_option_63')).click();
    // element(by.css('option[value=RS]')).click();
    // element(by.id('select_option_63')).$('[ng-binding="Serbia"]')).click();
    // element(by.css('[ng-binding="Serbia"]')).click();
    // element(by.cssContainingText('Serbia')).click();
    // element(by.binding('Serbia')).click();
    // browser.waitForAngular();
    // element(by.id('select_option_63')).click();
    // browser.driver.sleep(2500); //sllep for a while
