Feature: Demonstrate waitForExist issue

  Scenario: Spaghetti monster situation
    Given I am on the Google homepage
    When I add two numbers
    Then I should see a div
      But not the flying spaghetti monster
