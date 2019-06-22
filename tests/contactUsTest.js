browser
    .init()
    .setViewportSize({
      width: 1200,
      height: 800
    })
    .url('https://webdriveruniversity.com')
    //.setValue('#search_form_input_homepage', 'WebdriverIO')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
    })
    .click('#contact-us')
    .pause(3000)
    .end();