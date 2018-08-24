const {
    Builder,
    logging
  } = require("selenium-webdriver");
  const chrome = require("selenium-webdriver/chrome");
  const path = require("chromedriver").path;
  const fs = require("fs");


(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://www.msn.com');
        await driver.manage().logs().get(logging.Type.BROWSER)
            .then(function(entries) {
                entries.forEach(function(entry) {
                    console.log('[%s] %s', entry.level.name, entry.message);
                });
            });
    } finally {
        await driver.quit();
    }
})();
