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


module('Login page', function() {});

test('Display welcome message', function() {
    visit('/').find('h1').then(function(el) {
        equal(el.length, 1, 'H1 tag must be present');
    });
});


test('Simple test', function() {
    equal(1, 1, 'Must be equal');
});

