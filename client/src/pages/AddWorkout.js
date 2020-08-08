import React, { Component } from 'react';
// import API from "../utils/API";
import { Container, Row, Col } from "reactstrap";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import requireAuth from "../components/requireAuth";
import NewWorkout from "../components/SaveWorkout";
import FriendFeed from "../components/FriendFeed";

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <Row>
            <Col md={6}>
            <h3>Add a Workout</h3>
              <NewWorkout />
            </Col>
            <Col md={6}>
            <h3>Feed</h3>
              <FriendFeed />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  };
};
export default requireAuth(Home);