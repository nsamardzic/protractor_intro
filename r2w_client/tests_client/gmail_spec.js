
// This test represents succesfull login scenario for
// allready existing account data

// var r2w_login = require('../page_object/login_po.js');
// var r2w_home = require('../page_object/home_po.js');
// var r2w_tools = require('../page_object/tools_po.js');
// var r2w_menu = require('../page_object/menu_po.js');

describe('LiveSite Portal - Client book a new meeting', function() {

    var randomDay = Math.floor(30*Math.random() + 1);
    var randomDayLink = randomDay.toString();
    var EC = protractor.ExpectedConditions;

  xit('LiveSite - Home Page', function() {
       liveSiteHome();
    });


  xit('Client LiveSite Portal - Schedule new meeting > Services screen', function() {
    element(by.xpath("//div[@class='actions-row']//a[.='Schedule Now']")).click();
    browser.wait(EC.visibilityOf(element(by.css("div.service-info"))), 15000);
    expect (element(by.css("div.service-info")).isPresent()).toBe(true);
    });

  xit('Client LiveSite Portal - New Meeting - Multistaff selection screen', function() {
    element(by.css("div.service-info")).click();
    browser.wait(EC.visibilityOf(element(by.css("ul.staff"))), 15000);
    expect (element(by.css("ul.staff")).isPresent()).toBe(true);
   });

  xit('Client LiveSite Portal - New Meeting - Date picker', function() {
    element(by.css("ul.staff")).click();
    browser.wait(EC.visibilityOf(element(by.css(".slots"))), 15000);
    expect(element(by.css(".slots")).isPresent()).toBe(true);
  });

  xit('Client LiveSite Portal - New Meeting - Booking meeting', function() {
    element(by.linkText("Next")).click();
    browser.driver.sleep(5000);
    element(by.linkText(randomDayLink)).click();
    browser.wait(EC.visibilityOf(element(by.xpath("//ul[@class='column-2']/li[2]/a/div"))), 15000);
    element(by.xpath("//ul[@class='column-2']/li[2]/a/div")).click();
    browser.wait(EC.visibilityOf(element(by.linkText("Continue"))), 15000);
    element(by.linkText("Continue")).click();
    browser.wait(EC.visibilityOf(element(by.model("meeting[field.attribute_name]"))), 15000);
    expect(element(by.model("meeting[field.attribute_name]")).isPresent()).toBe(true);
 });

  xit('Client LiveSite Portal - New Meeting - Client Info', function() {
    element(by.id("client_phone")) .sendKeys("0556783242")
    element(by.name("email")).sendKeys("idanvcita@gmail.com");
    element(by.id("terms_of_service")).click();
    element(by.xpath("(//textarea[@id='agenda'])[2]")).sendKeys("hello again");
    element(by.linkText("Submit")).click();
    browser.wait(EC.visibilityOf(element(by.css("a.standard-button"))), 15000);
    expect (element(by.css("a.standard-button")).isPresent()).toBe(true);
  });

  xit('Client LiveSite Portal - New Meeting - Email has been sent to the business side', function() {
    browser.driver.controlFlow().await(getLastEmail()).then(function (email) {
      expect(email.subject).toContain("Appointment scheduled with");
    });
  });

  xit('Client LiveSite Portal - New Meeting - Appointmend has been scheduled', function() {
    element(by.linkText("Done")).click();
    waitPageToLoad();
    expect(element(by.model("email")).isPresent()).toBe(true);
  });

});
