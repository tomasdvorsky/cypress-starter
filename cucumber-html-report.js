var reporter = require('cucumber-html-reporter');
var options = {
        theme: 'bootstrap',
        jsonDir: 'cypress/reports-cucumber',
        output: 'cypress/reports/report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
          "App Version":"5.5.0",
          "Test Environment": "project name",
          "Browser": "Chrome",
          "Platform": "Windows 10",
          "Parallel": "Scenarios",
          "Executed": "Remote"
        }
    };

reporter.generate(options);