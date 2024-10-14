const { By, until } = require('selenium-webdriver');
const locators = require('../locators/locators.json'); // Assuming locators are stored in a JSON file

class HomePage {
    constructor(driver) {
        this.driver = driver; // Ensure the driver is correctly initialized
    }

    // Load the Telerik homepage
    async load() {
        await this.driver.get('https://www.telerik.com');
        await this.driver.manage().window().maximize();
        await this.driver.wait(async () => {
            return await this.driver.executeScript('return document.readyState') === 'complete';
        }, 30000); // Wait for the page to load completely
    }

    // Accept cookie consent (with popup handling if necessary)
    async acceptCookieConsent() {
        try {
            await this.driver.wait(until.elementLocated(By.xpath(locators.homepage.agreeAndContinueButton)), 10000);
            let cookieConsentButton = await this.driver.findElement(By.xpath(locators.homepage.agreeAndContinueButton));
            await this.driver.executeScript("arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'});", cookieConsentButton);
            await this.driver.wait(until.elementIsVisible(cookieConsentButton), 10000);
            await cookieConsentButton.click();
            console.log("Cookie consent accepted.");
        } catch (error) {
            console.log("Cookie consent button not found or already accepted.");
        }
    }

    // Validate the presence and visibility of key elements on the homepage
    async validateElements() {
        const elementsToValidate = {
            telerikLogo: locators.homepage.telerikLogo,
            demosLink: locators.homepage.demosLink,
            servicesLink: locators.homepage.servicesLink,
            blogsLink: locators.homepage.blogsLink,
            docsAndSupportLink: locators.homepage.docsAndSupportLink,
            pricingLink: locators.homepage.pricingLink,
            searchInput: locators.homepage.searchInput,
            shoppingCartLink: locators.homepage.shoppingCartLink,
            loginLink: locators.homepage.loginLink,
            contactUsLink: locators.homepage.contactUsLink,
            freeTrialLink: locators.homepage.freeTrialLink,
        };

        for (const [name, locator] of Object.entries(elementsToValidate)) {
            console.log(`Waiting for ${name}...`);
            let element = await this.driver.findElement(By.xpath(locator));
            await this.driver.executeScript("arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'});", element);
            await this.driver.wait(until.elementIsVisible(element), 10000);
            console.log(`${name} is displayed: ` + (await element.isDisplayed()));
        }
    }
}

module.exports = HomePage;
