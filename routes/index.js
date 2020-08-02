const Authentication = require("../controllers/authentication");
const router = require("express").Router();
const db = require("../models");
// const passportService = require("../services/passport");
require("../services/passport");
const passport = require("passport");


const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

router.post("/signin", requireSignin, Authentication.signin);
router.post("/signup", Authentication.signup);


module.exports = router;