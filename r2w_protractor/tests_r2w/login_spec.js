
// This test represents succesfull login scenario for
// allready existing account data

var r2w_login = require('../page_object_r2w/login_page.js');

describe('R2W login',function() {

  it('Logout user', function() {
    r2w_login.userLogin(); // Click on Login button
    browser.driver.sleep(1000); // Sleep for a while
    // r2w_login.myAccount(); // Click on Login button
    // browser.driver.sleep(4000); // Sleep for a while
    r2w_login.userLogout(); // Click on Login button
    browser.driver.sleep(1000); // Sleep for a while
  });

  it('Menu Navigation', function() {
    r2w_login.userLogin(); // Click on Login button
    browser.driver.sleep(1000); // Sleep for a while
    r2w_login.menuNavigation(); // Click on Login button
    browser.driver.sleep(4000); // Sleep for a while
    r2w_login.userLogout(); // Click on Login button
    browser.driver.sleep(1000); // Sleep for a while
  });

  xit('Unsuccesfull login to an account', function() {
    r2w_login.geturl(); // Navigate to login page
    browser.driver.sleep(1000); //sllep for a while
    r2w_login.setWrongUsername(); // Enter user name
    browser.driver.sleep(1000); // Sleep for a while
    r2w_login.setPassword(); // Enter correct User Password
    browser.driver.sleep(1000);  // Sleep for a while
    r2w_login.loginClick(); // Click on Login button
    browser.driver.sleep(2000);  // Sleep for a while
  });

  xit('Succesfull login to an existing account', function() {
    r2w_login.geturl(); // Navigate to login page
    browser.driver.sleep(1000); //sllep for a while
    r2w_login.setUsername(); // Enter user name
    browser.driver.sleep(1000); // Sleep for a while
    r2w_login.setPassword(); // Enter correct User Password
    browser.driver.sleep(1000);  // Sleep for a while
    r2w_login.loginClick(); // Click on Login button
    browser.driver.sleep(1000); // Sleep for a while
  });

  xit('Logout user', function() {
    r2w_login.logOut(); // Click on Login button
    browser.driver.sleep(1000); // Sleep for a while

  });

});
