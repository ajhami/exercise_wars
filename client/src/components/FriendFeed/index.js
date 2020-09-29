import React from 'react';
import Workout from "../Workout";
// window.onresize = function(){ window.location.reload(); }


const FriendFeed = (props) => {
    let i = 0;
    const clickDoWorkout = (workout) => {
        props.clickDoWorkout(workout)
    }
    return (
        <div>
            {
                props.workouts
                    .map(workout => {

                        return (
                            <Workout
                                key={i++}
                                id={workout.id}
                                user={workout.user}
                                date={workout.date}
                                title={workout.title}
                                time={workout.time}
                                timeHours={workout.timeHours}
                                timeMinutes={workout.timeMinutes}
                                timeSeconds={workout.timeSeconds}
                                image={workout.image}
                                description={workout.description}
                                workoutType={workout.workoutType}
                                likes={workout.likes}
                                comments={workout.comments}
                                exercises={workout.exercises}
                                clickDoWorkout={clickDoWorkout}
                            />
                        )
                    }
                    )
            }
        </div>

)
}

export default FriendFeed;

