import React, { useState, useEffect } from 'react';
import { Card, Button } from "reactstrap";
import axios from "axios";
import Workout from "../Workout";
import postsJSON from "../../posts.json";

// class FriendFeed extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             posts: postsJSON
//         }
//     }

const FriendFeed = props => {
    const [posts, setPosts] = useState(
        []
    );

    // console.log(posts)

    useEffect(() => {
        axios.get("/api/workouts")
            .then(res => {
                    setPosts(res.data)
            })
            .catch(error => console.log(error))
    }, []);

    const handleLikeButton = event => {
        console.log(event)
        posts.unshift()
        console.log("like")
    }

    return (
        <div>
            <Card>
                <Button onClick={handleLikeButton}>Hi there</Button>
                <div className="card-header">
                    <h3 style={{ color: '#555', marginLeft: '12px' }}>Friend Feed</h3>
                </div>
                {posts.map(post => (
                    <Workout
                        key={post.id}
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
            </Card>
        </div>
    )
}

export default FriendFeed;
