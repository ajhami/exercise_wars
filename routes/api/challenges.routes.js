const router = require('express').Router();
const { challengesController } = require("../../controllers")

// // path => /api/challenges/
router
    .route("/")
    .get(challengesController.getChallenges)
    .post(challengesController.createChallenge);

module.exports = router