(function () {

    // Helper functions
    global.wait = {
        until: {
            present: function (elementFinder, optionalTimeout) {
                browser.driver.wait(function () {
                    return elementFinder.isPresent().then(function (present) {
                        return present;
                    });
                }, optionalTimeout || 60000);
            }
        }
    };

    global.commons = {};
    global.commons.inputBoxActions = require('./commons/inputBoxActions.js');
    global.commons.buttonActions = require('./commons/buttonActions.js');
    global.commons.dropDownActions = require('./commons/dropDownActions.js');
    global.commons.waitActions = require('./commons/waitActions.js');
    global.commons.verifyActions = require('./commons/labelActions.js');

    global.utils = {};
    global.utils.objectLocator = require('./utils/objectLocator.js');
    
    global.pages = {};
    global.pages.loginPage = require('./pages/LoginPage.js');
    global.pages.DashBoardPage = require('./pages/DashBoardPage.js');

}());