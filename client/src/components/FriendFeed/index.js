import React, { useState, useEffect } from 'react';
// import { Card, Button } from "reactstrap";
import API from "../../utils/API"
import Workout from "../Workout";

const FriendFeed = (props) => {
    const [workouts, setWorkouts] = useState([]);

    //set the workout to the resturn of the API
    useEffect(() => {
        API.fetchWorkouts()
            .then(res => {
                setWorkouts(res)
            })
    }, []);
    return (
        <div>
            {
            workouts.map(workout => {
                return (
            <Workout
                key={workout.id}
                id={workout.id}
                user={workout.user}
                date={workout.date}
                title={workout.title}
                time={workout.time}
                image={workout.image}
                description={workout.description}
                workoutType={workout.workoutType}
                likes={workout.likes}
                commments={workout.comments}
                exercises={workout.exercises}
            />
)}
)}
        </div>
    )
}

export default FriendFeed;

