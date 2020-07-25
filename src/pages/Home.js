import React, { Component } from 'react';
// import API from "../utils/API";
import FriendFeed from "../components/FriendFeed"

class Home extends Component {


  render() {
    return (
      <div><h1> Friend Feed</h1>
        <FriendFeed />
      </div>

    );
  };
};
export default Home;