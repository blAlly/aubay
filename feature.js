Feature: Making a spotaneous application

  I want to do a spotaneous application at Aubay webiste TestCafe repository by Google search

  Scenario: Making a spotaneous application
    Given I am open Aubay's spontaneous application page
    When I fill the form
    And I am makr "Personal data processing" checkbox
    And I mark the privacy policy checkbox
	And press submit button
	Then I should see application confirmation message 