const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function createDriver() {
    let chromeOptions = new chrome.Options();
    chromeOptions.addArguments('--no-sandbox');
    chromeOptions.addArguments('--disable-dev-shm-usage');
    chromeOptions.addArguments('--disable-gpu');
    chromeOptions.addArguments('--remote-debugging-port=9222'); // Useful for debugging
    chromeOptions.addArguments('--headless'); // Run in headless mode

    return await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(chromeOptions)
        .build();
}

module.exports = { createDriver };
