import React, { Component } from 'react';
// import API from "../utils/API";
import FriendFeed from "../components/FriendFeed";
import { Container, Row, Col } from "reactstrap";
import FriendSuggestions from "../components/FriendSuggestions";
import NewWorkout from "../components/SaveWorkout";

class Home extends Component {

  render() {


    return (

      <Container>
        <Row>
          <Col>
            <NewWorkout />
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
    );
  };
};
export default Home;

