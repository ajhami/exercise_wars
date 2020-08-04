import React, { Component } from "react";

import Workout from "../Workout";
import postsJSON from "../../posts.json";

class FriendFeed extends Component {
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
                        key = {post.id}
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

export default FriendFeed;
