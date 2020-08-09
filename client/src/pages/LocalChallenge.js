import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MinuteChallenge from '../components/MinuteChallenge';
// import API from "../utils/API";



class LocalChallenge extends Component {


  render() {
    return (
      <div>
        <NavBar />
        < MinuteChallenge />
        <Footer />

      </div>
    );
  };
};
export default LocalChallenge;