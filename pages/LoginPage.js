module.exports = function () {
    var objRepo = require('../resources/objectRepository.json');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();

    var userNameTextbox = objLocator.findLocator(objRepo.loginPage.userName);
    var passwordTextbox = objLocator.findLocator(objRepo.loginPage.password);
    var loginButton = objLocator.findLocator(objRepo.loginPage.loginButton);
    var loginPanel = objLocator.findLocator(objRepo.loginPage.loginPanel);
    var invalidLoginMessage = objLocator.findLocator(objRepo.loginPage.invalidLoginMessage);

    this.openUrl = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path);
        return this;
    };

    this.isPageLoaded = function () {
        waitActions.waitForElementIsDisplayed(loginPanel);
        return this;
    };

    this.enterUsername  = function( userName ) {
        waitActions.waitForElementIsDisplayed(userNameTextbox);
        inputBoxActions.type(userNameTextbox, userName);
    }

    this.enterPassword = function( password ) {
        waitActions.waitForElementIsDisplayed(passwordTextbox);
        inputBoxActions.type(passwordTextbox, password);
    }

    this.clickLoginButton = function () {
        waitActions.waitForElementIsDisplayed(loginButton);
        buttonActions.click();
    }
};