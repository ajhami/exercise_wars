const { Workouts, Users } = require('../models');
const jwt = require("jwt-simple");
const secret = process.env.herokuAuthSecret || require("../config").secret;
const moment = require("moment");
const momentDurationFormatSetup = require("moment-duration-format");
// const { default: user } = require('../client/src/reducers/user');

momentDurationFormatSetup(moment);
typeof moment.duration.fn.format === "function";
// true
typeof moment.duration.format === "function";
// true



module.exports = {

    getWorkouts: function (req, res) {

        const token = req.body.token;
        const decoded = jwt.decode(token, secret);

        Users.findOne({ _id: decoded.sub }, function (err, userFound) {
            if (err) {
                throw err;
            }

            if(userFound) {

                let feedUsers = [];
                feedUsers.push(userFound.username);

                if(userFound.following.length > 0) {
                    userFound.following.map(following => {
                        feedUsers.push(following.username);
                    });

                }

                Workouts.find({ user: { $in: feedUsers } }, function (err, workoutsFound) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        res.json(workoutsFound);
                    }
                })
            }

        })
    },

    createWorkout: function (req, res) {
        const token = req.body.token;
        const decoded = jwt.decode(token, secret);

        let title = req.body.title;
        let workoutType = req.body.workoutType;
        let description = req.body.description;
        let image = req.body.image;
        let date = Date(Date.now());
        let timeHours = req.body.timeHours;
        let timeMinutes = req.body.timeMinutes;
        let timeSeconds = req.body.timeSeconds;
        let time = moment.duration(req.body.timeSeconds,"seconds").add(req.body.timeMinutes, "minutes").add(req.body.timeHours, "hours").format("hh:mm:ss");
        let exercises = req.body.exercises;

        Users.findOne({ _id: decoded.sub }, function (err, foundUser) {
            if (err) {
                throw err;
            };

            if (foundUser) {
                let userName = foundUser.username;
                
                Workouts
                .create({
                    title: title,
                    workoutType: workoutType,
                    description: description,
                    user: userName,
                    image: image,
                    date: date,
                    time: time,
                    timeHours: timeHours,
                    timeMinutes: timeMinutes,
                    timeSeconds: timeSeconds,
                    exercises: exercises
                })
                .then(data => {
                    res.status(200).json(data);
                })
                .catch(error => {
                    console.log(error);
                });
                
                // res.send({ user: foundUser });
            }

        })

    }
};