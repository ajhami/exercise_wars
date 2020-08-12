import React, { Component } from 'react';
import SoloCard from "../components/SoloCard"
import MinuteChallenge from "../components/MinuteChallenge"
class PushUps extends Component {

    render() {
        return (

          <SoloCard name="Push Ups" imgsrc="assets/images/logo/pushup.png"  style ={{marginLeft:"15px", marginTop: "15px"}}/>
         
        );
    };
};

export default PushUps