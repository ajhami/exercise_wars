import React, { Component } from 'react';
// import API from "../utils/API";
import FriendFeed from "../components/FriendFeed";
import { Container, Row, Col } from "reactstrap";
import FriendSuggestions from "../components/FriendSuggestions";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import requireAuth from "../components/requireAuth";
import MinuteChallenge from "../components/MinuteChallenge";
import ProfileCard from '../components/ProfileCard/ProfileCard';
import * as actions from "./../actions";
import { compose } from "redux";
import { connect } from "react-redux";

class Home extends Component {

  componentDidMount = () => {
    // let followers = ["fadsnkjlfwemfe1w", "wemm134345"]
    // let following = [];
    this.props.getProfileData();
    // console.log("BEFORE");
    // console.log(followers);
  }

  render() {

    // console.log("AFTER");
    console.log(this.props.user.followers);
    // console.log(this.props);


    // console.log(this.props.user.followers);

    return (
      <div>
        <NavBar />
        <Container>

          <Row>
            <Col md={4}>
              <ProfileCard
                imageURL={process.env.PUBLIC_URL + "/assets/images/profile_placeholder.png"}
                username={this.props.user.username}
                location={this.props.user.location}
                followers={this.props.user.followers.length}
                following={this.props.user.following.length}
              />
              <h3>Minute Challenge</h3>
              < MinuteChallenge />
            </Col>
            <Col md={4}>
              <h3>Feed</h3>
              <FriendFeed />
            </Col>
            <Col md={4}>
              <h3>Friend Suggestions</h3>
              <FriendSuggestions
                id={1}
                name="Jack Edwards"
                location="Folsom, CA"
                profileImg="test_profile_img.jpg"
              />
            </Col>

          </Row>
          <img src="https://exercisewarsbuckets.s3-us-west-2.amazonaws.com/street+view-1597032447301.jpg" alt="Test AWS"></img>
          <video width="480" height="320" controls="controls">
            <source src="https://exercisewarsbuckets.s3-us-west-2.amazonaws.com/US+Tops+5+Million+Coronavirus+Cases++Sunday+TODAY-1597034787088.mp4" type="video/mp4" />
          </video>
        </Container>
        <Footer />
      </div>
    );
  };
};


function mapStateToProps(state) {
  // return { errorMessage: state.auth.errorMessage };
  return {
    user: state.user.user
    // followersCount: state.user.user.followers.length,
    // followingCount: state.user.user.following.length
  };
}

export default requireAuth(compose(
  connect(mapStateToProps, actions)
)(Home));

// export default requireAuth(Home);
