import React, { Component } from "react";
// import { CardColumns } from "reactstrap";
import Workout from "../Workout";
import postsJSON from "../../posts.json";

class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: postsJSON
        }
    }
    render() {
        return (
            <div>
                {this.state.posts.map(post => (
                        <Workout
                            id={post.id}
                            user={post.user}
                            title={post.title}
                            image={post.image}
                            description={post.description}
                            likes={post.likes}
                            commments={post.comments}
                            exercises={post.exercises}
                        />
                ))}
            </div>
        )
    }
}

export default Portfolio;
