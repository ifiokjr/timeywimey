export default function () {
  this.Before(async function (scenario) {
    await this.browser.init();
  });

  this.After(async function (scenario) {
    await this.browser.end();
  });
}
