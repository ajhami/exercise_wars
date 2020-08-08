import React from 'react';
import { Button } from "reactstrap";
import "./style.css";
import Exercises from "../Exercises"
import { Table } from "reactstrap";

function Workout(props) {
    // const [exercises, setExercises] = useState(
    //     []
    // );

    // useEffect(() => {
    //     axios.get("/api/workouts")
    //         .then(res => {
    //                 setExercises(res.data)
    //                 console.log(res.data[0].exercises)
    //         })
    //         .catch(error => console.log(error))
    // }, []);

    return (



        <div className="card">
            <div className="img-container">
                <img alt={props.title} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>{props.title}</strong>
                        <p>{props.description}</p>
                        <p className="userStyle">{props.user}</p>
                    </li>
                    <li>
                        <Table striped bordered hover className="exerciseTable">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>exercise</th>
                                    <th>weight</th>
                                    <th>dist.</th>
                                    <th>reps</th>
                                    <th>sets</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.exercises
                                    .map((exercise, idx) => (
                                        <Exercises
                                            key={exercise._id}
                                            exerciseNumber={idx + 1}
                                            exerciseName={exercise.name}
                                            distance={exercise.distance}
                                            reps={exercise.reps}
                                            sets={exercise.sets}
                                            weight={exercise.weight}
                                        />
                                    ))
                                }
                            </tbody>
                        </Table>
                    </li>
                    <li>
                        <Button>Likes: {props.likes}</Button>
                    </li>
                    <li>
                        <Button>Comments: {props.comments}</Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}



export default Workout;