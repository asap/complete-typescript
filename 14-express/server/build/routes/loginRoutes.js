"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Access Denied');
}
var router = express_1.Router();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input name=\"email\" placeholder=\"user@example.com\"/>\n      </div>\n      <div>\n        <label>Password</label>\n        <input name=\"password\" type=\"password\" placeholder=\"***********\"/>\n      </div>\n      \n      <button>Login</button>\n    </form>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && validLogin(email, password)) {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('You must provide valid credentials');
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('This is a secret place');
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <div>You're logged in</div>\n        <a href=\"/logout\">Logout</a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n        <div>Please log in</div>\n        <a href=\"/login\">Login</a>\n      </div>\n    ");
    }
});
var validLogin = function (email, password) {
    return (email === 'user@example.com' && password === 'secret');
};
