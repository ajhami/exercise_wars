const db = require("../models");
const Users = db.Users;
const jwt = require("jwt-simple");
const secret = process.env.herokuAuthSecret || require("../config").secret;


function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, secret);
}

// Checking created credentials and retrieving user token
exports.signin = function (req, res, next) {
    res.send({ token: tokenForUser(req.user) });
}

exports.signup = function (req, res, next) {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const birthday = `${req.body.dobMonth}/${req.body.dobDay}/${req.body.dobYear}`;

    // Optional data
    let location = "";
    let height = 0;
    let weight = 0;
    if (req.body.locCity && req.body.locState) {
        location = `${req.body.locCity}, ${req.body.locState}`;
    };
    if (req.body.height) {
        height = req.body.height;
    }
    if (req.body.weight) {
        weight = req.body.weight;
    }

    Users.findOne({ username: username }, function (err, usernameFound) {
        if (err) {
            return next(err);
        }

        if (usernameFound) {
            return res.status(422).send({ err: "⚠ An account already exist under this username and/or email address. Try new credentials." });
        }
        else {
            // Checking for existing user
            Users.findOne({ email: email }, function (err, userFound) {

                if (err) {
                    return next(err);
                };

                // Returning error upon finding used account
                if (userFound) {
                    return res.status(422).send({ err: "⚠ An account already exist under this username and/or email address. Try new credentials." });
                };

                // Saving new account
                const user = new Users({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    username: username,
                    password: password,
                    birthday: birthday,
                    location: location,
                    height: height,
                    weight: weight
                });

                user.save(function (err) {
                    if (err) {
                        return next(err);
                    }

                    // Successful creation, login
                    res.json({ token: tokenForUser(user) });
                });

            });
        };
    });

};