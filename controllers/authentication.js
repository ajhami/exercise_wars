const db = require("../models");
const Users = db.Users;
const jwt = require("jwt-simple");
const config = require("../config");

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    // Ensuring users move in with valid email and password submissions
    if(!email || !password) {
        return res.send(422).send({ error: "Please provide the valid email and password!" })
    }

    // Checking for existing user
    Users.findOne({ email: email }, function(err, userFound) {

        if (err) {
            return next(err);
        };

        // Returning error upon finding used account
        if (userFound) {
            return res.status(422).send({ err: "Account already in use." })
        };

        // Saving new account
        const user = new Users({
            email: email,
            password: password
        });

        user.save(function (err) {
            if (err) {
                return next(err);
            }

            // Sucess message for login
            res.json({ token: tokenForUser(user) });
        });

    });




};