This project contains cypress & cypress-cucumber-preprocessor and few other plugins already set up.

Where there is a section in cypress's settings file, it is commented - so if you do not need that plugin, you can just delete those lines & perhaps run "npm uninstall name-of-the-package" to clean up.

You'll find here also some step definitons, hopefully some of those you could use in your own project. From others you'll perhaps learn something & with a bit of editing you'll tweak them so they'd suit your needs. Of course - the ones you'll find no use for, feel free to drop them from your project.

The main plugin installed is https://github.com/badeball/cypress-cucumber-preprocessor. That is the one which will allow you to create tests with the cucumber syntax - and make them more understandable for you, developers, even customer.

cypress-cucumber-preprocessor is set to create report files with .cucumber.json extension - these can be used by reporting plugin - in this project https://github.com/gkushang/cucumber-html-reporter is set up to use these.

