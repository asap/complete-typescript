"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input name=\"email\" placeholder=\"user@example.com\"/>\n      </div>\n      <div>\n        <label>Password</label>\n        <input name=\"password\" type=\"password\" placeholder=\"***********\"/>\n      </div>\n      \n      <button>Login</button>\n    </form>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    res.send({ email: email, password: password });
});
