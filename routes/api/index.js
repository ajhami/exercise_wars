const router = require('express').Router();
const workoutRoutes= require('./workouts.routes');
const challengesRoutes= require('./challenges.routes');
const profile = require("./profile")

router.use('/workouts', workoutRoutes);
router.use('/challenges', challengesRoutes);
router.use('/profile', profile);
router.get("/", function(req, res, next) {
    res.send("Testing");
});

module.exports = router;