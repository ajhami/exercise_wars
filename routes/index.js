const Authentication = require("../controllers/authentication");  //maybe able to take off the "/authentication -bp"
const router = require("express").Router();
const db = require("../models");
require("../services/passport");
const passport = require("passport");
const apiRoutes = require('./api');
const { ExtractJwt } = require("passport-jwt");
const jwt = require("jwt-simple");
const secret = process.env.herokuAuthSecret || require("../config").secret;
// const path = require("path")


const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

router.post("/signin", requireSignin, Authentication.signin);
router.post("/signup", Authentication.signup);

router.use('/api', apiRoutes);
//Scott 
// router.get("*",(req, res)=>{
//     res.sendFile(path.join(__dirname,"../client/public/index.html"))
// }) 

// Path for grabbing user data
router.post("/getuser", function (req, res) {
    const token = req.body.token;

    const decoded = jwt.decode(token, secret);

    db.Users.findOne({ _id: decoded.sub }, function (err, userFound) {
        if (err) {
            throw err;
        };

        if (userFound) {
            let userToSend = {};
            userToSend.firstName = userFound.firstName;
            userToSend.lastName = userFound.lastName;
            userToSend.username = userFound.username;
            userToSend.location = userFound.location;
            userToSend.birthday = userFound.birthday;
            userToSend.height = userFound.height;
            userToSend.weight = userFound.weight;
            userToSend.followers = userFound.followers;
            userToSend.following = userFound.following;
            userToSend.imageURL = userFound.imageURL;

            res.send({ user: userToSend });
        }

    });


});


router.post("/searchProfiles", function (req, res) {
    const searchedUsername = req.body.searchedUsername;

    db.Users.find({ username: { $regex: searchedUsername } }, function (err, matchedUsers) {

        if (err) {
            throw err;
        }

        if (matchedUsers) {
            let matchedUsersArray = [];

            matchedUsers.map(match => {
                matchedUsersArray.push({ username: match.username, imageURL: match.imageURL });
            });

            res.send({ matchedUsers: matchedUsersArray });
        }

        else {
            res.send({ matchedUsers: [{ username: "", imageURL: "" }] })
        }

    });
});

router.post("/updateProfile", function (req, res) {

    const token = req.body.profileUpdates.token;

    const decoded = jwt.decode(token, secret);

    db.Users.updateOne({ _id: decoded.sub }, {
        location: req.body.profileUpdates.location,
        height: req.body.profileUpdates.height,
        weight: req.body.profileUpdates.weight
    }
        , function (err, userFound) {

            if (err) {
                throw err;
            }

            else {
                // console.log(userFound);
                // res.send({ updatedData: userFound });
                res.end();
            }
        }
    );

    res.send({ updatedData: req.body });
});


router.post("/updateProfileImg", function (req, res) {

    const token = req.body.imageObject.token;

    const decoded = jwt.decode(token, secret);

    db.Users.updateOne({ _id: decoded.sub }, {
        imageURL: req.body.imageObject.imageURL
    }
        , function (err, userFound) {

            if (err) {
                throw err;
            }

            else {
                // console.log(userFound);
                // res.send({ updatedData: userFound });
                res.end();
            }
        }
    );

    res.send({ updatedImgData: req.body });
});


// Path for grabbing user data
router.post("/getUserImg", function (req, res) {
    const username = req.body.username;

    db.Users.findOne({ username: username }, function (err, userFound) {
        if (err) {
            throw err;
        };

        if (userFound) {
            res.send({ url: userFound.imageURL });
        }

    });


});


// Path for grabbing user data
router.post("/newFollow", function (req, res) {
    const userToFollow = req.body.newUser;
    const token = req.body.token;

    // console.log(userToFollow, token);

    const decoded = jwt.decode(token, secret);

    db.Users.findOne({ username: userToFollow }, function (err, userFound) {
        if (err) {
            throw err;
        };

        if (userFound) {

            console.log("reached inside of backend call!");
            // console.log(userFound);
            db.Users.findOneAndUpdate(
                { _id: decoded.sub },
                { 
                    $push: {
                        following: {
                            username: userFound.username,
                            imageURL: userFound.imageURL
                        }
                    }
                },
                function (err) {
                    if(err) {
                        console.log(err);
                    }
                    else {
                        db.Users.findOne({ _id: decoded.sub }, function (err, currentUserFound) {
                            if (err) {
                                throw err;
                            }

                            if (currentUserFound) {
                                db.Users.findOneAndUpdate(
                                    { username: userToFollow },
                                    {
                                        $push: {
                                            followers: {
                                                username: currentUserFound.username,
                                                imageURL: currentUserFound.imageURL
                                            }
                                        }
                                    },
                                    function (err) {
                                        if (err) {
                                            console.log(err);
                                        }
                                        else {
                                            res.end();
                                        }
                                    }
                                )
                            }
                        })
                    }
                }
            )


        }

    });


});

module.exports = router;