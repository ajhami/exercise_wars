import React from 'react';
import Workout from "../Workout";

const FriendFeed = (props) => {

    return (
        <div>
            {
                props.workouts
                    .map(workout => {
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
                        )
                    }
                    )
            }
        </div>
    )
}

export default FriendFeed;

