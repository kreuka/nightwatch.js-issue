Feature: Google Search
  Background: Background name
    Given I open the Rijksmuseum page
    And I dismiss the cookie dialog
    Then the title is "Rijksmuseum Amsterdam, home of the Dutch masters"

  @myTest @C0000002
  Scenario: Searching the Rijksmuseum
    Given I search "night watch"
    Then Body contains "Operation Night Watch"
