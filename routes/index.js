const Authentication = require("../controllers/authentication");  //maybe able to take off the "/authentication -bp"
const router = require("express").Router();
const db = require("../models");
require("../services/passport");
const passport = require("passport");
const apiRoutes = require('./api');
// const path = require("path")

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

router.post("/signin", requireSignin, Authentication.signin);
router.post("/signup", Authentication.signup);

router.use('/api', apiRoutes);
//Scott 
// router.get("*",(req, res)=>{
//     res.sendFile(path.join(__dirname,"../client/public/index.html"))
// }) 

module.exports = router;