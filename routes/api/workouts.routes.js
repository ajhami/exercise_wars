const router = require('express').Router();
const { workoutContr } = require("../../controllers")


// // path => /api/workouts/
router
    .route("/")
    .get(workoutContr.getWorkouts)
    .post(workoutContr.createWorkout);

module.exports = router