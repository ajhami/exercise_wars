
import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import FriendSuggestions from "../components/FriendSuggestions";
import FriendFeed from "../components/FriendFeed";
import axios from "axios";
// import Context from '../utils/workoutContext';
// import fetchWorkouts from '../utils/fetchWorkouts';
// import Workout from "../components/Workout"

function Home() {
function clickButton() {
console.log("hi")
axios.get("/api/workouts")
.then(function (response) {
  console.log(response);
})
.catch(err => {console.log(err)})

}

  return (


    <Container>
      <Row>
        <Col>
        Howdy
        <Button  onClick={clickButton} />
        </Col>
        <Col xs={5}>
          <h1> Friend Feed</h1>
          <FriendFeed />
        </Col>
        <Col>
          <h3>Friend Suggestions</h3>
          <FriendSuggestions
            id={1}
            name="Jack Edwards"
            location="Folsom, CA"
            profileImg="test_profile_img.jpg"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;