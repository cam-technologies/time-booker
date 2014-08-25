'use strict';
var currentToken;

function login(req, res) {
    var body = req.body,
        username = body.username,
        password = body.password;

    if (username === 'ember' && password === 'casts') {
        // Generate and save the token (forgotten upon server restart).
        currentToken = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        res.send({
            success: true,
            token: currentToken
        });
    } else {
        res.send({
            success: false,
            message: 'Invalid username/password'
        });
    }
}

function isValidToken(req, res) {
    // Check POST, GET, and headers for supplied token.
    var userToken = req.body.token || req.param('token') || req.headers.token;

    if (!currentToken || userToken !== currentToken) {
        res.send(401, { error: 'Invalid token. You provided: ' + userToken });
        return false;
    }

    return true;
}

exports.login = login;
exports.isValidToken = isValidToken;
