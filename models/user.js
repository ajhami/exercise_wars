const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
});

// Encrypting password using bcryprt-nodejs
userSchema.pre("save", function(next) {
    // accessing the user model schema
    const user = this;

    // generating a salt
    bcrypt.genSalt(10, function (err, salt) {
        if(err) {
            return next(err);
        }

        // Hashing the password using the salt
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if(err) {
                return next(err);
            };

            // overwriting the original password input with encrypted password
            user.password = hash;
            next();
        });
    });
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;