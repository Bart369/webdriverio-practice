// var expect = require('chai').expect;  So that we don't have to insert these into every file, they've been placed in config's "before" hook
// var should = require('chai').should();

// var assert = require('assert'); *** nodejs assertions which we will not use. We use the chai assertion aboves

describe("Verify whether webdriveruniversity links on homepage work correctly", function() {
	it("check that the contact us button opens the contact us page", function(done) {
			browser.setViewportSize({
				width: 1000,
				height: 600
			})
			browser.url('/') 		// We stored the URL in the baseUrl variable in the config file and we are keeping our code dry by not repeaing the url
            var title = browser.getTitle();
            // assert.strictEqual(title, 'WebDriverUniversity.com') *** this node assertion got replaced by chai line 15 *** strict compares the two variables, fails if they are not equal.
			expect(title).to.equal('WebDriverUniversity.com');
            console.log('Title is: ' + title);
            //browser.debug() *** DEBUG=true npm test -- --spec=webdriverUniversityTest.js.
            browser.click("#contact-us")
            var tabIds = browser.getTabIds();
            console.log(tabIds);
            browser.switchTab(tabIds[1]);
            browser.pause(3000);
            browser.close();
	});

	it("check that the login button opens the login portal page", function(done) {
			browser.url('/')  // "/" parameter will use the baseUrl set in the config file.
		
			var title = browser.getTitle();
			// assert.strictEqual(title, 'WebDriverUniversity.com') *** this node assertion got replaced by chai line 26
			title.should.equal('WebDriverUniversity.com');
            console.log('Title is: ' + title);
            browser.click('#login-portal')
            var tabIds = browser.getTabIds();            
            browser.switchTab(tabIds[1]);
			browser.pause(3000)
	})
});
