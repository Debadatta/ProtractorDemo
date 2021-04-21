describe('Login Functionality: Login with valid credentials', function() {

    var testData = require('../resources/testData.json');

    var loginPage = new pages.LoginPage();
    var dashBoardPage = new pages.DashBoardPage();

    it('User navigates to the website OrangeHRM', function() {
        loginPage.openUrl("https://opensource-demo.orangehrmlive.com/index.php/");
        loginPage.isPageLoaded();
        expect(browser.getTitle()).toEqual('OrangeHRM');
    });

    it('User enter valid Username and Password', function() {
        loginPage.enterUsername(testData.login.username);
        loginPage.enterPassword(testData.login.password);        
    });

    it('User clicks the LOGIN button', function() {
        loginPage.clickLoginButton();
        expect(browser.getTitle()).toEqual('OrangeHRM');
    });

    it('User should be able to redirect to Dashboard page', function() {
        dashBoardPage.isPageLoaded();
        dashBoardPage.verifyDashboardHeader();

        expect(dashBoardPage.headerTitle().toEqual('Dashboard'));
    });

  });