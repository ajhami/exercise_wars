import React, { Component } from 'react';
// import API from "../utils/API";
import FriendFeed from "../components/FriendFeed";
import { Container, Row, Col } from "reactstrap";
import FriendSuggestions from "../components/FriendSuggestions";
<<<<<<< HEAD
import axios from "axios";
=======
import NewWorkout from "../components/SaveWorkout";
>>>>>>> master

class Home extends Component {



  render() {
    axios.get("/api/workouts")
      .then(function (response) {
        console.log(response);
      })
    .catch (error => console.log(error))

    return (

      <Container>
<<<<<<< HEAD
        <Row>
          <Col><div>

          </div>
          </Col>
          <Col xs={5}>
            <h3> Friend Feed</h3>
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
=======
  <Row>
    <Col><NewWorkout/></Col>
    <Col xs={5}>
      <h3> Friend Feed</h3>
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
>>>>>>> master
    );
  };
};
export default Home;

