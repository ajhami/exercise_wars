import React from 'react';
import Challenge from "../Challenge"



const MinuteChallenge = (props) => {
    let i = 0;
    const clickDoWorkout = (workout) => {
        props.clickDoWorkout(workout)
    }
    return (
        <div>
            {
                props.challenges
                    .map(workout => {

                        return (
                            <Challenge
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

export default MinuteChallenge;