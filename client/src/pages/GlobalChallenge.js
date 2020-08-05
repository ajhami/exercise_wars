import React, { Component } from 'react';
import "./GlobalChallenge.css";
// import API from "../utils/API";
import GroupCard from "../components/GroupCard";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

class GlobalChallenge extends Component {


  render() {
    return (
      <div>
        <NavBar />
        <h1> Hi there Global Challenge</h1>
        <div className="row">
          <GroupCard 
            groupName="UCBC Fitness Club"
            groupImg="group_demo_img.jpg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur incidunt accusantium officiis, eveniet tempora temporibus quo optio animi vero consequuntur corporis eaque voluptates, voluptatibus sapiente suscipit, obcaecati quae laborum odio."
          />
        </div>
        <Footer />
      </div>
    );
  };
};
export default GlobalChallenge;