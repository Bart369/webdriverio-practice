browser
    .url('https://webdriveruniversity.com')
    //.setValue('#search_form_input_homepage', 'WebdriverIO')
    .click('#login-portal')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
    })
    .end();


