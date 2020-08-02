// // Workouts:
// ID, // Name, // Exercises, // Reps, // Sets
// Time, // Weight, // Date, // Text
// Likes, // Comments, // Video, // Picture

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }, 
  date: {
    type: String,
    required: true
  }, 
  user: {
    type: String,
    required: true
  }, 

  description: {
    type: String,
    default: "",
    unique: true
  },
  sets: {
    type: String,
    default: "",
    unique: true
  },
  reps: {
    type: String,
    default: "",
    unique: true
  },
  weight: {
    type: String,
    default: "",
    unique: true
  },
  description: {
    type: String,
    default: "",
    unique: true
  },
  exercises: {
    type: String,
    default: "",
    unique: true
  },
});

const Workouts = mongoose.model("workout", workoutSchema);

module.exports = Workouts;

