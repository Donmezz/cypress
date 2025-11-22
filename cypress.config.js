const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,                // Video kaydı kapalı
  screenshotOnRunFailure: false, // Hata olunca screenshot alma

  e2e: {
    setupNodeEvents(on, config) {
      // Chrome/Chromium başlatılırken CPU yükünü azaltma
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.family === "chromium") {
          // CPU & RAM yükünü düşüren argümanlar
          launchOptions.args.push("--disable-dev-shm-usage");
          launchOptions.args.push("--disable-gpu");
          launchOptions.args.push("--no-sandbox");
          launchOptions.args.push("--disable-site-isolation-trials");
        }
        return launchOptions;
      });

      return config;
    },
  },
});
