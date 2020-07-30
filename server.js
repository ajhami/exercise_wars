const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const compression = require("compression");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db = require("./models");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Can use for logging
// app.use(morgan("combined"));
// app.use(bodyParser.json({type: "*/*" }))

const URI = process.env.MONGODB_URI || "mongodb://localhost/exercisewarsDB" 

mongoose.connect(URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/apiRoutes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});