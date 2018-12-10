

//click the element via javascript:
var loginButton = element(by.css('.login-form .login-button'));
browser.executeScript("arguments[0].click();", loginButton);


// Below code might help you -
var elementToClick = $('#gotest');
browser.wait(protractor.ExpectedConditions.elementToBeClickable(elementToClick), 10000)
.then ( function () {
    elementToClick.click();
});



element.all(by.css('ra-card-menu-button')).then(function(ele){
  var open=ele[0];
  open.click();
})



















// Password
var loginButton = element(by.css('.md-raised.login-button'));
var userName = element(by.model('credentials.username'));
var password = element(by.model('credentials.password'));

this.username = function(sendUserName) {
    expect(userName.isDisplayed()).toBeTruthy();
    userName.clear().then(function(){
        userName.sendKeys(sendUserName).then(function(){
            expect(password.isDisplayed()).toBeTruthy();
        });
    });
};

this.password = function(password) {
    expect(password.isDisplayed()).toBeTruthy();
    password.clear().then(function(){
        password.sendKeys(password).then(function(){
            browser.wait(EC.elementToBeClickable(loginButton), 10000);
        });
    });
};

this.clickloginbutton = function() {
  expect(loginButton.isDisplayed()).toBeTruthy();
  loginButton.click().then(function(){
    expect('something').not.toBeNull();
  });
}
