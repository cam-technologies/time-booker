/**
 * Created with JetBrains WebStorm.
 * User: chris
 * Date: 29/05/2014
 * Time: 20:48
 * To change this template use File | Settings | File Templates.
 */

// Run before each test case.
QUnit.testStart(function () {
    Ember.run(function () { App.reset(); });
    // Display an error if asynchronous operations are queued outside of
    // Ember.run.  You need this if you want to stay sane.
    Ember.testing = true;
});

// Run after each test case.
QUnit.testDone(function () {
    Ember.testing = false;
});

 
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


   

