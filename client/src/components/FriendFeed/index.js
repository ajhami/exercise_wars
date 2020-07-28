import React, { Component } from "react";
import { Card } from "reactstrap";
// import { CardColumns } from "reactstrap";
import Post from "../Post";
import postsJSON from "../../posts.json";

class FriendFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: postsJSON
        }
    }
    render() {
        // console.log(this.state)
        return (
            <div>
                {this.state.posts.map(post => (
                        <Post
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
