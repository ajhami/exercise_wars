const { Workouts } = require('../models');

module.exports = {
    getWorkouts: function (req, res) {
        console.log("hi")
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
        console.log('hiiiiiiit')
        console.log(req.body);
        Workouts
            .create({ value: req.body.value })
            .then(data => {
                res.status(200).json(data);
            })
            .catch(error => {
                console.log(error);
            });
    }
};