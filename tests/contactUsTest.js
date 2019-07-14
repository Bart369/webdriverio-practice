beforeEach(function () {
    browser.url('/Contact-Us/contactus.html');
})

// This instructs our test to use a browser URL that points to the webdriveruniversity 
// contact us form.Remember we don’ t have to define the full URL path(e.g.www.webdriveruniversity.com / ) 
// because we have already defined this as our base URL in our WDIO.conf file

describe('Test Contact Us form WebdriverUni.', function () {
    it('Should be able to submit a successful submission via contact us form', function (done) {
        [name='first_name']
        [name='last_name']
        [name='email']
        [name='message']
        [type = 'submit']
   
    });

    it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
   
    });

    it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
   
    });

    it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
   
    });
});