var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

var steps = function() {
    this.setDefaultTimeout(60000);
    
    this.When(/^I go to '(.+)'$/, function (url) {
        browser.ignoreSynchronization = true;
        return browser.get(url)
        .then(function () {
            return browser.driver.manage().window().maximize();
        });
    });
    
    this.When(/^I click on SignIn button$/, function () {
        var signIn = element(by.css('a[href="/login"]'));
        return signIn.click();
    });
    
    this.When(/^I enter my username as '(.+)'$/, function (text) {
        return element(by.id('login_field')).sendKeys(text);
    });
    
    this.When(/^I enter my password as '(.+)'$/, function (text) {
        return element(by.id('password')).sendKeys(text);
    });
    
    this.When(/^I click Login$/, function () {
        return element(by.css('input[value="Sign in"]')).click();
    });
    
    this.When(/^I click Profile button$/, function () {
        return element.all(by.css('a[href="/sarthakmehta10"]')).get(0).click();
    });
    
    this.Then(/^user should be signed in as '(.+)'$/, function (username) {
        var signedAs = element(by.css('strong[class="css-truncate-target"]'));
        return expect(signedAs.getText()).to.eventually.equal(username);
    });
};

module.exports = steps;
