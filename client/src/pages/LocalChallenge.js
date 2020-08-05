import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
// import API from "../utils/API";
class LocalChallenge extends Component {


  render() {
    return (
      <div>
        <NavBar />
        <h1> Hi there Local Challenge</h1>
        <Footer />
      </div>
    );
  };
};
export default LocalChallenge;