const router = require('express').Router();
const { workoutsController } = require("../../controllers")

// // path => /api/workouts/
router
    .route("/")
    .get(workoutsController.getWorkouts)
    // .get((req, res) => {
    //     console.log("hit routes folder");
    //     const emptyObj = {};
    //     res.send(emptyObj);
    // })
    .post(workoutsController.createWorkout);

module.exports = router