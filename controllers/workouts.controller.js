const { Workouts } = require('../models');

module.exports = {
    getWorkouts: function (req, res) {
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
        console.log("req.body");
        console.log(req.body.exercises);
        Workouts
            .create({ 
                title: req.body.title,
                workoutType: req.body.workoutType,
                description: req.body.description,
                user: req.body.user,
                image: req.body.image,
                date: Date(Date.now()),
                user: "Brent",
                time: req.body.time,
                exercises: req.body.exercises
            })
            .then(data => {
                res.status(200).json(data);
                console.log("data")
                console.log(data)  
            })
            .catch(error => {
                console.log(error);
            });
    }
};