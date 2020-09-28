import axios from 'axios';

export default {
    fetchWorkouts: function () {
        return axios
            .get("/api/workouts")
            .then(res => {
                const workouts = res.data;
                return workouts.map(workout => {
                    return {
                        key: workout._id || workout._id.$oid,
                        id: workout._id || workout._id.$oid,
                        user: workout.user,
                        date: workout.date,
                        title: workout.title,
                        time: workout.time,
                        timeHours: workout.timeHours,
                        timeMinutes: workout.timeMinutes,
                        timeSeconds: workout.timeSeconds,
                        image: workout.image,
                        description: workout.description,
                        workoutType: workout.workoutType,
                        likes: workout.likes,
                        comments: workout.comments,
                        exercises: workout.exercises
                    }
                })
            })
            .catch(error => console.log(error))
    },

    postWorkouts: function (workouts) {
        return axios
            .post("/api/workouts", workouts)
 
    },

    fetchWorkoutInputs: function () {
        return axios
        .get("/api/workouts")
        .then(function (response) {
        })
        .catch(error => console.log(error))
    },


    fetchChallenges: function () {
        return axios
            .get("/api/challenges")
            .then(res => {
                const challenges = res.data;
                return challenges.map(challenges => {
                    return {
                        key: challenges._id || challenges._id.$oid,
                        id: challenges._id || challenges._id.$oid,
                        // user: challenges.user,
                        date: challenges.date,
                        title: challenges.title,
                        time: challenges.time,
                        timeHours: challenges.timeHours,
                        timeMinutes: challenges.timeMinutes,
                        timeSeconds: challenges.timeSeconds,
                        image: challenges.image,
                        description: challenges.description,
                        workoutType: challenges.workoutType,
                        likes: challenges.likes,
                        comments: challenges.comments,
                        exercises: challenges.exercises
                    }
                })
            })
            .catch(error => console.log(error))
    },
}
