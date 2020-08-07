import React, { useState, useEffect} from 'react';
import axios from "axios";

import Workout from "../Workout";
// import postsJSON from "../../posts.json";

// class FriendFeed extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             posts: postsJSON
//         }
//     }

const FriendFeed = props => {

    const [friendFeed, setfriendFeed] = useState();
    // const [friendFeed, setfriendFeed] = useState([])
    ;

    useEffect(() => {
        axios.get("/api/workouts")
          .then(res => {
            let friendFeed = res.data.results

            console.log(friendFeed)
        })
          .catch(error => console.log(error))
      }, []);


return (
    <div>
        {friendFeed.map(post => (
            <Workout
                key={friendFeed.id}
                id={friendFeed.id}
                user={friendFeed.user}
                title={friendFeed.title}
                image={friendFeed.image}
                description={friendFeed.description}
                likes={friendFeed.likes}
                commments={friendFeed.comments}
                exercises={friendFeed.exercises}
            />
        ))}
    </div>
)
    }

export default FriendFeed;
