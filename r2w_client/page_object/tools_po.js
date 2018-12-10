
var r2w_login = require('./login_po.js');
var r2w_home = require('./home_po.js');
var r2w_menu = require('./menu_po.js');
var r2w_finance = require('./finance_po.js');

var r2w_tools = function() {

  this.sleepSpeed_01 = function() {browser.driver.sleep(100);};
  this.sleepSpeed_02 = function() {browser.driver.sleep(200);};
  this.sleepSpeed_03 = function() {browser.driver.sleep(300);};
  this.sleepSpeed_04 = function() {browser.driver.sleep(400);};
  this.sleepSpeed_05 = function() {browser.driver.sleep(500);};
  this.sleepSpeed_06 = function() {browser.driver.sleep(600);};
  this.sleepSpeed_07 = function() {browser.driver.sleep(700);};
  this.sleepSpeed_08 = function() {browser.driver.sleep(800);};
  this.sleepSpeed_09 = function() {browser.driver.sleep(900);};
  this.sleepSpeed_10 = function() {browser.driver.sleep(1000);};

  this.sleepSpeed_11 = function() {browser.driver.sleep(1250);};
  this.sleepSpeed_12 = function() {browser.driver.sleep(1500);};
  this.sleepSpeed_13 = function() {browser.driver.sleep(1750);};
  this.sleepSpeed_14 = function() {browser.driver.sleep(2000);};

  this.sleepSpeed_15 = function() {browser.driver.sleep(2500);};
  this.sleepSpeed_16 = function() {browser.driver.sleep(3000);};
  this.sleepSpeed_17 = function() {browser.driver.sleep(3500);};
  this.sleepSpeed_18 = function() {browser.driver.sleep(4000);};

  this.sleepSpeed_19 = function() {browser.driver.sleep(8000);};
  this.sleepSpeed_20 = function() {browser.driver.sleep(10000);};

  this.displaySize = function() {
    var width = 1024;
    var height = 867;
    browser.driver.manage().window().setSize(width, height);
  };

  this.displaySize_1400_860 = function() {
    var width = 1400;
    var height = 860;
    browser.driver.manage().window().setSize(width, height);
  };

  this.displaySize_1600_900 = function() {
    var width = 1600;
    var height = 900;
    browser.driver.manage().window().setSize(width, height);
  };

};

module.exports = new r2w_tools();
