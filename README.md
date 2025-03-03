# pyguide README

Provides additional Python diagnostic messages aimed at beginners.

UNDER DEVELOPMENT

## Features

PyGuide detects code issues that may indicate a misunderstanding of a concept or syntax, or a simple typo. Detected issues are underlined, just like other issues picked up by VSCode. Hover over underlined code to get some quick feedback.

![Hover over underlined code to see a brief feedback message](images/hover.gif)

Click the action in the lightbulb menu to open more detailed guidance and interactive examples in your browser.

![Click the action in the lightbulb menu to open more detailed guidance in your browser](images/lightbulb.gif)

You can also view detected issues in the Problems tab of your Terminal.
![Detected issues are listed in the problems pane in the terminal](images/problems.png)

## Requirements

PyGuide requires the [Microsoft Python for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-python.python) extension. It will automatically be installed if you do not already have it.

## Extension Settings

This extension contributes the following setting:

* `pyguide.researchDataPrivacy`: Enable/disable logging for this extension only. By default, this extension collects anonymous usage data to support research, unless you have disabled telemetry.

## Known Issues

This extension can only detect issues that are task independent—it cannot detect logic errors or strategic errors that would require knowledge of what you are working on. It is intended for beginner programmers so may not work with more advanced concepts and syntax.

It may falsely detect problems with PEP8 annotations. This will be fixed soon!

## Release Notes


### 0.0.1

Initial release of PyGuide