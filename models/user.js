const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    username: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String,
    birthday: Date,
    location: String,
    height: Number,
    weight: Number,
    memberSince: {
        type: Date,
        default: Date.now
    },
    following: {
        type: Array,
        default: []
    },
    followers: {
        type: Array,
        default: []
    },
    workouts: {
        type: Array,
        default: []
    }
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

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if(err) {
            return cb(err);
        };
        
        cb(null, isMatch);
    })
}

const Users = mongoose.model("Users", userSchema);

module.exports = Users;