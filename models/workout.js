// // Workouts:
// ID, // Name, // Exercises, // Reps, // Sets
// Time, // Weight, // Date, // Text
// Likes, // Comments, // Video, // Picture

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new mongoose.Schema({
  title: {
    type: String,
  }, 
  date: {
    type: String,
  }, 
  user: {
    type: String,
  }, 

  description: {
    type: String,
    default: "",

  },
  sets: {
    type: String,
    default: "",

  },
  reps: {
    type: String,
    default: "",

  },
  weight: {
    type: String,
    default: "",

  },
  description: {
    type: String,
    default: "",

  },
  exercises: {
    type: String,
    default: "",

  },
});

const Workouts = mongoose.model("workout", workoutSchema);

module.exports = Workouts;

