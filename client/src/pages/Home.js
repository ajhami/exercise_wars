import React, { Component } from 'react';
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
    this.props.getProfileData();
  }

  render() {

    // console.log("AFTER");
    console.log(this.props.user.followers);
    // console.log(this.props);


    // console.log(this.props.user.followers);

    return (
      <div>
        <NavBar />
        <Container className="mb-5">

          <Row>
            <Col md={4}>
              <ProfileCard
                // imageURL={process.env.PUBLIC_URL + "/assets/images/profile_placeholder.png"}
                imageURL={this.props.user.imageURL}
                username={this.props.user.username}
                location={this.props.user.location}
                followers={this.props.user.followers.length}
                following={this.props.user.following.length}
              />
 
            </Col>
            <Col md={4}>
              < MinuteChallenge />
            </Col>
            <Col md={4}>
              <FriendSuggestions
                id={1}
                name="Jack Edwards"
                location="Folsom, CA"
                profileImg="test_profile_img.jpg"
              />
            </Col>

          </Row>
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
