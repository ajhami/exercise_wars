import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import requireAuth from "../components/requireAuth";
import ProfileCard from '../components/ProfileCard/ProfileCard';
import * as actions from "./../actions";
import { compose } from "redux";
import { connect } from "react-redux";

class Home extends Component {

  componentDidMount = () => {
    this.props.getProfileData();
  }
  
  render() {

    localStorage.username = this.props.user.username;
    localStorage.imageURL = this.props.user.imageURL;
    localStorage.following = this.props.user.following;
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
