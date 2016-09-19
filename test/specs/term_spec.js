


describe('check terms ', () => {
  it('terms popup displayed', () => {

    browser.setViewportSize({
      width: 1600,
      height: 1000
    });
    browser.url('https://mewe.com');
    browser.waitForVisible('#registration-form', 20000);
    browser.click('#terms-of-service');
    browser.waitForVisible('#terms-dialog', 10000);

  });
});
