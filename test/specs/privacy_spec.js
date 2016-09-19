import assert from 'assert';


describe('check privacy ', () => {
  it('privacy exists ', () => {

    browser.setViewportSize({
      width: 1600,
      height: 1000
    });
    browser.url('https://mewe.com/privacy');
    browser.waitForVisible('#react-app', 20000);

    let buttonTitle = browser.getAttribute('.orange-btn', 'title');
    let buttonText = browser.getText('.orange-btn');

    assert(buttonTitle === 'Sign Up For Free!');
    assert(buttonText === 'SIGN UP FOR FREE!');

  });
});
