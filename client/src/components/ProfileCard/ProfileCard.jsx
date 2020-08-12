import React from "react";
import "./profilecard.css";
import {
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
    CardSubtitle
} from "reactstrap";
import { Link } from "react-router-dom";



function ProfileCard(props) {

    // let followers = props.followers;
    // console.log(followers);
    // let followersCount = followers.length;
    // console.log(followersCount);
    // console.log(props.following);

    return (
        <Card className="profile_card col-md-4">
            <CardImg top src={props.imageURL} alt="Profile Image" className="profile_card_img mt-4" />
            <CardBody className="profile_card" style={{alignText: "center"}}>
                <CardTitle className="username_title">{props.username}</CardTitle>
                <CardSubtitle className="user_location_text">{props.location}</CardSubtitle>
                <div className="row">
                        <CardText style={{marginLeft: "15px"}}>Followers: {props.followers} | Following: {props.following}</CardText>
                </div>
            </CardBody>
        </Card>
    );
};

export default ProfileCard;