const {
  Builder,
  By,
  Key,
  until,
} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const path = require("chromedriver").path;
const fs = require("fs");

const service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://www.google.com/ncr");
    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
    await driver.takeScreenshot().then(function(image, err) {
      fs.writeFile("out.png", image, "base64", function(err) {
        err ? console.log(err) : console.log("image successfully stored");
      });
    });
  } finally {
    await driver.quit();
  }
})();
