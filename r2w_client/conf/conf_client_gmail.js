// First batch for GMAIL
var path = require('path');
var fs = require('fs');
var HtmlReporter = require('protractor-html-screenshot-reporter');
var Imap = require('imap'),
inspect = require('util').inspect;
var MailParser = require("mailparser").MailParser;
var MailListener = require("mail-listener2");
// First batch for GMAIL -- END



// Second batch for GMAIL
getLastEmail = function() {
    var deferred = protractor.promise.defer();
    console.log("Waiting for an email...");

    mailListener.on("mail", function(mail){
        deferred.fulfill(mail);
    });
    return deferred.promise;
  };
// Second batch for GMAIL -- END



// Third batch for GMAIL
  onPrepare: function() {
    // here goes your email connection configuration
    var mailListener = new MailListener({
        username: "wolkabout.testing@gmail.com",
        password: "klikeri123",
        host: "imap.gmail.com",
        port: 993, // imap port
        tls: true,
        tlsOptions: { rejectUnauthorized: false },
        mailbox: "INBOX", // mailbox to monitor
        // searchFilter: ["UNSEEN", "FLAGGED"], // the search filter being used after an IDLE notification has been retrieved
        // markSeen: true, // all fetched email willbe marked as seen and not fetched next time
        // fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`,
        // mailParserOptions: {streamAttachments: true}, // options to be passed to mailParser lib.
        // attachments: true, // download attachments as they are encountered to the project directory
        // attachmentOptions: { directory: "attachments/" } // specify a download directory for attachments
        });

    mailListener.start();

    mailListener.on("server:connected", function(){
      console.log("imapConnected");
    });

    mailListener.on("server:disconnected", function(){
      console.log("imapDisconnected");
    });

    mailListener.on("mail", function(){
      console.log("GO IT!");
    });

    mailListener.on("mail", function(mail, seqno, attributes){
    // do something with mail object including attachments
      console.log("emailParsed", mail);
      // mail processing code goes here
    });

    global.mailListener = mailListener;

  },  // Third batch for GMAIL -- END





// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'firefox'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../tests_client/*spec.js'],



  //seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 30000,



  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    // If true, display spec names.
    isVerbose: true,

    // If true, print colors to the terminal.
    showColors: true,

    // If true, include stack traces in failures.
    includeStackTrace: true,

    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 9999999,


    onComplete: function () {
      mailListener.stop();
    },

  }, //jasmineNodeOpts close

};  // exports.config close
