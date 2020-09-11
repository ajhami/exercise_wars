const { Workouts, Users } = require('../models');
const jwt = require("jwt-simple");
const secret = process.env.herokuAuthSecret || require("../config").secret;


module.exports = {
    getWorkouts: function (req, res) {
        console.log("Hit workout controller.");
        Workouts
            .find()
            .then(data => {
                res.status(200).json(data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    createWorkout: function (req, res) {

        // console.log("req.body");
        // console.log(req.body.exercises);

        const token = req.body.token;
        const decoded = jwt.decode(token, secret);

        let title = req.body.title;
        let workoutType = req.body.workoutType;
        let description = req.body.description;
        let image = req.body.image;
        let date = Date(Date.now());
        let time = req.body.timeHours*3600 + req.body.timeMinutes*60 + req.body.timeSeconds;
        let timeHours = req.body.timeHours;
        let timeMinutes = req.body.timeMinutes;
        let timeSeconds = req.body.timeSeconds;
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
                    console.log("data")
                    console.log(data)
                })
                .catch(error => {
                    console.log(error);
                });
                
                // res.send({ user: foundUser });
            }

        })

    }
};