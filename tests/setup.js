const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');  // Automatically loads ChromeDriver

async function createDriver() {
    let chromeOptions = new chrome.Options();
    chromeOptions.addArguments('--no-sandbox');
    chromeOptions.addArguments('--disable-dev-shm-usage');
    chromeOptions.addArguments('--disable-gpu');
    chromeOptions.addArguments('--headless');  // Add headless mode if needed

    return await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(chromeOptions)
        .build();
}

module.exports = { createDriver };
