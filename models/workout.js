// // Posts:
// ID
// Name
// Exercises
// Reps
// Sets
// Time
// Weight
// Date
// Text
// Likes
// Comments
// Video
// Picture

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Workouts = mongoose.model("workout", workoutSchema);

module.exports = Workouts;

