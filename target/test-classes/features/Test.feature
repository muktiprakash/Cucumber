#Author: your.email@your.domain.com
#Keywords Summary :
@t1
Feature: Login.
This feature is going to test the Login functionality.
Its involve below scenario
Invalid Scenario.

Scenario: Valid Credential
Given I am able to accesss the Magento page
And Am a registed user on Magento
When I am update the valid username
And I am update the valid passwpord
And I am able to click signIn btn
Then I should access/view the dashboard
@s1
Scenario Outline: Parameterize Valid Credentials
Given I am able to accesss the Magento page
And Am a registed user on Magento
When I am update the valid username as "<username>"
When I am update the valid password as "<password>"
When I am able to click signIn btn
Then I should access/view the dashboard
Examples:
|username|password|
|balajidinakaran1@gmail.com|Welcome@1|
|balajidinakaran1@gmail.com|Welcome@1|


#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
#@tag
#
  #I want to use this template for my feature file
##@tag1
  #Scenario: Title of your scenario
    #Given I want to write a step with precondition
    #And some other precondition
    #When I complete action
    #And some other action
    #And yet another action
    #Then I validate the outcomes
    #And check more outcomes
  #@tag2
  #Scenario Outline: Title of your scenario outline
    #Given I want to write a step with <name>
    #When I check for the <value> in step
    #Then I verify the <status> in step
    #Examples: 
      #| name  | value | status  |
      #| name1 |     5 | success |
      #| name2 |     7 | Fail    |
      #
  #
      
