/**
 * Created with JetBrains WebStorm.
 * User: chris
 * Date: 29/05/2014
 * Time: 20:48
 * To change this template use File | Settings | File Templates.
 */
 
module('Login Page', {
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
  expect(4);
  visit('/');
  andThen(function() {
    var el = find('a');
    equal(el[0].innerText, 'Ember Digest', 'Ember Digest link must be present');
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

//@TODO: 
//  work out how to incorportate https://github.com/trek/ember-testing-httpRespond 
//  into our code so we can do httpRespond like below and fake the http post

// test('Should fill in login form with correct credentials and click submit', function() {
//   visit('/login');
//   fillIn('#username', 'ember');
//   fillIn('#password', 'casts');
//   Ember.run(function() {
//     click('#loginSubmit');
//     httpRespond('post', '/auth.json', { success: true, token:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'});
//   });
//      andThen(function() {
//     equal(currentRouteName(), 'articles');
//   });
// });

// test('Should fill in login form with wrong credentials and click submit', function() {
//   visit('/login');
//   fillIn('#username', 'Andrew');
//   fillIn('#password', 'p4$$w0rd');
//   click('#loginSubmit');

//   andThen(function() {
//     equal(currentRouteName(), 'login');
//   })
// });
   

