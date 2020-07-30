const Authentication = require("../controllers/authentication");
const router = require("express").Router();
const db = require("../models");
const passportService = require("../services/passport")
const passport = require("passport");



router.get("/", function(req, res, next) {
    res.send("Testing");
});

router.post("/signup", Authentication.signup);

router.get("/workouts", (req, res) => {
    // const workout = new db.Workouts ({name: "Brentasdf"});
    // workout.save(function (err, result) {
    //     if (err) return res.send(err);
    //     res.json(result)
    //   });

    db.Workouts.find({
    // }, function(err, response){
    //     if(err) {res.send(err)}
    //     else {res.json(response)}
    })
      .then(response => res.json(response))
      .catch(err => res.status(422).end());

  });


module.exports = router;