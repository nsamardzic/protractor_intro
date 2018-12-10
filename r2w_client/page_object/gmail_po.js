// This file represents Page Object file for Login Page of R2W Application

var r2w_gmail = function() {

	this.displaySize_03 = function() {
    var width = 1024;
    var height = 867;
    browser.driver.manage().window().setSize(width, height);
	};

};

module.exports = new r2w_gmail();
