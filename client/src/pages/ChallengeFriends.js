import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
// import API from "../utils/API";

class ChallengeFriend extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <h1> Hi there Challenge Friends</h1>
        <Footer />
      </div>
    );
  };
};
export default ChallengeFriend;