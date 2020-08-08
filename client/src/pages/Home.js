import React, { Component } from 'react';
// import API from "../utils/API";
import FriendFeed from "../components/FriendFeed";
import { Container, Row, Col } from "reactstrap";
import FriendSuggestions from "../components/FriendSuggestions";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import requireAuth from "../components/requireAuth";
import MinuteChallenge from "../components/MinuteChallenge";

class Home extends Component {

  render() {


    return (
      <div>
        <NavBar />
        <Container>
          <Row>
            <Col xs={5}>
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
            < MinuteChallenge />
          </Row>
        </Container>
        <Footer />
      </div>
    );
  };
};
export default requireAuth(Home);
