const passport = require("passport");
const db = require("../models");
const Users = db.Users;
const config = require("../config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

// JWT Strategy options
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

// Creating JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    // See if the user ID exists in payload
    Users.findById(payload.subdomains, function(err, user) {
        // When incorrect login is attempted
        if(err) {
            return done(err, false);
        };

        // User found
        if(user) {
            done(null, user);
        }
        // User not found
        else {
            done(null, false);
        };
    });
});

// Implement created strategy
passport.use(jwtLogin);