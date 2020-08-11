const passport = require("passport");
const db = require("../models");
const Users = db.Users;
const secret = process.env.herokuAuthSecret || require("../config").secret;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");


// Local strategy
const localLogin = new LocalStrategy({ usernameField: "email" }, function(email, password, done) {
    // Verifying the username and password
    Users.findOne({ email: email }, function(err, user) {
        // If login errors out
        if(err) {
            return done(err);
        }
        // If user email not found
        if(!user) {
            return done(null, false);
        }

        // Comparing passwords
        user.comparePassword(password, function(err, isMatch) {
            if(err) {
                return done(err);
            }
            if(!isMatch) {
                return done(null, false);
            }

            return done(null, user)
        })


    })
});

// JWT Strategy options
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: secret
};

// Creating JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    // See if the user ID exists in payload
    Users.findById(payload.sub, function(err, user) {
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
passport.use(localLogin);