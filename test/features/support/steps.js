
module.exports = function() {

  this.Given(/^I am on the Google homepage$/, function (callback) {
    browser
      .url('https://google.com/')
      .call(callback);
  });

  this.When(/^I add two numbers$/, function (callback) {
    var first = 1;
    var second = 2;
    var sum = first + second;
    callback();
  });

  this.Then(/^I should see a div$/, function (callback) {
    browser
      .waitForExist('div')
      .call(callback);
  });

  this.Then(/^not the flying spaghetti monster$/, function (callback) {
    browser
      .waitForExist('#fly-spag-mon', 5000, true)
      .call(callback);
    });

};
