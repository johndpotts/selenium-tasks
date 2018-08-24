const {
  Builder,
  By,
  Key,
} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const path = require("chromedriver").path;
const fs = require("fs");

const service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://www.facebook.com");
    await driver.findElement(By.name("email")).sendKeys("MY_EMAIL_ADDRESS");
    await driver.findElement(By.name("pass")).sendKeys("MY_PASSWORD", Key.RETURN);
    await driver.sleep(2000);
  } finally {
    await driver.quit();
  }
})();
