const router = require('express').Router();
const workoutRoutes= require('./workouts.routes');

router.use('/workouts', workoutRoutes);
router.use('/profile', router);
router.get("/", function(req, res, next) {
    res.send("Testing");
});

module.exports = router;