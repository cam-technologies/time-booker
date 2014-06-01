/**
 * Created with JetBrains WebStorm.
 * User: chris
 * Date: 29/05/2014
 * Time: 20:48
 * To change this template use File | Settings | File Templates.
 */
module('Login page', function() {});

test('Display welcome message', function() {
    visit('/').find('h1').then(function(el) {
        equal(el.length, 1, 'H1 tag must be present');
    });
});


test('Should display links for Ember Digest, Articles, Photos and Login', function() {
    visit('/').find('a').then(function(el) {
        equal(el[0].innerText, 'Ember Digest', 'Ember Digest link must be present');
        equal(el[1].innerText, 'Articles', 'Articles link must be present');
        equal(el[2].innerText, 'Photos', 'Photos link must be present');
        equal(el[3].innerText, 'Login', 'Login link must be present');
    })
})

