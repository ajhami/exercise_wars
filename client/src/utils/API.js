import axios from 'axios';
const APIURL = "some text"

export default { 
    fetchWorkouts:function() {
        return axios
        .get("/api/workouts")
        .then(res => {
            const workouts = res.data;
            return workouts.map(workout => {
                return {
                    key: workout._id,
                    id: workout._id,
                    user: workout.user,
                    title: workout.title,
                    image: workout.image,
                    description: workout.description,
                    workoutType: workout.workoutType,
                    likes: workout.likes,
                    commments: workout.comments,
                    exercises: workout.exercises

                }
            })
        })
        .catch(error => console.log(error))
    }
}
