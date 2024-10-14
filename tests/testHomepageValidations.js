const { createDriver } = require('../tests/setup');  // Use createDriver function
const HomePage = require('../pages/homePage'); // Import the HomePage class

(async function testTelerikHomepage() {
    const driver = await createDriver(); // Make sure driver is correctly created

    try {
        const homePage = new HomePage(driver);  // Pass the driver to the page object

        await homePage.load();
        console.log("Page is fully loaded.");

        const currentUrl = await driver.getCurrentUrl();
        console.log("Current URL is: " + currentUrl);
        if (currentUrl !== 'https://www.telerik.com/') {
            throw new Error("The current URL does not match the expected value.");
        }
        console.log("URL is correct.");

        const pageTitle = await driver.getTitle();
        console.log("Page title is: " + pageTitle);
        if (!pageTitle.includes("Telerik & Kendo UI")) {
            throw new Error("Page title does not match expected value.");
        }

        await homePage.acceptCookieConsent();
        console.log("Cookie consent accepted.");

        await homePage.validateElements();
        
    } catch (error) {
        console.error('Test failed:', error);

        // Ensure the screenshot directory exists
        const screenshotDir = './error-screenshots';
        if (!fs.existsSync(screenshotDir)) {
            fs.mkdirSync(screenshotDir);
        }

        const timestamp = new Date().toISOString().replace(/:/g, "-");
        await driver.takeScreenshot().then(function(image) {
            require('fs').writeFileSync(`${screenshotDir}/test-fail-${timestamp}.png`, image, 'base64');
        });
    } finally {
        await driver.quit();
    }
})();
