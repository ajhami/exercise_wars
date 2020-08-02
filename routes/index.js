const router = require('express').Router();
const apiRoutes = require('./api');
const Authentication = require("../controllers/authentication");
const passportService = require("../services/passport")
const passport = require("passport");

// router.post("/signup", Authentication.signup);
router.use('/api', apiRoutes);

// router.post("/signin", Authentication.signin);
// router.post("/signup", Authentication.signup);

module.exports = router;