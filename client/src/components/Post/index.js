import React from "react";
import { Button } from "reactstrap";
import "./style.css";
import Exercises from "../Exercises"

function Post(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.title} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>ID:</strong> {props.id}
                    </li>
                    <li>
                        <strong>User:</strong> {props.user}
                    </li>
                    <li>
                        <strong>Title:</strong> {props.title}
                    </li>
                    <li>
                        <strong>Description:</strong> {props.description}
                    </li>
                    <li>
                        <Exercises>
                            <strong>Excercises:</strong> {props.exercises}</Exercises>
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

    );
}

export default Post;
