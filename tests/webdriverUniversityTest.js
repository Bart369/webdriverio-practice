var assert = require('assert'); //nodejs assertions

describe("Verify whether webdriveruniversity links on homepage work correctly", function() {
	it("check that the contact us button opens the contact us page", function(done) {
			browser.setViewportSize({
				width: 1000,
				height: 600
			})
			browser.url('/') 		// We stored the URL in the baseUrl variable in the config file and we are keeping our code dry by not repeaing the url
			var title = browser.getTitle();
			assert.strictEqual(title, 'WebDriverUniversity.com') //strict compares the two variables, fails if they are not equal.
			console.log('Title is: ' + title);
			browser.click("#contact-us")
			browser.pause(3000)
	});

	it("check that the login button opens the login portal page", function(done) {
			browser.url('/')  // "/" parameter will use the baseUrl set in the config file.
			browser.click('#login-portal')
			var title = browser.getTitle();
			assert.strictEqual(title, 'WebDriverUniversity.com')
			console.log('Title is: ' + title);
			browser.pause(3000)
	})
});
