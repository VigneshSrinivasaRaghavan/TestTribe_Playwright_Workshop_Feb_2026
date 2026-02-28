Feature: Orange HRM Admin Feature

Scenario: Navigate to Admin Page
Given user is on the orange hrm login page
When user enters valid username
And user enters valid password
And user clicks on the login button
And user clicks on admin tab
Then user will be navigated to the admin page 