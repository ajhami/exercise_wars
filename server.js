const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const URI = process.env.MONGODB_URI || "mongodb://localhost/exerccise"

mongoose.connect(URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
//app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});