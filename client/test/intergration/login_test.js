/**
 * Created with JetBrains WebStorm.
 * User: chris
 * Date: 29/05/2014
 * Time: 20:48
 * To change this template use File | Settings | File Templates.
 */
 
module('Splash Page', {
  setup: function(){
  Ember.run(this, function () {
      //
   });
  }
});
test('Display welcome message', function() {
    expect(1);
    visit('/');
    andThen(function(){
        var el = find('h1');
        equal(el.length, 1, 'H1 tag must be present');
    });
});


test('Should display links for Ember Digest, Articles, Photos and Login', function() {
  expect(3);
  visit('/');
  andThen(function() {
    var el = find('a');
    equal(el[1].innerText, 'Articles', 'Articles link must be present');
    equal(el[2].innerText, 'Photos', 'Photos link must be present');
    equal(el[3].innerText, 'Login', 'Login link must be present');
   
  });
});

test('Should go to login route if login link is clicked', function() {
  expect(1);
  visit('/');
  Ember.run(function() {
        click('a:contains("Login")');
    });
  andThen(function() {
    equal(currentRouteName(), 'login');
  });
});

module('Login Page', {
  setup: function() {
    ajax.defineFixture('/auth.json', {
      response: {
          success: true,
          token: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        },
        jqXHR: {},
        textStatus: 'success'
    });

    ajax.defineFixture('/articles.json', {
      response: [
        {
            id: 1,
            title: 'How to write a JavaScript Framework',
            author: 'Tomhuda Katzdale',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 2,
            title: 'Chronicles of an Embereño',
            author: 'Alerik Bryneer',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 3,
            title: 'The Eyes of Thomas',
            author: 'Yehuda Katz',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    ],
    jqXHRL: {},
    textStatus: 'success'
    })
  },
  teardown: function() {}
});

test('Should check the login form exists', function() {
  expect(3);
  visit('/login');
  andThen(function() {
    var username = find('#username')[0];
    var password = find('#password')[0];
    var button = find('#loginSubmit')[0];
    equal(username.placeholder, 'Username');
    equal(password.placeholder, 'Password');
    equal(button.value, 'Log In');
  });
});

test('Should fill in login form with correct credentials and click submit', function() {
  expect(1);
  visit('/login');
  fillIn('#username', 'ember');
  fillIn('#password', 'casts');
  click('#loginSubmit');
  andThen(function() {
    equal(currentRouteName(), 'articles');
  });
});

   

