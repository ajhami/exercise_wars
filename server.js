const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const compression = require("compression");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db = require("./models");
const routes = require("./routes")

const PORT = process.env.PORT || 3001;

const app = express();

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


const URI = process.env.MONGODB_URI || "mongodb://localhost/exercisewarsDB" 

mongoose.connect(URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});