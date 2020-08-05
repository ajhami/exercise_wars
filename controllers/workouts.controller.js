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
        console.log(req.body.title);
        Workouts
            .create({ 
                id: req.body._id,
                title: req.body.title,
                description: req.body.description,
                user: req.body.user,
                image: req.body.image,
                date: req.body.date,
                exercises: [{
                    exerciseName: req.body.exerciseName,
                    sets: req.body.sets,
                    reps: req.body.reps,
                    weight: req.body.weight
                }]
            })
            .then(data => {
                res.status(200).json(data);
                console.log(data)
            })
            .catch(error => {
                console.log(error);
            });
    }
};