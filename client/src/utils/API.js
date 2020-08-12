import axios from 'axios';

export default {
    fetchWorkouts: function () {
        return axios
            .get("/api/workouts")
            .then(res => {
                const workouts = res.data;
                return workouts.map(workout => {
                    return {
                        key: workout._id,
                        id: workout._id,
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
}
