// // Workouts:
// ID, // Name, // Exercises, // Reps, // Sets
// Time, // Weight, // Date, // Text
// Likes, // Comments, // Video, // Picture

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const challengeSchema = new mongoose.Schema({
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
  timeHours: {
    type: Number,
  },
  timeMinutes: {
    type: Number,
  },
  timeSeconds: {
    type: Number,
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

const Challenges = mongoose.model("challenge", challengeSchema);

module.exports = Challenges;