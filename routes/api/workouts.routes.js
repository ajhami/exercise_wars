const router = require('express').Router();
const { workoutsController } = require("../../controllers")

// // path => /api/workouts/
router
    .route("/")
    .post(workoutsController.getWorkouts)
    .post(workoutsController.createWorkout);

module.exports = router