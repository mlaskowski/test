//Why i done like this ? When i grow end 2 end test for login i will try separate function.
//Use it many times for other case like "it('block user trying put null in age field ')"
describe('check login ', () => {
  it('block user under 13 years old', () => {

    let age;

    browser.setViewportSize({
      width: 1600,
      height: 1000
    });
    browser.url('https://mewe.com');


    checkAge(0);
    checkAge(12);


    function checkAge(age) {
      browser.waitForVisible('#registration-form', 20000);
      browser.setValue('#reg-first-filled', 'qzpmodwxm');
      browser.setValue('#reg-last-filled', 'qzpmodwxm');
      browser.setValue('#reg-email-phone-filled', 'freeq343@gmail.com');
      browser.setValue('#reg-email-phone-filled-repeat', 'freeq343@gmail.com');
      browser.setValue('#reg-password-filled', 'qp12#$%^&*');
      browser.setValue('#reg-user-age', age);
      browser.waitForVisible('#age-law-err', 10000);
      browser.click('#submit-registration');
      browser.waitForVisible('.reg-form .field.input-error', 10000);
      clear();
    };

    function clear() {
      browser.clearElement('#reg-first-filled');
      browser.clearElement('#reg-last-filled');
      browser.clearElement('#reg-email-phone-filled');
      browser.clearElement('#reg-email-phone-filled-repeat');
      browser.clearElement('#reg-password-filled');
      browser.clearElement('#reg-user-age');
    };

  });
});
