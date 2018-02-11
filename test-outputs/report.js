$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Test.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    }
  ],
  "line": 4,
  "name": "Login.",
  "description": "This feature is going to test the Login functionality.\r\nIts involve below scenario\r\nInvalid Scenario.",
  "id": "login.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@t1"
    }
  ]
});
formatter.scenario({
  "line": 9,
  "name": "Valid Credential",
  "description": "",
  "id": "login.;valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am able to accesss the Magento page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Am a registed user on Magento",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I am update the valid username",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I am update the valid passwpord",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am able to click signIn btn",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should access/view the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.i_am_able_to_accesss_the_Magento_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.am_a_registed_user_on_Magento()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefn.i_am_able_to_click_signIn_btn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_should_access_view_the_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Parameterize Valid Credentials",
  "description": "",
  "id": "login.;parameterize-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@s1"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am able to accesss the Magento page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Am a registed user on Magento",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I am update the valid username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I am update the valid password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I am able to click signIn btn",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I should access/view the dashboard",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login.;parameterize-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25,
      "id": "login.;parameterize-valid-credentials;;1"
    },
    {
      "cells": [
        "balajidinakaran1@gmail.com",
        "Welcome@1"
      ],
      "line": 26,
      "id": "login.;parameterize-valid-credentials;;2"
    },
    {
      "cells": [
        "balajidinakaran1@gmail.com",
        "Welcome@1"
      ],
      "line": 27,
      "id": "login.;parameterize-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Parameterize Valid Credentials",
  "description": "",
  "id": "login.;parameterize-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@t1"
    },
    {
      "line": 16,
      "name": "@s1"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am able to accesss the Magento page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Am a registed user on Magento",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I am update the valid username as \"balajidinakaran1@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I am update the valid password as \"Welcome@1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I am able to click signIn btn",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I should access/view the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.i_am_able_to_accesss_the_Magento_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.am_a_registed_user_on_Magento()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "balajidinakaran1@gmail.com",
      "offset": 35
    }
  ],
  "location": "StepDefn.i_am_update_the_valid_username_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome@1",
      "offset": 35
    }
  ],
  "location": "StepDefn.i_am_update_the_valid_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_am_able_to_click_signIn_btn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_should_access_view_the_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "Parameterize Valid Credentials",
  "description": "",
  "id": "login.;parameterize-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@t1"
    },
    {
      "line": 16,
      "name": "@s1"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am able to accesss the Magento page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Am a registed user on Magento",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I am update the valid username as \"balajidinakaran1@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I am update the valid password as \"Welcome@1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I am able to click signIn btn",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I should access/view the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.i_am_able_to_accesss_the_Magento_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.am_a_registed_user_on_Magento()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "balajidinakaran1@gmail.com",
      "offset": 35
    }
  ],
  "location": "StepDefn.i_am_update_the_valid_username_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome@1",
      "offset": 35
    }
  ],
  "location": "StepDefn.i_am_update_the_valid_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_am_able_to_click_signIn_btn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_should_access_view_the_dashboard()"
});
formatter.result({
  "status": "skipped"
});
});