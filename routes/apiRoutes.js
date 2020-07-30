const Authentication = require("../controllers/authentication");
const router = require("express").Router();
const db = require("../models");
const passportService = require("../services/passport")
const passport = require("passport");



router.get("/", function(req, res, next) {
    res.send("Testing");
});

router.post("/signup", Authentication.signup);





module.exports = router;