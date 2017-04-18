Feature: Running Cucumber with Protractor
    As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

    Scenario: Protractor and Cucumber Test
    When I go to 'https://github.com'
    When I click on SignIn button
    When I enter my username as 'sarthakmehta10'
    When I enter my password as 's@rth@k123'
    When I click Login
    When I click Profile button
    Then user should be signed in as 'sarthakmehta10'