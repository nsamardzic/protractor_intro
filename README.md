## Protractor Sandbox


### R2W Client project

- Basic Automation for the [Ready2Wash](https://customer.ready2wash.net) website.
R2W website is written in angular.

- Automation is done in [Protractor test framework](https://www.protractortest.org/#/).

Main goal of this sandbox/workshop is to learn the basic skills of automation in this framework, with emphasis on following:  

- Proractor Setup
- Configuring Test Suites
- Page objects
- Locators
- Wireframing the project
- Optimize for maintenance
- Actions
- Finding Multiple Elements
- Control browser
- Check visibility
- Send keystrokes
- Position and size
- Expect
- Assert

## Setup

Use [npm](https://www.npmjs.com/get-npm) to install Protractor globally with:
```
npm install -g protractor
```

This will install two command line tools, `protractor` and `webdriver-manager`. <br>
Try running `protractor --version` to make sure it's working.

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:
```
webdriver-manager update
```

Now start up a server with:

```
webdriver-manager start
```

This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. Leave this server running throughout the tutorial. You can see information about the status of the server at `http://localhost:4444/wd/hub`.


There are 2 files that are configured to run protractor test, depending to your host OS:
1. r2w_client_run.bat - for windows env
2. r2w_client_run.sh - for linux env