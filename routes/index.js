const Authentication = require("../controllers/authentication");  //maybe able to take off the "/authentication -bp"
const router = require("express").Router();
const db = require("../models");
require("../services/passport");
const passport = require("passport");
const apiRoutes = require('./api');
const { ExtractJwt } = require("passport-jwt");
const jwt = require("jwt-simple");
const config = require("../config");
// const path = require("path")

const secret = herokuAuthSecret || config.secret;

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

router.post("/signin", requireSignin, Authentication.signin);
router.post("/signup", Authentication.signup);

router.use('/api', apiRoutes);
//Scott 
// router.get("*",(req, res)=>{
//     res.sendFile(path.join(__dirname,"../client/public/index.html"))
// }) 

// Path for grabbing user data
router.post("/getuser", function (req, res) {
    console.log("req.body going to backend api call:");
    const token = req.body.token;
    console.log(token);

    const decoded = jwt.decode(token, secret);

    console.log("Decoded:");
    console.log(decoded.sub);
    
    db.Users.findOne({ _id: decoded.sub }, function (err, userFound) {
        if(err) {
            throw err;
        };

        if(userFound) {
            console.log("User found:");
            console.log(userFound);
            res.send({ user: userFound });
        }

    })
    

});

module.exports = router;