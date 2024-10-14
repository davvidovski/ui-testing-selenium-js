const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function createDriver() {
    let chromeOptions = new chrome.Options();
    chromeOptions.addArguments('--headless'); // Run in headless mode
    chromeOptions.addArguments('--no-sandbox'); // Required for some CI environments
    chromeOptions.addArguments('--disable-dev-shm-usage'); // Overcomes limited resource problems
    chromeOptions.addArguments('--disable-gpu'); // Applicable for older versions of Chrome
    chromeOptions.addArguments('--start-maximized'); // Optionally keep this for local runs

    // Initialize the ChromeDriver with the specified options
    return await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(chromeOptions)
        .build();
}

module.exports = { createDriver };
