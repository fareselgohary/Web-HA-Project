var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy
const user = require('./models/db')


passport.use(new LocalStrategy(function verify(username, password, cb) {
    db.get('SELECT * FROM users WHERE username = ?', [username], function (err, user) {
        if (err) { return cb(err); }
        if (!user) { return cb(null, false, { message: 'Incorrect username or password.' }); }