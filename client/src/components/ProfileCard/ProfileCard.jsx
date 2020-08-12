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
            <CardBody>
                <CardTitle className="username_title">{props.username}</CardTitle>
                <CardSubtitle className="user_location_text">{props.location}</CardSubtitle>
                <div className="row">
                        <CardText><Link to="#">Followers:</Link> {props.followers}</CardText>
                    <p>|</p>
                    {/* <Link to="#"> */}
                        <CardText><Link to="#">Following:</Link> {props.following}</CardText>
                    {/* </Link> */}
                </div>
            </CardBody>
        </Card>
    );
};

export default ProfileCard;