

// require ('dotenv').config();

const path = require("path");
const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const compression = require("compression");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db = require("./models");
const routes = require("./routes");
const cors = require("cors");


const uuid = require('uuid');
const { patch } = require('./routes');
const { ApiGatewayManagementApi } = require('aws-sdk');


const PORT = process.env.PORT || 3001;
// const profile = require( './routes/api/profile' );
const app = express();

app.use(cors()); // You will need to figure out how to limit cors access 
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use( '/api/profile', profile );

app.use(express.static("public"));

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  // app.get("*", (req, res) => {
  //   res.sendFile(path.join(__dirname + "/client/build/index.html"));
  // });
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}


const URI = process.env.MONGODB_URI || "mongodb://localhost/exercisewarsDB" 
// const URI = process.env.MONGODB_URI || "mongodb://exercisewars:tigersharkblue7@ds127173.mlab.com:27173/heroku_4jddjplw";


mongoose.connect(URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(routes);

app.listen(PORT, () => {
  console.log("\nWELCOME TO EXPRESS SERVER!\nApp = Exercise Wars\nrunning on port ", PORT);
});