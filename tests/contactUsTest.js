beforeEach(function () {
    browser.url('/Contact-Us/contactus.html');
})

// This instructs our test to use a browser URL that points to the webdriveruniversity 
// contact us form.Remember we don’ t have to define the full URL path(e.g.www.webdriveruniversity.com / ) 
// because we have already defined this as our base URL in our WDIO.conf file

describe('Test Contact Us form WebdriverUni.', function () {
    it('Should be able to submit a successful submission via contact us form', function (done) {
        browser.setValue("[name='first_name']", 'Joe');
        browser.setValue("[name='last_name']", 'Blogs');
        browser.setValue("[name='email']", 'joe_Blogs@mail.com');
        browser.setValue("[name='message']", "How much does X cost?");
        browser.click("[type = 'submit']");
    });
    
    // Using the Webdriverio setValue method. setValue sends a sequence of key strokes to an element(clears value before).
    // We also use Webdriverio's click command
    it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
        browser.setValue("[name='first_name']", 'Joe');
        browser.setValue("[name='last_name']", 'Blogs');
        browser.setValue("[name='email']", 'joe_Blogs@mail.com');
        browser.click("[type = 'submit']");
    });

    it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
        browser.setValue("[name='first_name']", 'Joe');
        browser.setValue("[name='email']", 'joe_Blogs@mail.com');
        browser.click("[type = 'submit']");
    });

    it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
         browser.setValue("[name='first_name']", 'Joe');
         browser.setValue("[name='last_name']", 'Blogs');
         browser.click("[type = 'submit']");
    });
});