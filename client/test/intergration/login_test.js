/**
 * Created with JetBrains WebStorm.
 * User: chris
 * Date: 29/05/2014
 * Time: 20:48
 * To change this template use File | Settings | File Templates.
 */
// put app in qunit-fixture
App.rootElement =  '#ember-testing';
// turn on testing mode
App.setupForTesting();
App.injectTestHelpers();

QUnit.testStart(function () {
        Ember.run(function () { App.reset(); });
        Ember.testing = true;
});


module('Login page', function() {
    setup: App.reset();
});

//test('Display welcome message', function() {
//    visit('/').find('h1').then(function(el) {
//        equal(el.length, 1, 'H1 tag must be present');
//    });
//});


//test('Should display links for Articles, Photos and Login', function() {
//    visit('/').find('a').then(function(el) {
//        equal(el[0].getText(), 'Articles', 'Articles link must be present');
//        equal(el[0].getText(), 'Photos', 'Photos link must be present');
//        equal(el[0].getText(), 'Login', 'Login link must be present');
//    })
//})

