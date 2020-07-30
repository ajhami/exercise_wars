import React, { Component } from 'react';
// import API from "../utils/API";
import FriendFeed from "../components/FriendFeed";
import FriendSuggestions from "../components/FriendSuggestions";

class Home extends Component {


  render() {
    return (
      <div><h1> Friend Feed</h1>
        <FriendFeed />
        <h3>Friend Suggestions</h3>
        <FriendSuggestions 
          id={1}
          name="Jack Edwards"
          location="Folsom, CA"
          profileImg="test_profile_img.jpg"
        />
      </div>

    );
  };
};
export default Home;