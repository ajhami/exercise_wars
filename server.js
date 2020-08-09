
require ('dotenv').config();
require ("./aws/index.js");
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

const PORT = process.env.PORT || 3001;
// const profile = require( './routes/api/profile' );
const app = express();

app.use(cors()); // You will need to figure out how to limit cors access 
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use( '/api/profile', profile );

app.use(express.static("public"));

const URI = process.env.MONGODB_URI || "mongodb://localhost/exercisewarsDB" 

mongoose.connect(URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(routes);

app.listen(PORT, () => {
  console.log("\nWELCOME TO EXPRESS SERVER!\nApp = Exercise Wars\nrunning on port ", PORT);
});


