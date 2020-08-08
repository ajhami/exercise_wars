// // Workouts:
// ID, // Name, // Exercises, // Reps, // Sets
// Time, // Weight, // Date, // Text
// Likes, // Comments, // Video, // Picture

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  workoutType: {
    type: String,
  },
  image: {
    type: Object,
  },
  date: {
    type: String,
  },
  user: {
    type: String,
  },
  description: {
    type: String,
  },
  time: {
    type: String,
  },

  exercises: [{
    exerciseName: {
      type: String,
    },
    sets: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    weight: {
      type: String,
    },
    distance: {
      type: String,
    }
  }],
  likes: {
    type: Number,
    default: 0
  },
  comments: {
    type: Array,
    default: []
  }

});

const Workouts = mongoose.model("workout", workoutSchema);

module.exports = Workouts;