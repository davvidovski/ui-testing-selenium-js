# UI Testing with Selenium and JavaScript

## Overview

This repository contains automated UI tests for a demo website using Selenium WebDriver with JavaScript. The tests are designed to verify the functionality and performance of the web application's user interface.

## Prerequisites

1. **Node.js**: Ensure Node.js is installed. You can download it from [Node.js Official Site](https://nodejs.org/en/download/) or use a package manager.

   - **For MSI Installer**: [Download MSI Installer](https://nodejs.org/en)
   - **Using Package Manager**: [Instructions for Various OS](https://nodejs.org/en/download/package-manager)

2. **Dependencies**: This project requires the following Node.js package:
   - `selenium-webdriver` - A library to control web browsers using the WebDriver protocol.
   - `chromedriver`- The ChromeDriver binary for Selenium WebDriver.
   - `webdriver-manager`- For managing WebDriver instances.

## Setup

1. **Initialize the Project**

   Clone the repository, navigate into it and initialize the project:

   ```bash
   git clone https://github.com/davvidovski/ui-testing-selenium-js.git
   npm init -y

2. **Install Dependencies**

    ```bash
    npm install selenium-webdriver chromedriver webdriver-manager

## Running tests

1. Running tests locally

To run the UI tests, execute the test script using Node.js:

    ```bash
    node tests\testHomepageValidations.js

Additional Inforumtion

- ChromeDriver is managed automatically by the chromedriver package, so you don't need to manually download it or set it in your system PATH.
- Make sure your version of Chrome is compatible with the version of chromedriver being used.
- Update the locators in your test scripts if there are changes to the website's structure.
